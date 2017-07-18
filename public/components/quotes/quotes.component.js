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
        console.log(response.data);
        vm.quotes = response.data
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

      vm.upVote = function (quoteId) {
        console.log(quoteId.id);
        let upVoteUrl = '/api/quotes/' + quoteId.id + '/votes'
        $http.post(upVoteUrl).then(res => {
          $http.get('/api/quotes').then(res => {
            vm.quotes = res.data
          })
        })
      }

      vm.downVote = function (quoteId){
        let downVoteUrl = '/api/quotes/' + quoteId.id + '/votes'
        if(quoteId.id >= 1){
          $http.delete(downVoteUrl).then(res =>{

            $http.get('/api/quotes').then(res => {
              vm.quotes = res.data
            })
          })
        }
      }
  }

})()
