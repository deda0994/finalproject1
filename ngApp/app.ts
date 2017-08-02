namespace stockpop {

  angular.module('stockpop', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
  .config((filepickerProvider) => {
    filepickerProvider.setKey('A4W2zvroPRtSCJ4jjATcdz');
  })
  .config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    // Define routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/ngApp/views/home.html',
        controller: stockpop.Controllers.HomeController,
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/ngApp/views/about.html',
        controller: stockpop.Controllers.AboutController,
        controllerAs: 'vm'

      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/ngApp/views/contactus.html',
        controller: stockpop.Controllers.ContactUsController,
        controllerAs: 'vm'

      })
      .state('add', {
        url: '/add',
        templateUrl: '/ngApp/views/addFile.html',
        controller: stockpop.Controllers.AddFileController,
        controllerAs: 'vm'

      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/ngApp/views/editFile.html',
        controller: stockpop.Controllers.EditFileController,
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
