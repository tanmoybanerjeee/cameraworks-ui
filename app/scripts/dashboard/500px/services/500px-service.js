/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').service('PxService', ['$http', '$q', function($http,$q){

  return {
    getPxConnection:getPxConnection
  }

  function getPxConnection() {

    var photos = $q.defer();
    _500px.api('/photos', { feature: 'popular', page: 1, image_size:3 }, function (response) {
     photos.resolve(response.data.photos);
    });

    return photos.promise;
  }


}])
