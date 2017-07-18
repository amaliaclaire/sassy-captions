(function() {
  angular.module('app')
  .component('comments', {
    controller: controller,
    templateUrl: '/components/comments/comments.template.html',
    bindings: {
      comments: '<',
      quoteid: '<'
    }
  })

  controller.$inject = ['$http', 'CommentsService']
  function controller($http, CommentsService) {
    const vm = this;

    vm.$onInit = function () {
      console.log('vm', vm);
      console.log('quoteid', vm.quoteid);
      // $http.get('/api/quotes').then(function (response){
      //   console.log(response.data);
      //   vm.quotes = response.data
      // }) LOAD BACK INTO THE SERVER WITH CHARLIEEEEEEE

      vm.comments = []
      vm.newCommentContent = ''
    }
    vm.showComments = function(){
      // let commentsShown = {
      //
      // }
    }
    vm.addComment = function (){

      let commentUrl = '/api/comments/'
      let newComment = {
        content: vm.newCommentContent,
        users_id: 1,
        quote_table_id: vm.quoteid


        // TODO: the users_id is HARD CODED
      }


      $http.post(commentUrl, newComment).then(res => {
        vm.comments.push(vm.newCommentContent)

        vm.newCommentContent = '';
        // AND NOW POST CORRECT API
        // /api/comments <-- something like that
        console.log('res.data', res.data);
      })
    }
  }

})()
