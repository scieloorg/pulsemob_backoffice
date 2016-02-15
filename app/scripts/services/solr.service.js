'use strict';

angular.module('sbAdminApp')
.service('SolrService', ['$resource', '$rootScope', function($resource, $rootScope) {
	return $resource($rootScope.app.SOLR_URL + '/:param1?q=:param2:sortParam:sort', {
		param1 : "@param1",
		param2 : "@param2",
		rows : "@rows",
		sortParam : "@sortParam",
		sort: "@sort"
	}, {
		'list': {
			method: 'GET',
			params: {
				param1: 'backoffice_search'
			}
		},
		'deleteCover': {
			method: 'DELETE',
			params: {
				param1: "cover"
			}
		},
		'listLasts': {
			method: 'GET',
			params: {
				param1: 'backoffice_search',
				param2: 'image_upload_date:[* TO *]',
				sortParam: '&sort=',
				sort: 'image_upload_date desc',
				rows: 200
			}
		}
	});
}]);