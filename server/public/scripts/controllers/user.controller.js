myApp.controller('UserController', function (UserService, CheckTheDateService, $http) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.myFoodColl = UserService.myFoodCollection;
  vm.checkTheDateService = CheckTheDateService;

  vm.sendText = function () {
    vm.text = {
      message: 'You\'ve got food in the fridge! https://limitless-beach-11146.herokuapp.com/#/home'
      //make it the heroku link with a small message??
      // 'The unexamined life is not worth living' || vm.myFoodColl ??
    };
    $http({
      method: 'POST',
      url: '/send-sms',
      data: vm.text
    });
  };

  vm.clearInput = function () {
    vm.foodIn = '';
    vm.daysIn = '';
  };


  vm.addFoodItem = function () {
    console.log('userObject', vm.userObject)
    vm.foodStuff = {
      food: vm.foodIn,
      days: vm.daysIn,
      userName: vm.userObject.userName,
      wasted: false,
      date: Date()
    };
    console.log('vm.foodStuff ->', vm.foodStuff);
    $http({
      method: 'POST',
      url: '/add-food',
      data: vm.foodStuff

    })
    vm.clearInput();
  }
  vm.getMyFoods = function () {
    CheckTheDateService.getfood();
    console.log('in user controller: getMyFoods', vm.myFoodColl);
  }
  vm.getMyFoods();

 

});