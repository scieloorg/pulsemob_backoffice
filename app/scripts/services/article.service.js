'use strict';

angular.module('sbAdminApp')
.service('ArticleService', ['$http', '$resource', '$rootScope', 'Upload', function($http, $resource, $rootScope, Upload) {
	var service = $resource($rootScope.app.WS + '/articles/:param1/:param2', {
		param1 : "@param1",
		param2 : "@param2"
	}, {
		'deleteCover': {
			method: 'DELETE',
			params: {
				param1: 'delete-cover'
			}
		}
	});

	service.uploadCover = function(image, article_id){
		return Upload.upload({
			url: $rootScope.app.WS + '/articles/upload-cover',
			method: 'POST',
			data: {file: Upload.dataUrltoBlob(image), 'article_id': article_id}
		});
	};

	service.coverPath = function (article_id) {
		if (article_id !== undefined) {
			var random = (new Date()).toString();

			return $rootScope.app.WS + '/articles/get-cover/' + article_id + '?cb=' + random;
		}
	}

	return service;
}]);