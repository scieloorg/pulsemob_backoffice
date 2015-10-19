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
		{	id: 4,	name: 'Fundação Odontológica de Ribeirão Preto' },
		{ 	id: 5,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 6, 	name: 'Instituto Agronômico de Campinas' },
		{	id: 7,	name: 'Fundação Odontológica de Ribeirão Preto' },
		{ 	id: 8,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 9, 	name: 'Instituto Agronômico de Campinas' },
		{	id: 10,	name: 'Fundação Odontológica de Ribeirão Preto' },
		{ 	id: 11,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 12, name: 'Instituto Agronômico de Campinas' },
		{	id: 13,	name: 'Fundação Odontológica de Ribeirão Preto' },
		{ 	id: 14,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 15, name: 'Instituto Agronômico de Campinas' },
		{	id: 16,	name: 'Fundação Odontológica de Ribeirão Preto' },
		{ 	id: 17,	name: 'Instituto de Tecnologia do Paraná - Tecpar' },
		{ 	id: 18, name: 'Instituto Agronômico de Campinas' }
		];

	this.list = function() {
		return angular.copy(list);
	}
}]);