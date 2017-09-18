namespace stockpop_3 {

    angular.module('stockpop_3', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
    .config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
         ) => {

           // GET API KEY FROM https://www.filestack.com/

           filepickerProvider.setKey('A4W2zvroPRtSCJ4jjATcdz');

        // Define routes
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

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
