'use strict';

angular.module('sbAdminApp')
.controller('MainCtrl', ['$scope', '$position', 'ArticleService', function($scope, $position, ArticleService) {
	var vm = this;

	vm.init = init;
	vm.listLasts = listLasts;
	vm.deleteCover = deleteCover;

	init();

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

		toaster.pop('success', 'Capa do artigo removida com sucesso.'); //
	}

	function listLasts() {
		/*ArticleService.listLasts().$promise.then(function(response) {
			vm.articles = response.data;
		});*/

		vm.articles = ArticleService.listLasts(); //

		vm.articlesTable = [].concat(vm.articles);
	}

	function init() {
		listLasts();

		vm.showAs = 'list';
	}
}]);

//http://www.scielo.br/img/revistas/brag/glogo.gif