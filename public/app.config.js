(function() {

 'use strict'

 angular.module('app').config(config)

 config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

 function config($stateProvider, $urlRouterProvider, $locationProvider) {

   $locationProvider.html5Mode(true)

   $stateProvider
   .state({
     name: 'landing',
     url: '/',
     component: 'landing',
   })
     .state( {
       name: 'quotePage',
       url: '/quotes',
       component: 'quotes',
     })
    .state({
      name: 'createdQuotePage',
      url: '/newquote',
      component: 'createdQuote'
    })
 }

})();
