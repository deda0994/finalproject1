var stockpop_3;
(function (stockpop_3) {
    angular.module('stockpop_3', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('A4W2zvroPRtSCJ4jjATcdz');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: stockpop_3.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('add', {
            url: '/add',
            templateUrl: '/ngApp/views/addFile.html',
            controller: stockpop_3.Controllers.AddFileController,
            controllerAs: 'vm'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editFile.html',
            controller: stockpop_3.Controllers.EditFileController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(stockpop_3 || (stockpop_3 = {}));
