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
				param1: 'search'
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
				param1: 'search',
				param2: 'image_upload_date:[* TO *]',
				sortParam: '&sort=',
				sort: 'image_upload_date desc',
				rows: 200
			}
		}
	});

	/*var list = [
		{	id: 1,	cover: 'http://lorempixel.com/360/480/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 2,	cover: 'http://lorempixel.com/360/480/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 3, 	cover: 'http://lorempixel.com/360/480/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	},
		{	id: 4,	cover: 'http://lorempixel.com/360/480/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 5,	cover: 'http://lorempixel.com/360/480/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 6, 	cover: 'http://lorempixel.com/360/480/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	},
		{	id: 7,	cover: 'http://lorempixel.com/360/480/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 8,	cover: 'http://lorempixel.com/360/480/nature',		magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 9, 	cover: 'http://lorempixel.com/360/480/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	},
		{	id: 10,	cover: 'http://lorempixel.com/360/480/abstract',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 11,	cover: 'http://lorempixel.com/360/480/animals', 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 12, cover: 'http://lorempixel.com/360/480/city',	 	magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	},
		{	id: 13,	cover: 'http://lorempixel.com/360/480/business',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 14,	cover: 'http://lorempixel.com/360/480/food',	 	magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 15, cover: 'http://lorempixel.com/360/480/people',		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	},
		{	id: 16,	cover: 'http://lorempixel.com/360/480/transport',	magazine: 'Fundação Odontológica de Ribeirão Preto',	article: 'Brazilian Dental Journal',			authors: ['A. C. BADINO JR.', 'M. C. R. FACCIOTTI','W. SCHMIDELL'],	editionYear: '2000', editionVolume: '1', editionNumber: '2', uploadDate: '26/10/2015'	},
		{ 	id: 17,	cover: 'http://lorempixel.com/360/480/nature',		magazine: 'Instituto de Tecnologia do Paraná - Tecpar',	article: 'Arquivos de Biologia e Tecnologia',	authors: ['C.E. Borato', 'P.S.P. Herrmann', 'L.A. Colnago'],		editionYear: '2015', editionVolume: '2', editionNumber: '3', uploadDate: '26/04/2015'	},
		{ 	id: 18, cover: 'http://lorempixel.com/360/480/sports', 		magazine: 'Instituto Agronômico de Campinas', 			article: 'Bragantia',							authors: ['R. Folly', 'R. Berlim', 'A. Salgado'],					editionYear: '2010', editionVolume: '3', editionNumber: '4', uploadDate: '10/04/2015'	}
		];

	this.list = function(query) {
		return angular.copy(list);
	}

	this.listLasts = function() {
		return angular.copy(list);
	}

	this.deleteCover = function(params) {
		return true;
	}*/
}]);