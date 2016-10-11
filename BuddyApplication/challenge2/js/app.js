var demo = angular.module('demo', ['ngRoute','Controllers','CustomDirectives']);
demo.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'temp/buddyListPageTemplate.html',
    controller:"buddyListController"
  })
  .when('/buddyDetails',{
    templateUrl:'temp/buddyDetailPage',
    controller:"buddyDetailPageController"
  })
});

//var d = new Date();
//var n = d.toISOString();
