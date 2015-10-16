'use strict';

angular.module('sbAdminApp')
.filter('profile', function() {
	return function(profileId) {
		if(profileId === 0) {
			return "SciELO"
		} 

		if(profileId === 1) {
			return "Editor"
		} 

		if(profileId === 2) {
			return "Operador"
		}

		return "";
	}
});