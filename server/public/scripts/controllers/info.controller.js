myApp.controller('InfoController', function (UserService, CheckTheDateService, $scope, $filter) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.checkTheDateService = CheckTheDateService;
  // vm.myFoodColl = CheckTheDateService.myFoodCollection;



  vm.getMyFoods = function () {
    CheckTheDateService.getfood().then( function(){
      vm.myFoodColl = CheckTheDateService.foods;
      console.log(CheckTheDateService);
      console.log('in controller getMyFoods ->', vm.myFoodColl);
    });
  }
  vm.getMyFoods();


  //waste food 
  //~~~~~~~~~~~~~~
  // vm.foodWasteArr = [];
  // vm.wasteFoodFunc = function (foodx) {
  //   // console.log('in controller wasteFoodFunc', vm.myFoodColl);
  //   console.log('vm.myFoodColl.foods ->', vm.myFoodColl.foods);

  //   var index = vm.myFoodColl.foods.indexOf(foodx); //correct index?
  //   console.log('foodx & index->', foodx, index);
  //   vm.myFoodColl.foods.splice(index, 1); //buggy

  //   vm.foodWasteArr.push(vm.myFoodColl.foods[index]);
  // }
  // vm.wasteFoodFunc();

  //devour food 
  //~~~~~~~~~~~~~
  vm.devourFood = function (foodParam) { //x._id takes the place of foodParam on ng-click
    console.log('in ic.devourFood w/ ->', foodParam);
    CheckTheDateService.devourFood(foodParam).then(function () {

    });


  }; //end devourFood
}); //end myApp.controller