(function() {
  'use strict';

  class CommentsService{
    constructor(){
      this.currentComment = null;
    }
    get(){
      return this.currentComment;
    }
    clear(){
      this.currentComment = null
    }
    set(id){
      this.currentComment = id
    }
  }
  angular.module('app').service('CommentsService', CommentsService)
}());
