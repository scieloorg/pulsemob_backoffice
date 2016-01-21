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

	/*var list = [
		{	id: 1,	name: 'Agricultural Sciences'	},
		{ 	id: 2,	name: 'Applied Social Sciences' },
		{ 	id: 3, 	name: 'Biological Sciences' },
		{	id: 4,	name: 'Engineering' },
		{ 	id: 5,	name: 'Exact and Earth Sciences' },
		{ 	id: 6, 	name: 'Health Sciences' },
		{	id: 7,	name: 'Human Sciences' },
		{ 	id: 8,	name: 'Literature and Arts' }
		];

	this.list = function() {
		return angular.copy(list);
	}*/
}]);