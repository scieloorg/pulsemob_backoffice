'use strict';

angular.module('sbAdminApp')
.controller('UsersCtrl', ['$scope', '$translate', 'UserService', 'ProfileService', 'MagazineService', 'ngDialog', 'toaster', function($scope, $translate, UserService, ProfileService, MagazineService, ngDialog, toaster) {
	var vm = this;

	vm.init = init;
	vm.list = list;
	vm.validate = validate;
	vm.edit = edit;
	vm.create = create;
	vm.remove = remove;
	vm.prepareEdit = prepareEdit;
	vm.prepareCreate = prepareCreate;
	vm.prepareRemove = prepareRemove;
	vm.loadMagazines = loadMagazines;

	vm.init();

	function loadMagazines(query) {
		query = query.toLowerCase();

		return vm.magazines.filter(function(value){
			return value.magazine_name.toLowerCase().indexOf(query) != -1;
		});
	};

	function prepareCreate() {
		vm.user = {profile: 0};

		$scope.forms = {};

		vm.newDialog = ngDialog.open({
			template: 'new-dialog',
			scope: $scope
		});
	}

	function validate(user) {
		if(!$scope.forms.form1.$valid) {
			$scope.forms.form1.fullname.$dirty = true;
			$scope.forms.form1.email.$dirty = true;

			return false;
		}

		return true;
	}

	function create(user) {
		if(!validate(user)) {
			return;
		}

		UserService.save(user).$promise.then(function(response) {
			vm.users.push(response);

			toaster.pop('success', 'Usuário criado com sucesso.');
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data ? err.data : err.status));
		});

		vm.newDialog.close();
	};

	function prepareEdit(user) {
		vm.user = {};
		angular.copy(user, vm.user);
		vm.user.original = user;

		$scope.forms = {};

		vm.editDialog = ngDialog.open({
			template: 'edit-dialog',
			scope: $scope
		});
	}

	function edit(user) {
		if(!validate(user)) {
			return;
		}

		var index = vm.users.indexOf(user.original);
		
		if(index != -1) {
			UserService.save(user).$promise.then(function(response) {
				angular.copy(response, vm.users[index]);

				toaster.pop('success', 'Usuário editado com sucesso.');
			}, function(err) {
				toaster.pop('error', $translate.instant(err.data ? err.data : err.status));
			});
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
		UserService.delete({ param2: user.id }).$promise.then(function() {
			var index = vm.users.indexOf(user);
			
			if(index != -1) {
				vm.users.splice(index, 1);
			}

			toaster.pop('success', 'Usuário removido com sucesso.');
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data ? err.data : err.status));
		});
	}

	function listProfiles() {
		vm.profiles = ProfileService.list();
	}

	function listMagazines() {
		MagazineService.list().$promise.then(function(response) {
			vm.magazines = response;
		});
	}

	function list() {
		UserService.list().$promise.then(function(response) {
			vm.users = response;
		});
	}

	function init() {
		list();
		listProfiles();
		listMagazines();
	}
}]);
