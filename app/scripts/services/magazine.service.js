'use strict';

angular.module('sbAdminApp')
.service('MagazineService', ['$resource', '$rootScope', function($resource, $rootScope) {
	return $resource($rootScope.app.WS + '/magazines/:param1:param2', {
		param1 : "@param1",
		param2 : "@param2",
	}, {
		'listLasts': {
			method: 'GET',
			params: {
				param1: "lasts"
			}
		},
		'list': {
			method: 'GET',
			isArray: true,
			params: {
				param1: "list"
			}
		},
		'deleteCover': {
			method: 'DELETE',
			params: {
				param1: "cover"
			}
		}

	});
}]);