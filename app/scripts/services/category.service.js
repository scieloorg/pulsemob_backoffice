'use strict';

angular.module('sbAdminApp')
.service('CategoryService', ['$resource', function($resource) {
	/*return $resource($rootScope.app.WS + '/profile.svc/:param1:param2', {
		param1 : "@param1",
		param2 : "@param2",
	}, {
		'listLasts': {
			method: 'GET'
			params: {
				param1: "lasts"
			}
		},
		'deleteCover': {
			method: 'DELETE'
			params: {
				param1: "cover"
			}
		}

	});*/

	var list = [
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
	}
}]);