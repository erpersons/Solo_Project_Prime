myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.myFoodColl = UserService.myFoodCollection;

  vm.getMyFoods = function () {
    UserService.getfood();
    console.log('in controller getMyFoods', vm.myFoodColl);
  }
  vm.getMyFoods();
});
