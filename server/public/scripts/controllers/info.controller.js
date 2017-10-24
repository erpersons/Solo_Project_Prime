myApp.controller('InfoController', function (UserService, CheckTheDateService, $scope, $filter) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.checkTheDateService = CheckTheDateService;
  // vm.myFoodColl = CheckTheDateService.myFoodCollection;



  vm.getMyFoods = function () {
    CheckTheDateService.getfood().then( function(){
      vm.myFoodColl = CheckTheDateService.foods;
      console.log('CheckTheDateService.foods', CheckTheDateService.foods);
      console.log('in controller getMyFoods ->', vm.myFoodColl);
    });
  }
  vm.getMyFoods();


  //waste food 
  //~~~~~~~~~~~~~~

  vm.wasteFoodFunc = function (foodParam) {
    console.log('in ic.wasteFoodFunc ->', foodParam);
   CheckTheDateService.wasteFood(foodParam)
  }; //end wasteFoodFunc


  //devour food 
  //~~~~~~~~~~~~~
  vm.devourFood = function (foodParam) { //x._id takes the place of foodParam on ng-click
    console.log('in ic.devourFood w/ ->', foodParam);
    CheckTheDateService.devourFood(foodParam).then(function () {
      vm.getMyFoods();
    });


  }; //end devourFood
}); //end myApp.controller