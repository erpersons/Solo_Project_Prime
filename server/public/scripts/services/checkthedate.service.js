myApp.service('CheckTheDateService', function ($http) {
    console.log('in CheckTheDateService');
    var self = this;
    var userObject = {};
    var myFoodCollection = {
        foods: []
    };

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
            url: '/devour-food/info/' + foodToDevour.food // is /info/ correct?? 
        }); //end $http delete
       
    } //end devourFood

}) //end myApp.service