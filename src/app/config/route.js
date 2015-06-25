'use strict';

angular
.module('demo')
.config(
function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('comment', {
    url: 'comment',
    templateUrl: 'app/module/comment/comment.html',
    controller: 'commentController',
  });

$urlRouterProvider.otherwise('comment');
});

