'use strict';

angular.module('sbAdminApp')
.controller('RecoverPasswordCtrl', ['UserService', '$state', '$translate', 'toaster', function(UserService, $state, $translate, toaster) {
	var vm = this;

	vm.recover = recover;

	function recover(email) {
		UserService.recoverPassword({ 'email': email }).$promise.then(function(response) {
			toaster.pop('success', 'Siga as instruções enviadas por e-mail para recuperar a senha.');
		
			$state.go('login');
		}, function(err) {
			toaster.pop('error', $translate.instant(err.data));
		});
	}
}]);
