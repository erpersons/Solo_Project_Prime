myApp.controller('UserController', function (UserService, CheckTheDateService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.myFoodColl = UserService.myFoodCollection;
  vm.checkTheDateService = CheckTheDateService;

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
    CheckTheDateService.getfood();
    console.log('in user controller: getMyFoods', vm.myFoodColl);
  }
  vm.getMyFoods();
});