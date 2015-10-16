'use strict';

angular.module('sbAdminApp')
.controller('UserCtrl', ['$scope', 'UserService', 'ProfileService', 'ngDialog', 'toaster', function($scope, UserService, ProfileService, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.edit = edit;
	vm.create = create;
	vm.remove = remove;
	vm.prepareEdit = prepareEdit;
	vm.prepareCreate = prepareCreate;
	vm.listProfiles = listProfiles;

	vm.init();

	function prepareCreate() {
		vm.user = {};

		vm.newDialog = ngDialog.open({
			template: 'new-dialog',
			closeByDocument: false,
			closeByEscape: true,
			scope: $scope,
			closeByDocument: false
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
			closeByDocument: false,
			closeByEscape: true,
			scope: $scope,
			closeByDocument: false
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

	function list() {
		/*UserService.list().$promise.then(function(response) {
			vm.users = response.data;
		});*/

		vm.users = UserService.list(); //

		vm.usersTable = [].concat(vm.users);
	}

	function init() {
		list();
		listProfiles();
	}
}]);
