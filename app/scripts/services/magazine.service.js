'use strict';

angular.module('sbAdminApp')
.service('MagazineService', ['$resource', function($resource) {
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
		{	id: 1,	name: 'Fundação Odontológica de Ribeirão Preto'	},
		{ 	id: 2,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 3, 	name: 'Instituto Agronômico de Campinas' },
		{	id: 4,	name: 'Fundação Odontológica de Ribeirão Preto 1' },
		{ 	id: 5,	name: 'Instituto de Tecnologia do Paraná - Tecpar 2' },
		{ 	id: 6, 	name: 'Instituto Agronômico de Campinas 3' },
		{	id: 7,	name: 'Fundação Odontológica de Ribeirão Preto 2' },
		{ 	id: 8,	name: 'Instituto de Tecnologia do Paraná - Tecpar 3' },
		{ 	id: 9, 	name: 'Instituto Agronômico de Campinas 4' },
		{	id: 10,	name: 'Fundação Odontológica de Ribeirão Preto 3' },
		{ 	id: 11,	name: 'Instituto de Tecnologia do Paraná - Tecpar 4' },
		{ 	id: 12, name: 'Instituto Agronômico de Campinas 5' },
		{	id: 13,	name: 'Fundação Odontológica de Ribeirão Preto 4' },
		{ 	id: 14,	name: 'Instituto de Tecnologia do Paraná - Tecpar 5' },
		{ 	id: 15, name: 'Instituto Agronômico de Campinas 6' },
		{	id: 16,	name: 'Fundação Odontológica de Ribeirão Preto 5' },
		{ 	id: 17,	name: 'Instituto de Tecnologia do Paraná - Tecpar 6' },
		{ 	id: 18, name: 'Instituto Agronômico de Campinas 7' }
		];

	this.list = function() {
		return angular.copy(list);
	}
}]);