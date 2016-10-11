var Controllers = angular.module("Controllers",['Services']);
Controllers.controller('buddyListController',['$scope','$log','userDetailsService','apiCall',function($scope,$log,userDetailsService,apiCall){
    $scope.userList=[];
    $scope.searchValue="";
    $scope.activeBuddy={};
    $scope.addBuddyForm = true;
    $scope.buddy={
    };
    $scope.deleteBuddyConfBox = false;
    $scope.orderByValue="firstName";
    $scope.buddyDetailClick = function(activeBuddyObj,index){
        $scope.addBuddyForm = false;
        $scope.activeBuddy = activeBuddyObj;
        $scope.activeBuddy.index =index;
    }
    $scope.convertDOB= function(dob){
        return new Date(dob);
    }
    $scope.getBuddyList = function(){
        if(userDetailsService.userList.length == 0){
        var promise = apiCall.webCall();
        promise.then(function(data){
            $scope.userList = data;
            userDetailsService.userList = $scope.userList;

        },function(data,status){
            alert('error');
        });
        }else{
            $scope.userList = userDetailsService.userList;
        }
    }
    
    $scope.getBuddyList();
    
    $scope.addBuddy = function(){
        $scope.addBuddyForm = true;
    }
    
    $scope.newBuddy=function(buddy,formValid){
        if(formValid){
            $scope.buddy = buddy;       
            $scope.addBuddyForm = false;        userDetailsService.createNewUser($scope.buddy);
            $scope.userList = userDetailsService.userList;
        }else{
            alert("Please fill form properly then submite!");
        }
        
    };
    
    
    $scope.deleteBuddy = function(){
        for(var i = 0; i < $scope.userList.length; i++) {
            if($scope.userList[i].userName == $scope.activeBuddy.userName) {
                $scope.userList.splice(i, 1);
                break;
            }
        }
        $scope.activeBuddy = {};
        alert("Buddy deleted successfully");
        $scope.deleteBuddyConfBox = false;
        $scope.addBuddyForm =true;
    };
}]);