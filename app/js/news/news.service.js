;( function(){

  'use strict';

  angular.module('App')

  .factory('NewsService', [ '$http', 'API', function ($http, API) {

    var endpoint = API.URL + 'api/news/';

    // get News
    var getNews = function(){

      return $http.get(endpoint);

    };

    // get single News
    var getSingleNews = function(id){

      return $http.get(endpoint + id);

    };
    // make News

    var newNews = function(news){

      return $http.post(endpoint, news, API.CONFIG);

    };

    // edit News

    var editNews = function(news, id){

      return $http.put(endpoint + id, news, API.CONFIG);

    };

    // delete News
    var deleteNews = function(id){
      return $http.delete(endpoint + id, API.CONFIG);
    };


    return {

      getNews : getNews,
      getSingleNews : getSingleNews,
      newNews : newNews,
      editNews: editNews,
      deleteNews: deleteNews

    };
  }]);



}());
