'use strict';

angular.module('sbAdminApp')
.controller('ArticlesCtrl', ['$scope', 'ArticleService', 'MagazineService', 'CategoryService', 'ngDialog', 'toaster', function($scope, ArticleService, MagazineService, CategoryService, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.edit = edit;
	vm.remove = remove;
	vm.showDetails = showDetails;
	vm.prepareEdit = prepareEdit;
	vm.toggleAdvancedSearch = toggleAdvancedSearch;

	vm.init();

	function toggleAdvancedSearch() {
		vm.advancedSearch = !vm.advancedSearch

		vm.filter = {
			value: vm.filter.value
		};
	}

	function remove(article) {
		/*ArticleService.deleteCover().$promise.then(function() {
			article.cover = 'http://dummyimage.com/400x300/F44336/fff.png&text=x';

			toaster.pop('success', 'Capa do artigo removida com sucesso.');
		});*/

		article.cover = 'http://dummyimage.com/400x300/F44336/fff.png&text=x'; //

		toaster.pop('success', 'Capa do artigo removida com sucesso.'); //
	}

	function showDetails(article) {
		vm.currentArticle = article;

		vm.detailsDialog = ngDialog.open({
			template: 'details-dialog',
			scope: $scope
		});
	}

	function prepareEdit(article) {

	}

	function edit(article) {

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
		console.log('list !!!');
		/*ArticleService.list().$promise.then(function(response) {
			vm.articles = response;
		});*/

		vm.articles = ArticleService.list(); //

		vm.articlesList = [].concat(vm.articles);
	}

	function init() {
		vm.filter = {};

		//list();
		listMagazines();
		listCategories();
	}
}]);
