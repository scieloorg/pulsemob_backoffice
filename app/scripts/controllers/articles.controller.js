'use strict';

angular.module('sbAdminApp')
.controller('ArticlesCtrl', ['$scope', 'ArticleService', 'MagazineService', 'CategoryService', 'ngDialog', 'toaster', function($scope, ArticleService, MagazineService, CategoryService, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.save = save;
	vm.remove = remove;
	vm.showDetails = showDetails;
	vm.showEditCover = showEditCover;
	vm.prepareRemove = prepareRemove;
	vm.toggleAdvancedSearch = toggleAdvancedSearch;

	vm.init();

	///
	$scope.myImage='';
	$scope.myCroppedImage='';

	var handleFileSelect=function(evt) {
		var file=evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function (evt) {
			$scope.$apply(function($scope){
				console.log(evt.target.result);
				$scope.myImage=evt.target.result;
			});
		};
		reader.readAsDataURL(file);
	};
	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
	///

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
		/*ArticleService.deleteCover().$promise.then(function() {
			article.cover = 'http://dummyimage.com/400x300/F44336/fff.png&text=x';

			toaster.pop('success', 'Capa do artigo removida com sucesso.');
		});*/

		article.cover = 'http://dummyimage.com/360x480/F44336/fff.png&text=x'; //

		toaster.pop('success', 'Capa do artigo removida com sucesso.'); //
	}

	function showDetails(article) {
		vm.currentArticle = article;

		vm.detailsDialog = ngDialog.open({
			template: 'details-dialog',
			scope: $scope
		});
	}

	function showEditCover(article) {
		vm.currentArticle = article;

		vm.editDialog = ngDialog.open({
			template: 'edit-dialog',
			className: 'ngdialog-theme-default cover-dialog',
			scope: $scope
		});
	}

	function save(article) {
		vm.editDialog.close();

		toaster.pop('success', 'Capa do artigo salva com sucesso.'); //
	}

	function listMagazines() {
		/*MagazineService.list().$promise.then(function(response) {
			vm.magazines = response;
		});*/

		vm.magazines = MagazineService.list(); //
	}

	function listCategories() {
		/*CategoryService.list().$promise.then(function(response) {
			vm.categories = response;
		});*/

		vm.categories = CategoryService.list(); //
	}

	function list(filter) {
		/*ArticleService.list().$promise.then(function(response) {
			vm.articles = response;
		});*/

		vm.articles = ArticleService.list(); //

		vm.articlesList = [].concat(vm.articles);
	}

	function init() {
		vm.filter = {};
		vm.example = 'http://localhost:9000/img/exemplo.jpg';

		//list();
		listMagazines();
		listCategories();
	}
}]);
