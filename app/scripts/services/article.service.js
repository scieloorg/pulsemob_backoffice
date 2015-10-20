'use strict';

angular.module('sbAdminApp')
.service('ArticleService', ['$resource', function($resource) {
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
		{	id: 1,	cover: 'http://lorempixel.com/360/480/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 2,	cover: 'http://lorempixel.com/360/480/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 3, 	cover: 'http://lorempixel.com/360/480/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	},
		{	id: 4,	cover: 'http://lorempixel.com/360/480/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 5,	cover: 'http://lorempixel.com/360/480/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 6, 	cover: 'http://lorempixel.com/360/480/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	},
		{	id: 7,	cover: 'http://lorempixel.com/360/480/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 8,	cover: 'http://lorempixel.com/360/480/nature',		magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 9, 	cover: 'http://lorempixel.com/360/480/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	},
		{	id: 10,	cover: 'http://lorempixel.com/360/480/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 11,	cover: 'http://lorempixel.com/360/480/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 12, cover: 'http://lorempixel.com/360/480/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	},
		{	id: 13,	cover: 'http://lorempixel.com/360/480/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 14,	cover: 'http://lorempixel.com/360/480/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 15, cover: 'http://lorempixel.com/360/480/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	},
		{	id: 16,	cover: 'http://lorempixel.com/360/480/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	edition: '1ª'	},
		{ 	id: 17,	cover: 'http://lorempixel.com/360/480/nature',		magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		edition: '2ª'	},
		{ 	id: 18, cover: 'http://lorempixel.com/360/480/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					edition: '3ª'	}
		];

	this.list = function() {
		return angular.copy(list);
	}

	this.listLasts = function() {
		return angular.copy(list);
	}

	this.deleteCover = function(params) {
		return true;
	}
}]);