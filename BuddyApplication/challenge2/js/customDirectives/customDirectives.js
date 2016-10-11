var CustomDirectives = angular.module("CustomDirectives",[]);

CustomDirectives.directive('buddyListItem',function(){
    return {
        restrict : "E",
        templateUrl :"temp/buddyListItem.html",
        erplace:true,
        scope:{
            user : "=",
            buddyDetailClick : "&"
        }
    };
});
