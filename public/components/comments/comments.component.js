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

      $http.get('/api/comments').then(function (response){

       vm.comments = response.data.filter(comment => {
         return comment.quote_table_id == vm.quoteid
       })
     })



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
      // console.log('newComment', newComment);


      $http.post(commentUrl, newComment).then(res => {
        console.log(res.data)
        console.log('before push', vm.comments);
        vm.comments.push({content: vm.newCommentContent})
        vm.newCommentContent = '';
        console.log('after push', vm.comments);

        console.log('res.data', res.data);
      })
    }
  }

})()
