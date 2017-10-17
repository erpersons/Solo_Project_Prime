var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('TextController', function ($http) {
    var vm = this;

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
});