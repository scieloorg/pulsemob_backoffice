'use strict';

angular.module('sbAdminApp')
.service('UserService', ['$resource', '$rootScope', function($resource, $rootScope) {
	return $resource($rootScope.app.WS + '/users/:param1/:param2', {
		param1 : "@param1",
		param2 : "@param2",
	}, {
		'getMe': {
			method: 'GET',
			params: {
				param1: "me"
			}
		},
		'list': {
			method: 'GET',
			isArray: true,
			params: {
				param1: 'list'
			}
		},
		'save': {
			method: 'POST',
			params: {
				param1: 'save'
			}
		},
		'delete': {
			method: 'DELETE',
			params: {
				param1: 'delete'
			}
		},'recoverPassword': {
			method: 'POST',
			params: {
				param1: "recover-password"
			}
		},
		'changePassword': {
			method: 'POST',
			params: {
				param1: "change-password"
			}
		},
		'setPassword': {
			method: 'POST',
			params: {
				param1: "set-password"
			}
		},
		'login': {
			method: 'POST',
			params: {
				param1: "login"
			}
		},
		'validate': {
			method: 'POST',
			params: {
				param1: "validate-recovery-token"
			}
		}
	});
}]);