myApp.controller('UserController', function (UserService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.sendText = function () {
    vm.text = {
      message: 'The unexamined life is not worth living'
    };
    $http({
      method: 'POST',
      url: '/send-sms',
      data: vm.text
    });
  };

  vm.addFoodItem = function () {
    vm.foodStuff = {
      food: vm.foodIn, 
      days: vm.daysIn,
      user: vm.userObject.userName
    };
    console.log('vm.foodStuff ->', vm.foodStuff);
    $http({
      method: 'POST',
      url: '/addfood',
      data: vm.foodStuff
     
    })
  }
});