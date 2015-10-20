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
 	'ngTagsInput'
 	])
 .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

 	$ocLazyLoadProvider.config({
 		debug:false,
 		events:true,
 	});

 	$urlRouterProvider.otherwise('/dashboard/home');

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
 			loadMyFiles:function($ocLazyLoad) {
 				return $ocLazyLoad.load({
 					name:'sbAdminApp',
 					files:[
 					'scripts/controllers/home.controller.js',
 					'scripts/services/article.service.js'
 					]
 				}),
 				$ocLazyLoad.load(
 				{
 					name:'angularGrid',
 					files:["js/angulargrid.min.js"
 					]
 				})
 			}
 		}
 	}).state('dashboard.users',{
		templateUrl:'views/users.html',
		controller: 'UsersCtrl',
		controllerAs: 'user',
		url:'/users',
		resolve: {
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
		}
	}).state('dashboard.articles',{
		templateUrl:'views/articles.html',
		controller: 'ArticlesCtrl',
		controllerAs: 'article',
		url:'/articles',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/articles.controller.js',
					'scripts/services/article.service.js',
					'scripts/services/magazine.service.js',
					'scripts/services/category.service.js'
					]
				})
			}
		}
	}).state('recover-password',{
		templateUrl:'views/recover-password.html',
		controller: 'RecoverPasswordCtrl',
		controllerAs: 'recoverPassword',
		url:'/recover-password',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					'scripts/controllers/recover-password.controller.js',
					'scripts/services/user.service.js'
					]
				})
			}
		}
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
 		url:'/login'
 	})
	// END

}]);


