'use strict'

export default (ngModule) => {
  require('./home.less')

  ngModule.directive('home', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./home.html'),
      controllerAs: 'vm',
      controller: function() {
        // code
      }
    }
  })
}
