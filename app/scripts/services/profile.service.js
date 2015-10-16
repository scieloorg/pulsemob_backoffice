'use strict';

angular.module('sbAdminApp')
.service('ProfileService', function() {
	this.list = function() {
		return [ 0, 1, 2];
	}
});