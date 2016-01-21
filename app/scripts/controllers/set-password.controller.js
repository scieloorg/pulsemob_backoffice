'use strict';

angular.module('sbAdminApp')
.controller('SetPasswordCtrl', ['UserService', '$state', 'toaster', '$location', '$timeout', '$translate', '$scope', function(UserService, $state, toaster, $location, $timeout, $translate, $scope) {
	var vm = this;

	vm.set = set;
	vm.init = init;
	vm.validateToken = validateToken;

	vm.init();

	function validateUser() {
		if (!vm.user.password) return false;
		if (!vm.user.confirmPassword) return false;

		if (vm.user.password !== vm.user.confirmPassword) {
			vm.password_error = true;
			return false;	
		}

		vm.password_error = false;

		return true;
	}

	function set(user) {
		if (!validateUser()) return;

		var parameters = {
			'new_password': user.password,
			'token': vm.token
		}

		UserService.setPassword(parameters).$promise.then(function(response) {
			toaster.pop('success', 'Senha alterada com sucesso.');
		
			$timeout(redirectToLogin, 2000);
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data));
		});
	}

	function validateToken() {
		if (vm.token) {
			UserService.validate({ 'token': vm.token }).$promise.then(function(response) {
				vm.valid = true;

				vm.user = response;
			}, function(err) {
				toaster.pop('error', $translate.instant(err.data));

				$timeout(redirectToLogin, 2000);
			});	
		} else {
			toaster.pop('error', 'Operação de redefinição de senha inválida.');

			$timeout(redirectToLogin, 2000);
		}
		
	}

	function redirectToLogin() {
		$state.go('login');
	}

	function init() {
		vm.token = $location.search().token;
		vm.valid = false;

		validateToken();
	}
}]);
