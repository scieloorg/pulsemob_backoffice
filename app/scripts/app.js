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
    'toaster'
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
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/sidebar/sidebar.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'akoenig.deckgrid',
                   files:["bower_components/angular-deckgrid/angular-deckgrid.js"
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
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/services/article.service.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
      	templateUrl:'views/table.html',
      	url:'/table'
      })
      .state('dashboard.panels-wells',{
      	templateUrl:'views/ui-elements/panels-wells.html',
      	url:'/panels-wells'
      })
      .state('dashboard.buttons',{
      	templateUrl:'views/ui-elements/buttons.html',
      	url:'/buttons'
      })
      .state('dashboard.notifications',{
      	templateUrl:'views/ui-elements/notifications.html',
      	url:'/notifications'
      })
      .state('dashboard.typography',{
      	templateUrl:'views/ui-elements/typography.html',
      	url:'/typography'
      })
      .state('dashboard.icons',{
      	templateUrl:'views/ui-elements/icons.html',
      	url:'/icons'
      })
      .state('dashboard.grid',{
      	templateUrl:'views/ui-elements/grid.html',
      	url:'/grid'
      })

	// CUSTOM
	.state('recover-password',{
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
	})
	.state('dashboard.user',{
		templateUrl:'views/user.html',
		controller: 'UserCtrl',
		controllerAs: 'user',
		url:'/users',
		resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/user.controller.js',
              'scripts/services/user.service.js',
              'scripts/services/profile.service.js',
              'scripts/filters/profile.filter.js'
              ]
            })
          }
        }
	})
	// END

  }]);

    
