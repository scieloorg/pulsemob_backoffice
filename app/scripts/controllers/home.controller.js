'use strict';

angular.module('sbAdminApp')
.controller('HomeCtrl', ['$rootScope', '$scope', '$timeout', '$translate', 'ArticleService', 'SolrService', 'angularGridInstance', 'ngDialog', 'toaster', function($rootScope, $scope, $timeout, $translate, ArticleService, SolrService, angularGridInstance, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.listLasts = listLasts;
	vm.removeCover = removeCover;
	vm.showAsTable = showAsTable;
	vm.showCoverDetails = showCoverDetails;
	vm.prepareRemoveCover = prepareRemoveCover;
	vm.listLastsByFilter = listLastsByFilter;
	vm.coverPath = coverPath;

	init();

	function showCoverDetails(article) {
		vm.currentArticle = article;
		
		vm.detailsDialog = ngDialog.open({
			template: 'details-dialog',
			scope: $scope
		});
	}

	function showAsTable() {
		vm.showAs = 'table';

		refreshTable();
	}

	function refreshTable() {
		$timeout(function() {
			if(angularGridInstance && angularGridInstance.gallery) {
				angularGridInstance.gallery.refresh();
			}
		});
	}

	function prepareRemoveCover(article) {
		ngDialog.openConfirm({
			template: 'remove-dialog',
			closeByDocument: true,
			closeByEscape: true,
			scope: $scope
		}).then(function () {
			removeCover(article);
		});
	}

	function removeCover(article) {
		ArticleService.deleteCover({ param2: article.id }).$promise.then(function() {
			var index = vm.articles.indexOf(article);
			
			if(index != -1) {
				vm.articles.splice(index, 1);
			}

			toaster.pop('success', 'Capa do artigo removida com sucesso.');
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data));
		});
	}

	function listLastsByFilter() {
		return listLasts(); //
	}

	function listLasts() {
		var params_array = [];

		var param_magazines = vm.user.profile != 0 ? vm.user.magazines.map(function(entry) { return entry.id; }).join(' OR ') : '*';
		params_array.push('journal_id:(' + param_magazines + ')');

		params_array.push('image_upload_date:[* TO *]');

		var params = params_array.join(' AND ');

		SolrService.listLasts({ 'param2': params}).$promise.then(function(response) {
			vm.articles = response.response.docs;
		}, function(err) { 
			toaster.pop('error', 'Ocorreu um erro ao pesquisar artigos.');
		});

		vm.articlesList = [].concat(vm.articles);
	}

	function coverPath(article_id) {
		return ArticleService.coverPath(article_id);
	}

	function init() {
		$rootScope.$watch('user', function (user) {
			if (user){
				vm.user = $rootScope.user;

				listLasts();

				vm.showAs = 'list';
			}
		});
	}
}]);

//http://www.scielo.br/img/revistas/brag/glogo.gif