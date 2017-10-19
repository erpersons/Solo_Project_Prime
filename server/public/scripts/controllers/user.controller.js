myApp.controller('UserController', function (UserService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  
  vm.myFoodColl = UserService.myFoodCollection;

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
    console.log('userObject', vm.userObject)
    vm.foodStuff = {
      food: vm.foodIn, 
      days: vm.daysIn,
      userName: vm.userObject.userName
    };
    console.log('vm.foodStuff ->', vm.foodStuff);
    $http({
      method: 'POST',
      url: '/add-food',
      data: vm.foodStuff
     
    })
  }
  vm.getMyFoods = function () {
    UserService.getfood();
    console.log('in controller getMyFoods', vm.myFoodColl);
  }
  vm.getMyFoods();
});