(function () {
'use strict';
var myApp = angular.module('LunchCheck', []);
myApp.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope)
{
    console.clear;
    $scope.data ="";
    $scope.answer = "";
    var separator = ',';
    $scope.colorvalue = "black";
    $scope.bordercolor = "3px solid black";


    
 function splitString() {
    var textvalue = $scope.data;
    var value;
    var count = 0;
    if(textvalue=="")
    value = 0;
    else
    {
    var arrayOfStrings = textvalue.split(separator);
    console.log(arrayOfStrings.length);
    for (var i in arrayOfStrings) {
        console.log(arrayOfStrings[i]);
        console.log(arrayOfStrings[i].length);
        if(arrayOfStrings[i].length==0 || arrayOfStrings[i].trim()=="")
          count += 1;
    }
value = (arrayOfStrings.length-count);
    }
    return value;
};



$scope.sayMessage = function(){
    var valueans = splitString(); 
    if(valueans == 0)
    {
    $scope.answer = "Please Enter The Data!";
    $scope.colorvalue = "#FF0000";
    $scope.bordercolor = "1px solid red";
    }
    else if(valueans <= 3 && valueans > 0)
    {
    $scope.answer = "Enjoy!";
    $scope.colorvalue = "#008000";
    $scope.bordercolor = "3px solid green";
    }
    else
    {
    $scope.answer = "Too Much!";
    $scope.colorvalue = "#008000";
    $scope.bordercolor = "3px solid green";
    console.log($scope.answer);
    }
  };
    
}
})();