'use strict';

angular.module('sbAdminApp')
.controller('HeaderCtrl', ['UserService', '$auth', '$rootScope', '$scope', '$state', '$translate', 'ngDialog', 'toaster', function(UserService, $auth, $rootScope, $scope, $state, $translate, ngDialog, toaster) {
	var vm = this;

	vm.changePassword = changePassword;
	vm.prepareChangePassword = prepareChangePassword;
	vm.logout = logout;
	vm.init = init;

	vm.init();

	function prepareChangePassword(user) {
		this.password = {};
		this.password_error = false;

		vm.changePasswordDialog = ngDialog.open({
			template: 'change-password-dialog',
			scope: $scope
		});
	}

	function validate(form) {
		if(!form.$valid) return false;

		if (form.newPassword.$modelValue != form.confirmPassword.$modelValue){
			vm.password_error = true;
			return false;
		}

		return true;
	}

	function changePassword(form) {
		if (validate(form)) {
			UserService.changePassword(vm.password).$promise.then(function(response) {
				vm.changePasswordDialog.close();
				toaster.pop('success', 'Senha alterada com sucesso.');
			}, function(err) {
				toaster.pop('error', $translate.instant(err.data));
			});
		}
	}

	function logout() {
		$auth.removeToken();
		delete $rootScope.user;
		$state.go('login');
	};

	function init(){
		vm.user = $rootScope.user;
	}
}]);
