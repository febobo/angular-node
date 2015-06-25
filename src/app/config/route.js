'use strict';

angular
.module('demo')
.config(
function($stateProvider, $urlRouterProvider) {
$stateProvider
  .state('/', {
    url: 'comment',
    //templateUrl: 'app/module/comment/comment.html',
    //
    templateUrl: 'app/test.html',
    controller: 'commentController',
  });

$urlRouterProvider.otherwise('/');
});

