'use strict';

angular.module('sbAdminApp')
.controller('RecoverPasswordCtrl', ['UserService', '$state', 'toaster', function(UserService, $state, toaster) {
	var vm = this;

	vm.recover = recover;

	function recover(email) {
		/*UserService.recoverPassword({ param2: email }).$promise.then(function(response) {
			toaster.pop('success', 'Siga as instruções enviadas por e-mail para recuperar a senha.');
		
			$state.go('login');
		});*/

		toaster.pop('success', 'Siga as instruções enviadas por e-mail para recuperar a senha.'); //
		
		$state.go('login'); //
	}
}]);
