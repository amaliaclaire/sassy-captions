(function() {
  'use strict';
  angular.module('app')
  .component('createdQuote', {
    controller,
    templateUrl: '/components/quotes/createdQuote.template.html',
    bindings: {
      quotes: '<',
      quote: '<'
    }
  })


  controller.$inject = ['$http']

  function controller($http) {
    const vm = this;

    vm.createQuote = function (){
      let createQuoteUrl = '/api/quotes/'
      let createdQuote = {
        caption: vm.createCaptionContent,
        category: vm.chooseCategory,
        author: vm.createAuthor,
      }
      $http.post(createQuoteUrl, createdQuote).then(response => {
        console.log('response', response.data)
      }).catch(err => {
        console.log(err)
      })
    }

  }

}());
