var Services = angular.module('Services',[]);


Services.service('apiCall', ['$http','$log','$q', function($http,$log,$q) {
    this.webCall = function(){
        var deferred = $q.defer();
        var req = {
                        method: 'POST',
                        url: "jsonData/buddyList.JSON",
                        headers: {'Content-Type': 'application/JSON'}
                    };
        $http(req).success(function(data, status, headers, config) {
            deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
            deferred.reject(data,status);
        });
        return deferred.promise;
    }
}]);

Services.service('userDetailsService',['$log',function($log){
    var self = this;
    function Buddy(buddy){
        this.firstName= buddy.firstName || "";
        this.lastName = buddy.lastName || "";
        this.userName =buddy.userName || "";
        this.emailId = buddy.emailId || "";
        //this.dob = buddy.dob ? buddy.dob.toISOString() : "";
        this.dob = buddy.dob || "";
        this.status = buddy.status || "offline";
        this.bio = buddy.bio || "";
        this.priority = parseInt(buddy.priority) || 2;
    }
    self.userList = [];
    self.createNewUser = function(buddy){
        var newBuddy = new Buddy(buddy); 
        self.userList.push(newBuddy);
        return newBuddy;
    }
}]);

