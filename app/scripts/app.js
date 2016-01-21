'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
 angular
 .module('sbAdminApp', [
 	'ngResource',
 	'oc.lazyLoad',
 	'ui.router',
 	'ui.bootstrap',
 	'angular-loading-bar',
 	'smart-table',
 	'ngDialog',
 	'toaster',
 	'ngImgCrop',
 	'ngTagsInput',
 	'ngFileUpload',
 	'pascalprecht.translate',
 	'ngCookies'
 	]) 
 .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$httpProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $translateProvider) {

	$httpProvider.interceptors.push('interceptor');

 	$ocLazyLoadProvider.config({
 		debug:false,
 		events:true,
 	});

 	$urlRouterProvider.otherwise('/login');

 	$translateProvider.useStaticFilesLoader({
		prefix : 'i18n/',
		suffix : '.json'
	});
	$translateProvider.preferredLanguage('pt_br');
	$translateProvider.useLocalStorage();
	$translateProvider.usePostCompiling(true);
	$translateProvider.useLocalStorage();
	$translateProvider.useSanitizeValueStrategy('escape');

 	$stateProvider
 	.state('dashboard', {
 		url:'/dashboard',
 		templateUrl: 'views/dashboard/dashboard.html',
 		resolve: {
 			loadMyDirectives:function($ocLazyLoad) {
 				return $ocLazyLoad.load(
 				{
 					name:'sbAdminApp',
 					files:[
 					'scripts/controllers/header.controller.js',
 					'scripts/services/user.service.js',
 					'scripts/directives/header/header.js',
 					'scripts/directives/sidebar/sidebar.js'
 					]
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'toggle-switch',
 					files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
 					"bower_components/angular-toggle-switch/angular-toggle-switch.css"
 					]
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'ngAnimate',
 					files:['bower_components/angular-animate/angular-animate.js']
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'ngCookies',
 					files:['bower_components/angular-cookies/angular-cookies.js']
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'ngResource',
 					files:['bower_components/angular-resource/angular-resource.js']
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'ngSanitize',
 					files:['bower_components/angular-sanitize/angular-sanitize.js']
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'ngTouch',
 					files:['bower_components/angular-touch/angular-touch.js']
 				})
 			}
 		}
 	}).state('dashboard.home',{
 		url:'/home',
 		controller: 'HomeCtrl',
 		controllerAs: 'home',
 		templateUrl:'views/dashboard/home.html',
 		resolve: {
			authenticated: ['$q', '$location', '$auth', function($q, $location, $auth) {
				checkAuthenticated($q, $location, $auth);
			}],
 			loadMyFiles:function($ocLazyLoad) {
 				return $ocLazyLoad.load({
 					name:'sbAdminApp',
 					files:[
 					'scripts/controllers/home.controller.js',
 					'scripts/services/article.service.js',
 					'scripts/services/solr.service.js'
 					]
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'angularGrid',
 					files:["js/angulargrid.min.js"
 					]
 				})
 			}
 		},
		profiles: [0, 1, 2]
 	}).state('dashboard.users',{
		templateUrl:'views/users.html',
		controller: 'UsersCtrl',
		controllerAs: 'user',
		url:'/users',
		resolve: {
			authenticated: ['$q', '$location', '$auth', function($q, $location, $auth) {
				checkAuthenticated($q, $location, $auth);
			}],
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/users.controller.js',
					'scripts/services/user.service.js',
					'scripts/services/profile.service.js',
					'scripts/services/magazine.service.js',
					'scripts/filters/profile.filter.js'
					]
				})
			}
		},
		profiles: [0, 1]
	}).state('dashboard.articles',{
		templateUrl:'views/articles.html',
		controller: 'ArticlesCtrl',
		controllerAs: 'article',
		url:'/articles',
		resolve: {
			authenticated: ['$q', '$location', '$auth', function($q, $location, $auth) {
				checkAuthenticated($q, $location, $auth);
			}],
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/articles.controller.js',
					'scripts/services/article.service.js',
					'scripts/services/magazine.service.js',
					'scripts/services/category.service.js',
					'scripts/services/solr.service.js'
					]
				})
			}
		},
		profiles: [0, 1, 2]
	}).state('recover-password',{
		templateUrl:'views/recover-password.html',
		controller: 'RecoverPasswordCtrl',
		controllerAs: 'recoverPassword',
		url:'/recover-password',
		resolve: {
			authenticated: ['$q', '$location', '$auth', function($q, $location, $auth) {
				checkAuthenticated($q, $location, $auth);
			}],
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/recover-password.controller.js',
					'scripts/services/user.service.js'
					]
				})
			}
		},
		profiles: [0, 1, 2]
	}).state('set-password',{
 		templateUrl:'views/pages/set-password.html',
		controller: 'SetPasswordCtrl',
		controllerAs: 'setPassword',
 		url:'/set-password',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/set-password.controller.js',
					'scripts/services/user.service.js'
					]
				})
			}
		}
 	}).state('login',{
 		templateUrl:'views/pages/login.html',
 		controller: 'LoginCtrl',
		controllerAs: 'loginCtrl',
 		url:'/login',
 		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/login.controller.js',
					'scripts/services/user.service.js'
					]
				})
			}
		}
 	})
	// END

	var checkAuthenticated = function($q, $location, $auth) {
		var deferred = $q.defer();

		if (!$auth.isAuthenticated()) {
			$location.path('/login');
		} else {
			deferred.resolve();
		}

		return deferred.promise;
	}

}])
.run(['$rootScope', '$window', '$http', '$q', '$auth', '$location', function($rootScope, $window, $http, $q, $auth, $location){
 	$rootScope.app = {
		"WS": "http://infobase.cloudns.org:8001/webservices/backoffice",
		"SOLR_URL": "http://infobase.cloudns.org:8001"
	};

	$rootScope.$storage = $window.localStorage;

	var checkPermission = function(profiles) {
		var allowed = false;

		if(profiles.indexOf($rootScope.user.profile) != -1) {
			allowed = true;
		}

		if(!allowed) {
			$auth.removeToken();
        	delete $rootScope.user;

			$location.path('/login');
		}
	}

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if (toState.name != 'login' && toState.name != 'recover-password' && toState.name != 'set-password') {
			if(!$rootScope.user) {
				$http.get($rootScope.app.WS + '/users/me').success(function(response) {
						$rootScope.user = response;

						checkPermission(toState.profiles);
			        }).error(function(data, status, headers, config) {
			        	$auth.removeToken();
			        	delete $rootScope.user;
						$location.path('/login');
			        });
			} else {
				checkPermission(toState.profiles);
			}
		}		
	});
 }])
.factory('interceptor', ['$auth', function($auth) {
	return {
		request: function(request) {
			if ($auth.isAuthenticated()) {
				request.headers["Authorization"] = $auth.getToken();
			}

			return request;
		}
	}
}])
.factory('$auth', ['$window', '$rootScope', function($window, $rootScope) {
	var self = {};

	self.getToken = function() {
		return $rootScope.$storage.getItem("token");
	};

	self.setToken = function(token) {
		$rootScope.$storage.setItem("token", token);
	};

	self.removeToken = function() {
		$rootScope.$storage.removeItem("token");
	};

	self.isAuthenticated = function() {
		var token = self.getToken();

		if (token) {
			if (token.split('.').length === 3) {
				var base64Url = token.split('.')[1];
				var base64 = base64Url.replace('-', '+').replace('_', '/');
				var exp = JSON.parse($window.atob(base64)).exp;
				if (exp) {
					return Math.round(new Date().getTime() / 1000) <= exp;
				}
				return true;
			}
			return true;
		}
		return false;
	};

	return self;
}]);
