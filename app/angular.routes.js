'use strict'

export default (ngModule) => {
  ngModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>'
      })
  })
}
