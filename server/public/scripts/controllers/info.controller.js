myApp.controller('InfoController', function (UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.myFoodColl = UserService.myFoodCollection;

  vm.getMyFoods = function () {
    UserService.getfood();
    console.log('in controller getMyFoods', vm.myFoodColl);
  }
  vm.getMyFoods();

  // vm.wasteFood = function () {
  //   console.log('in controller wasteFood', vm.myFoodColl);

  // }
  vm.wasteFoodFunc = function (foodx) {
    console.log('in controller wasteFoodFunc', vm.myFoodColl);
    console.log('vm.myFoodColl.foods ->', vm.myFoodColl.foods); //foods[0]
    var foodWasteArr = [];
    // var id = foods._id;
    /* on ajax success, remove from persons array */
    var index = vm.myFoodColl.foods.indexOf(foodx);
    console.log('foodx & index->',foodx, index);
    vm.myFoodColl.foods.splice(index, 1);

    /* add person object to another scope array*/ 
    foodWasteArr.push(vm.myFoodColl.foods[index]);
  }
  vm.wasteFoodFunc();
});