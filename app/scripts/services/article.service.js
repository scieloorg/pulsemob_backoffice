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

	this.listLasts = function() {
		return [
		{	id: 1,	cover: 'http://lorempixel.com/400/300/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 2,	cover: 'http://lorempixel.com/400/300/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 3, 	cover: 'http://lorempixel.com/400/300/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 4,	cover: 'http://lorempixel.com/400/300/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 5,	cover: 'http://lorempixel.com/400/300/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 6, 	cover: 'http://lorempixel.com/400/300/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 7,	cover: 'http://lorempixel.com/400/300/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 8,	cover: 'http://lorempixel.com/400/300/nature',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 9, 	cover: 'http://lorempixel.com/400/300/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 10,	cover: 'http://lorempixel.com/400/300/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 11,	cover: 'http://lorempixel.com/400/300/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 12, cover: 'http://lorempixel.com/400/300/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 13,	cover: 'http://lorempixel.com/400/300/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 14,	cover: 'http://lorempixel.com/400/300/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 15, cover: 'http://lorempixel.com/400/300/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 16,	cover: 'http://lorempixel.com/400/300/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 17,	cover: 'http://lorempixel.com/400/300/nature',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 18, cover: 'http://lorempixel.com/400/300/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					}
		];
	}

	this.deleteCover = function(params) {
		return true;
	}
}]);