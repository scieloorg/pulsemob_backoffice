'use strict';

angular.module('sbAdminApp')
.controller('MainCtrl', ['$scope', '$timeout', 'ArticleService', 'angularGridInstance', 'toaster', function($scope, $timeout, ArticleService, angularGridInstance, toaster) {
	var vm = this;

	vm.init = init;
	vm.listLasts = listLasts;
	vm.deleteCover = deleteCover;
	vm.showAsTable = showAsTable;

	init();

	function showAsTable() {
		vm.showAs = 'table';

		refreshTable();
	}

	function refreshTable() {
		$timeout(function() {
			console.log('refresh');
			if(angularGridInstance && angularGridInstance.gallery) {
				console.log('refresh');
				vm.articlesTable = vm.articles;
				angularGridInstance.gallery.refresh();
			}
		}, 1);
	}

	function deleteCover(article) {
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

		refreshTable();

		toaster.pop('success', 'Capa do artigo removida com sucesso.'); //
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

		vm.showAs = 'table';
	}
}]);

//http://www.scielo.br/img/revistas/brag/glogo.gif