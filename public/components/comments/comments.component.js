(function() {
  angular.module('app')
  .component('comments', {
    controller: controller,
    templateUrl: '/components/comments/comments.template.html',
    bindings: {
      comments: '<'
    }
  })

  controller.$inject = ['$http', 'CommentsService']
  function controller($http, CommentsService) {
    const vm = this;

    vm.$onInit = function () {
      console.log(vm.commentId);
      // $http.get('/api/quotes').then(function (response){
      //   console.log(response.data);
      //   vm.quotes = response.data
      // })

      vm.comments = []
      vm.newCommentContent = ''
    }
    vm.showComments = function(){
      // let commentsShown = {
      //
      // }
    }
    vm.addComment = function (){
      vm.comments.push(vm.newCommentContent)

      vm.newCommentContent = '';

      // let commentUrl = '/api/comments/' + id + '/comments'
      // // let commentsId = req.params.id
      // // console.log(commentUrl)
      // // console.log(vm.newComment);
      // $http.post(commentUrl, id).then(res => {
      //   console.log(res);
      // })
    }
  }

})()
