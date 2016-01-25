'use strict';

angular.module('sbAdminApp')
.service('CategoryService', ['$resource', '$rootScope', function($resource, $rootScope) {
	return $resource($rootScope.app.WS + '/categories/:param1:param2', {
		param1 : "@param1",
		param2 : "@param2",
	}, {
		'list': {
			method: 'GET',
			isArray: true,
			params: {
				param1: 'list'
			}
		}
	});
}]);