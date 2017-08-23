(function() {
  angular.module('app')
  .component('quotes', {
    controller: controller,
    templateUrl: '/components/quotes/quotes.template.html',
  })

  controller.$inject = ['$http', 'CommentsService']
  function controller($http, CommentsService) {
    const vm = this;

    vm.$onInit = function () {
      $http.get('/api/quotes').then(function (response){
        vm.quotes = response.data
        vm.quotes.forEach( quote => {
          quote.viewButtonClicked = false; 
        })
      })
    }

    vm.setCommentDisplay = function(id){
      CommentsService.set(id)
      $http.get(`/api/comments?id=${id}`).then(function (response){
        console.log(response.data);
        vm.commentsDisplay = response.data
      })
      // console.log(CommentsService.get());
    }

    // Delete Quote Function
    vm.deleteQuote = function (quote){
      // console.log(quote);
      let deleteQuoteUrl = '/api/quotes/' + quote.id
      $http.delete(deleteQuoteUrl).then(res => {
        console.log(res);
        return $http.get('/api/quotes')
      }).then(res => {
        vm.quotes = res.data
      }).catch(err => {
        console.error(err)
      })
    }

    vm.getRandomImage = function (){
      return "url('./backgrounds/seamless/3.png')"


    }

    vm.toggleViewComments = function (quote) {
      quote.viewButtonClicked = !quote.viewButtonClicked
    }


    vm.upVote = function (quote) {
      console.log(quote);
      let upVoteUrl = '/api/quotes/' + quote.id + '/votes'
      $http.post(upVoteUrl).then(res => {
        quote.popularity++
      })
    }

    vm.downVote = function (quote){
      let downVoteUrl = '/api/quotes/' + quote.id + '/votes'
      if(quote.id >= 1){
        $http.delete(downVoteUrl).then(res =>{
          quote.popularity--
        })
      }
    }
  }

})()
