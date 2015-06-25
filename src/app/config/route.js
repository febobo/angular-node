'use strict';

angular
.module('demo')
.config(
function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('comment', {
    url: '/',
    controller: 'commentController',
    templateUrl: 'app/module/comment/comment.html',
  });

$urlRouterProvider.otherwise('/');
});

