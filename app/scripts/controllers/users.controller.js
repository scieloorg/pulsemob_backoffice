'use strict';

angular.module('sbAdminApp')
.controller('UsersCtrl', ['$scope', 'UserService', 'ProfileService', 'MagazineService', 'ngDialog', 'toaster', function($scope, UserService, ProfileService, MagazineService, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.edit = edit;
	vm.create = create;
	vm.remove = remove;
	vm.prepareEdit = prepareEdit;
	vm.prepareCreate = prepareCreate;
	vm.prepareRemove = prepareRemove;
	vm.loadMagazines = loadMagazines;

	vm.init();

	function loadMagazines(query) {
		return vm.magazines;
	};

	function prepareCreate() {
		vm.user = {};

		vm.newDialog = ngDialog.open({
			template: 'new-dialog',
			scope: $scope
		});
	}

	function create(user) {
		/*UserService.save(user).$promise.then(function(response) {
			vm.users.push(response.data);

			toaster.pop('success', 'Usuário criado com sucesso.');
		});*/

		vm.users.push(UserService.save(user)); //

		toaster.pop('success', 'Usuário criado com sucesso.'); //

		vm.newDialog.close();
	};

	function prepareEdit(user) {
		vm.user = {};
		angular.copy(user, vm.user);
		vm.user.original = user;

		vm.editDialog = ngDialog.open({
			template: 'edit-dialog',
			scope: $scope
		});
	}

	function edit(user) {
		var index = vm.users.indexOf(user.original);
		
		if(index != -1) {
			/*UserService.save(user).$promise.then(function(response) {
				angular.copy(response.data, vm.users[index]);

				toaster.pop('success', 'Usuário editado com sucesso.');
			});*/

			angular.copy(UserService.save(user), vm.users[index]); //

			toaster.pop('success', 'Usuário editado com sucesso.'); //
		}

		vm.editDialog.close();
	}

	function prepareRemove(user) {
		ngDialog.openConfirm({
			template: 'remove-dialog',
			closeByDocument: true,
			closeByEscape: true,
			scope: $scope
		}).then(function () {
			remove(user);
		});
	}

	function remove(user) {
		/*UserService.delete({ param1: user.id }).$promise.then(function() {
			var index = vm.users.indexOf(user);
			
			if(index != -1) {
				vm.users.splice(index, 1);
			}

			toaster.pop('success', 'Usuário removido com sucesso.');
		});*/

		var index = vm.users.indexOf(user); //

		if(index != -1) { //
			vm.users.splice(index, 1); //
		} //

		toaster.pop('success', 'Usuário removido com sucesso.'); //
	}

	function listProfiles() {
		vm.profiles = ProfileService.list();
	}

	function listMagazines() {
		/*MagazineService.list().$promise.then(function(response) {
			vm.magazines = response;
		});*/

		vm.magazines = MagazineService.list(); //
	}

	function list() {
		/*UserService.list().$promise.then(function(response) {
			vm.users = response;
		});*/

		vm.users = UserService.list(); //

		vm.usersList = [].concat(vm.users);
	}

	function init() {
		list();
		listProfiles();
		listMagazines();
	}
}]);
