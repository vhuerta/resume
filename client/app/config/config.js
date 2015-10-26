/**
 * Config for main module
 *
 * @author Victor Huerta
 */
angular.module('vhuerta.resume').config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$mdThemingProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider.state('index', {
            url: '/',
            templateUrl: 'client/app/templates/index.ng.html',
        });

        $urlRouterProvider.otherwise('/');

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
    }
]);