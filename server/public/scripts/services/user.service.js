myApp.factory('UserService', function ($http, $location) {
  console.log('UserService Loaded');

  var userObject = {};
  var myFoodCollection = {
    foods: []
  };

  return {
    userObject: userObject,
    myFoodCollection: myFoodCollection,

    getuser: function () {
      console.log('UserService -- getuser');
      $http.get('/user').then(function (response) {
        if (response.data.username) {
          // user has a current session on the server
          userObject.userName = response.data.username;
          console.log('UserService -- getuser -- User Data: ', userObject.userName);
        } else {
          console.log('UserService -- getuser -- failure');
          // user has no session, bounce them back to the login page
          $location.path("/home");
        }
      }, function (response) {
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout: function () {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function (response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    },
    getfood: function () {
      $http.get('/add-food').then(function (response) {
        myFoodCollection.foods = response.data
        console.log('getFood response.data ->', response.data);
        console.log('getfood ->', myFoodCollection.foods);
      })
    }, //end getfood
   movefood: function () {

   } //end movefood

  } //end return


}); //end factory