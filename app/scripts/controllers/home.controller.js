'use strict';

angular.module('sbAdminApp')
.controller('HomeCtrl', ['$scope', '$timeout', 'ArticleService', 'angularGridInstance', 'ngDialog', 'toaster', function($scope, $timeout, ArticleService, angularGridInstance, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.listLasts = listLasts;
	vm.removeCover = removeCover;
	vm.showAsTable = showAsTable;
	vm.showCoverDetails = showCoverDetails;
	vm.prepareRemoveCover = prepareRemoveCover;
	vm.listLastsByFilter = listLastsByFilter;

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
		/*ArticleService.deleteCover({ param2: article.id }).$promise.then(function() {
			var index = vm.articles.indexOf(article);
			
			if(index != -1) {
				vm.articles.splice(index, 1);
			}

			toaster.pop('success', 'Capa do artigo removida com sucesso.');
		});*/

		var index = vm.articles.indexOf(article); //

		if(index != -1) { //
			vm.articles.splice(index, 1); //
		} //

		toaster.pop('success', 'Capa do artigo removida com sucesso.'); //
	}

	function listLastsByFilter() {
		return listLasts(); //
	}

	function listLasts() {
		/*ArticleService.listLasts().$promise.then(function(response) {
			vm.articles = response.data;
		});*/

		vm.articles = ArticleService.listLasts(); //

		vm.articlesList = [].concat(vm.articles);
	}

	function init() {
		listLasts();

		vm.showAs = 'list';
	}
}]);

//http://www.scielo.br/img/revistas/brag/glogo.gif