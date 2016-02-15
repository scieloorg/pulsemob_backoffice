'use strict';

angular.module('sbAdminApp')
.controller('LoginCtrl', ['UserService', '$auth', '$rootScope', '$scope', '$state', '$translate', 'toaster', function(UserService, $auth, $rootScope, $scope, $state, $translate, toaster) {
	var vm = this;

	vm.init = init;
	vm.login = login;
	vm.handleLoginResponse = handleLoginResponse;

	vm.init();

	function handleLoginResponse(response, redirectToLoginIfError) {
		if(response.token) {
			$auth.setToken(response.token);

			UserService.getMe().$promise.then(function(response) {
				$rootScope.user = response;

				$state.go('dashboard.home');
			});
		}
	};


	function login() {
		if(!$scope.loginForm.$valid) return;

		UserService.login(vm.user).$promise.then(function(response) {
			handleLoginResponse(response);
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data ? err.data : err.status));
		});
	}

	function init() {
		vm.user = {};
	}
}]);
