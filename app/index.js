'use strict'

const angular = require('angular')
const ngModule = angular.module('AngularWebpack', [require('angular-ui-router')])

require('./vendors')()
require('./angular.routes')(ngModule)
require('./directives')(ngModule)
