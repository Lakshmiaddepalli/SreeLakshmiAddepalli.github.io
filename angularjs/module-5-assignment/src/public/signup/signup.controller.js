(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signup = this;
 
   signup.submit = function () {
     signup.completed = true;
     var val = signup.user.menunumber;
     var value = val.toUpperCase();
     console.log(value);
     var val1 = (signup.user);
     MenuService.sendData(val1);
     console.log(MenuService.sendData(signup.user));
     signup.answer = MenuService.getMenuItem(value).then(function(response) {
     signup.text =  "Your information has been saved";
    // console.log(response);
     console.log(signup.text);
     return response;
     }, function(error) {
     console.log("Error");
     signup.text = "No such menu number exists";
    // console.log(signup.text);
     });

console.log(answer);

 };

}


})();
