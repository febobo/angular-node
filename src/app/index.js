angular.module('demo' , ['ui.bootstrap' , 'ui.router' ])
.run(function($rootScope , $state){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    alert(1)
    console.log($rootScope , $state)
    });
})
