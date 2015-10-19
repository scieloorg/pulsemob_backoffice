'use strict';

angular.module('sbAdminApp')
.controller('SetPasswordCtrl', ['UserService', '$state', 'toaster', function(UserService, $state, toaster) {
	var vm = this;

	vm.set = set;

	function set(user) {
		/*UserService.setPassword(user).$promise.then(function(response) {
			toaster.pop('success', 'Senha alterada com sucesso.');
		
			$state.go('login');
		});*/

		toaster.pop('success', 'Senha definida com sucesso.'); //
		
		$state.go('login'); //
	}

	vm.user = { name: 'José dos Santos' };
}]);
