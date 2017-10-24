myApp.service('CheckTheDateService', function ($http) {
    console.log('in CheckTheDateService');
    var self = this;
    var userObject = {};
    var myFoodCollection = {
        foods: []
    };
    var myFoodWasteCollection = {
        waste: []
    }

    self.getfood = function () {
        return $http.get('/add-food').then(function (response) {
            self.foods = response.data
            console.log('getFood response.data ->', response.data);
            console.log('getfood ->', myFoodCollection.foods);
        });
    } //end getfood

    self.devourFood = function (devourParam) {
        console.log('in self.devourFood w/ ->', devourParam);
     
        foodToDevour = {
            food: ''
        };
        foodToDevour.food = devourParam;
        console.log('DELETE devourFood ->', foodToDevour.food);
        return $http({
            method: 'DELETE',
            url: '/devour-food/info/' + foodToDevour.food 
        }); //end $http delete
       
    } //end devourFood

    self.wasteFood = function (wasteParam) {
        console.log('in chkdtservice self.wasteFood w/ ->', wasteParam);

        self.foodToWaste = {
            food: ''
        };
        console.log('foodToWaste ->', self.foodToWaste);
        self.foodToWaste.food = wasteParam;
        console.log('wasteParam ->', wasteParam);
        console.log('this is myFoodCollection.foods.wasted ->', myFoodCollection.foods.wasted); //logging undefined

        if(myFoodCollection.foods.wasted == false) {
            myFoodCollection.foods.wasted == true
            console.log('wasted ->', wasted);

        } else {
            alert ('This is trying to be wasted'); //should never happen...
        };
        myFoodWasteCollection.waste.push(wasteParam);

        return $http({
            method: 'PUT',
            url: '/waste-food/info/' + foodToWaste.food
        }); //end $http put
       
    } //end self.wasteFood

}) //end myApp.service