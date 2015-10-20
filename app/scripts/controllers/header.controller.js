'use strict';

angular.module('sbAdminApp')
.controller('HeaderCtrl', ['$scope', 'ngDialog', 'toaster', function($scope, ngDialog, toaster) {
	var vm = this;

	vm.changePassword = changePassword;
	vm.prepareChangePassword = prepareChangePassword;

	function prepareChangePassword(user) {
		vm.changePasswordDialog = ngDialog.open({
			template: 'change-password-dialog',
			scope: $scope
		});
	}

	function changePassword(user) {
		vm.changePasswordDialog.close();
		
		toaster.pop('success', 'Senha alterada com sucesso.');
	}
}]);
