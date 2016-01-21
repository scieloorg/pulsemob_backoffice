'use strict';

angular.module('sbAdminApp')
.service('UserService', ['$resource', '$rootScope', function($resource, $rootScope) {
	return $resource($rootScope.app.WS + '/users/:param1/:param2', {
		param1 : "@param1",
		param2 : "@param2",
	}, {
		'getMe': {
			method: 'GET',
			params: {
				param1: "me"
			}
		},
		'list': {
			method: 'GET',
			isArray: true,
			params: {
				param1: 'list'
			}
		},
		'save': {
			method: 'POST',
			params: {
				param1: 'save'
			}
		},
		'delete': {
			method: 'DELETE',
			params: {
				param1: 'delete'
			}
		},'recoverPassword': {
			method: 'POST',
			params: {
				param1: "recover-password"
			}
		},
		'changePassword': {
			method: 'POST',
			params: {
				param1: "change-password"
			}
		},
		'setPassword': {
			method: 'POST',
			params: {
				param1: "set-password"
			}
		},
		'login': {
			method: 'POST',
			params: {
				param1: "login"
			}
		},
		'validate': {
			method: 'POST',
			params: {
				param1: "validate-recovery-token"
			}
		}
	});

	this.list = function() {
		return [
		{	id: 1,	name: 'Felipe ',	email: 'xnogueira@gmail.com',	profile: 0,	magazines: [{	id: 1,	name: 'Fundação Odontológica de Ribeirão Preto'	}] },
		{ 	id: 2,	name: 'Leandro', 	email: 'leandro@gmail.com', 	profile: 1,	magazines: [{ 	id: 2,	name: 'Instituto de Tecnologia do Paraná - Tecpar' }] },
		{ 	id: 3, 	name: 'Danilo', 	email: 'danilo@gmail.com', 		profile: 2,	magazines: [{ 	id: 3, 	name: 'Instituto Agronômico de Campinas' }] },
		{	id: 4,	name: 'João',		email: 'joao@gmail.com',		profile: 0,	magazines: [{	id: 4,	name: 'Fundação Odontológica de Ribeirão Preto 1' }, { 	id: 5,	name: 'Instituto de Tecnologia do Paraná - Tecpar 2' }] },
		{ 	id: 5,	name: 'José', 		email: 'jose@gmail.com', 		profile: 1,	magazines: [{ 	id: 6, 	name: 'Instituto Agronômico de Campinas 3' }] },
		{ 	id: 6, 	name: 'Maria', 		email: 'maria@gmail.com', 		profile: 2,	magazines: [{	id: 7,	name: 'Fundação Odontológica de Ribeirão Preto 2' }, { 	id: 8,	name: 'Instituto de Tecnologia do Paraná - Tecpar 3' }, { 	id: 9, 	name: 'Instituto Agronômico de Campinas 4' }] },
		{	id: 7,	name: 'Maurício',	email: 'mauricio@gmail.com',	profile: 0,	magazines: [] },
		{ 	id: 8,	name: 'Fernanda', 	email: 'fernanda@gmail.com',	profile: 1,	magazines: [] },
		{ 	id: 9, 	name: 'Sofia', 		email: 'sofia@gmail.com', 		profile: 2,	magazines: [] },
		{	id: 10,	name: 'Tatiana',	email: 'tatiana@gmail.com',		profile: 0,	magazines: [] },
		{ 	id: 11,	name: 'Ramon', 		email: 'ramon@gmail.com', 		profile: 1,	magazines: [] },
		{ 	id: 12,	name: 'Odair', 		email: 'odair@gmail.com', 		profile: 2,	magazines: [] },
		];
	}

	this.save = function(user) {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			profile: user.profile
		};
	}

	this.delete = function(params) {
		return true;
	}

	this.recoverPassword = function(params) {
		return true;
	}
}]);