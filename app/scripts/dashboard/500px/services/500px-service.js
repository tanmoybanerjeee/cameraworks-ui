/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').service('PxService', ['$http', '$q', function($http,$q){

  var self = this;

  return {
    getPxPopularImages:getPxPopularImages,
    getPhoto:getPhoto,
    linkPxPhotos:linkPxPhotos
  }

  function linkPxPhotos(callback){
    _500px.getAuthorizationStatus(function(status){
      if (status === 'not_logged_in' || status === 'not_authorized') {
        _500px.login(function(status){
          if(status==='authorized'){
            getUserPhotos(callback);
          }
        });
      }else if(status==='authorized'){
       getUserPhotos(callback);
      }
    });
  }

  function getUserPhotos(callback){

    var userPhotos = {
      photos:[],
      viewHeaderTitle:''
    };
     _500px.api('/users', function(response){
      var me = response.data.user;
      _500px.api('/photos', {feature:'user', user_id:me.id}, function(response){
        userPhotos.photos = response.data.photos;
        userPhotos.viewHeaderTitle='500px - Photos of '+ me.firstname;
        callback.call(self,userPhotos);
      });
    });
  }

  function getPxPopularImages() {
    var photos = $q.defer();
    _500px.api('/photos', { feature: 'popular', page: 1, image_size:2 }, function (response) {
     photos.resolve(response.data.photos);
    });
    return photos.promise;
  }

  function getPhoto(id) {
    var photo = $q.defer();
    var url = '/photos/{id}'.replace('{id}', id);
    _500px.api(url, {image_size:4 }, function (response) {
      photo.resolve(response.data.photo);
    });
    return photo.promise;
  }


}])
