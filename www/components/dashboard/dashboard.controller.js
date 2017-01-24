/**
 * Created by taimoortariqdev on 1/10/2017.
 */
(function() {
    'use strict';

    angular
        .module('app.dashboard')

        //============= START API CONSTANT =============//

        .constant('GetNews', {
          url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_news"
        })

        .constant('GetAdvertisement', {
          url: "http://www.inometrics.com/SERVER/cityCorp/Services/citycorp_ads"
        })



        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['GetNews', '$http', 'GetAdvertisement'];

    /* @ngInject */
    function DashboardController(GetNews, $http, GetAdvertisement) {
        var vm = this;
        this.post = [];
        this.advertisement = [];
        console.log("DashboardController");


      //====================START GET News FROM SERVER==================//
      $http.post(GetNews.url, {"corp_id":1}).then(function successCallback(response) {
        console.log("True from Dashboard Api");
        console.log(response);
        vm.post = response.data.datas;
        console.log(vm.post);

      }, function errorCallback(response) {
        console.log("False from Dashboard Api");
        console.log(response);
      });
      //====================END GET News FROM SERVER==================//


      //====================START GetAdvertisement FROM SERVER==================//
      $http.post(GetAdvertisement.url, {"corp_id":1}).then(function successCallback(response) {
        console.log("True from GetAdvertisement Api");
        vm.advertisement = response.data.datas;
        console.log(vm.advertisement);

      }, function errorCallback(response) {
        console.log("False from GetAdvertisement Api");
      });
      //====================END GetAdvertisement FROM SERVER==================//


    }
})();
