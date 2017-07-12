(function() {
  angular.module('app')
  .component('quotes', {
    controller: controller,
    templateUrl: '/components/quotes/quotes.template.html',
  })

  // controller.$inject = ['$http']
  function controller($http) {
    const vm = this;

    vm.$onInit = function () {
      $http.get('/api/quotes').then(function (response){
        console.log(response.data);
        vm.quotes = response.data
      })
    }
  }

})()
