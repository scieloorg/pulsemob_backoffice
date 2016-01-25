'use strict';

angular.module('sbAdminApp')
.controller('ArticlesCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', 'ArticleService', 'CategoryService', 'MagazineService', 'SolrService', 'ngDialog', 'Upload', 'toaster', function($scope, $rootScope, $stateParams, $filter, ArticleService, CategoryService, MagazineService, SolrService, ngDialog, Upload, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.save = save;
	vm.remove = remove;
	vm.selectRow = selectRow;
	vm.showDetails = showDetails;
	vm.showEditCover = showEditCover;
	vm.prepareRemove = prepareRemove;
	vm.toggleAdvancedSearch = toggleAdvancedSearch;
	vm.coverPath = coverPath;

	vm.init();
	
	function selectRow(article) {
		article.selected = !article.selected;

		if (!article.selected) {
			var index = vm.selectedArticles.indexOf(article);
			if (index > -1) {
				vm.selectedArticles.splice(index, 1);
			}
		} else {
			vm.selectedArticles.push(article);
		}

		vm.hasSelectedRow = false;

		angular.forEach(vm.articles, function(article, key) {
			vm.hasSelectedRow = vm.hasSelectedRow || article.selected;
		});
	}

	function toggleAdvancedSearch() {
		vm.advancedSearch = !vm.advancedSearch

		vm.filter = {
			value: vm.filter.value
		};
	}

	function prepareRemove(article) {
		ngDialog.openConfirm({
			template: 'remove-dialog',
			closeByDocument: true,
			closeByEscape: true,
			scope: $scope
		}).then(function () {
			remove(article);
		});
	}

	function remove(article) {
		ArticleService.deleteCover({ 'param2': article.id }).$promise.then(function() {
			article.image_upload_date = undefined;
			article.image_upload_path = undefined;
			article.image_uploader = undefined;

			toaster.pop('success', 'Capa do artigo removida com sucesso.');
		}, function(err) {
			toaster.pop('error', $filter('translate')(err.data));
		});
	}

	function showDetails(article) {
		vm.currentArticle = article;

		vm.detailsDialog = ngDialog.open({
			template: 'details-dialog',
			scope: $scope
		});
	}

	function showEditCover(articles) {
		vm.currentArticles = articles;

		vm.editDialog = ngDialog.open({
			template: 'edit-dialog',
			className: 'ngdialog-theme-default cover-dialog',
			scope: $scope
		});
	}

	function save(articles, croppedImg, picFile) {
		if (!picFile) {
			toaster.pop('warning', 'Selecione uma imagem.');
			return;
		}

		articles.forEach(function (article) {
			var index = vm.articles.indexOf(article);
		
			if(index != -1) {
				ArticleService.uploadCover(croppedImg, article.id).then(function(response) {
					article.image_upload_date = response.data.upload_time;
					article.image_upload_path = response.data.image;
					article.image_uploader = response.data.administrator.name;

					vm.editDialog.close();

					toaster.pop('success', 'Capa do artigo salva com sucesso.');
				}, function(err) {
					toaster.pop('error', $filter('translate')(err.data));
				});
			}
		});		
	}

	function listMagazines() {
		MagazineService.list().$promise.then(function(response) {
			vm.magazines = response;
		});

		return vm.magazines;
	}

	function listCategories() {
		CategoryService.list().$promise.then(function(response) {
			vm.categories = response;
		});
	}

	function list(filter) {
		var parameters = [];

		if (filter.value) parameters.push(filter.value);
		if (filter.category) parameters.push('subject_areas_ids:' + filter.category);
		if (filter.cover_option != 2) parameters.push((filter.cover_option == 0 ? '-' : '') + 'image_upload_date:[* TO *]');

		var param_magazines = filter.magazine ?  filter.magazine.id : vm.user.profile != 0 ? vm.user.magazines.map(function(entry) { return entry.id; }).join(' OR ') : '*';
		parameters.push('journal_id:(' + param_magazines + ')');

		var parameters_string = parameters.join(' AND ');

		SolrService.list({ 'param2': parameters_string }).$promise.then(function(response) {
			vm.articles = response.response.docs;
		});

		vm.articlesList = [].concat(vm.articles);
	}

	function coverPath(article) {
		if (article.id !== undefined) {
			return $rootScope.app.BASE_URL + '/' + article.image_upload_path;
		}
	}

	function init() {
		$rootScope.$watch('user', function (user) {
			if (user){
				vm.filter.value = $stateParams.value ?  $stateParams.value : undefined;
				vm.user = $rootScope.user;

				vm.articles = [];
				vm.selectedArticles = [];

				list(vm.filter);
				listMagazines();
				listCategories();
			}
		});
	}
}]);
