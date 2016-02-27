var app = angular.module('myApp',['ui.router',"formly","formlyBootstrap"]);

// Definindo Rotas
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('Home', {
        url: '/home',
        templateUrl: 'views/Home.html',
        controller: 'siteController'
    })
    .state('Tcc', {
        url: '/tcc',
        templateUrl: 'views/tcc.html',
        controller: 'siteController'
    })
    .state('Psicologa', {
        url: '/psicologa',
        templateUrl: 'views/psicologa.html',
        controller: 'siteController'
    })
    .state('Curriculo', {
        url: '/curriculo',
        templateUrl: 'views/Curriculo.html',
        controller: 'siteController'
    })
    .state('Contato', {
        url: '/contato',
        templateUrl: 'views/Contato.html',
        controller: 'siteController'
    });
});
