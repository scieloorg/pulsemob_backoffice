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
		{ 	id: 2,	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 3, 	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 1,	cover: 'http://lorempixel.com/400/300/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 2,	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 3, 	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					},
		{	id: 1,	cover: 'http://lorempixel.com/400/300/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL']	},
		{ 	id: 2,	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago']			},
		{ 	id: 3, 	cover: 'http://lorempixel.com/400/300/abstract', 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'] 					}
		];
	}

	this.deleteCover = function(params) {
		return true;
	}
}]);