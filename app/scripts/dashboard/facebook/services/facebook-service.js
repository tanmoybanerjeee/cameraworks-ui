/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').service('FacebookService', ['$http', '$q','Facebook',
  function($http,$q, Facebook){

  var self = this;

  return {
    getFbAuthorization:getFbAuthorization,
    getPhoto:getPhoto,
    linkFbAlbums:linkFbAlbums,
    checkAuthAndLoad:checkAuthAndLoad
  }

  function getFbAuthorization(callback){

    Facebook.getLoginStatus(function(response) {
      if (!(response.status === 'connected')) {
        Facebook.login(function(response) {
          if (response.status === 'connected') {
            linkFbAlbums(callback);
          } else if(response.status === 'not_authorized'){
            console.log('b');
          }
           else {
            console.log('c');
          }
        }, {scope: 'public_profile,email,user_friends,user_photos'});
      }else{
        linkFbAlbums(callback);
      }
    });
  }

  function checkAuthAndLoad(callback){
    Facebook.getLoginStatus(function(response) {
      if ((response.status === 'connected')) {
        linkFbAlbums(callback);
      }
    });
  }

  function linkFbAlbums(callback){
    var albums = [];
    Facebook.api('/me', function(response) {
    console.log(response);
      Facebook.api('/'.concat(response.id).concat('/albums?fields=name,cover_photo,created_time'), function(albumResponse){
        if(albumResponse&& !albumResponse.error){
          angular.forEach(albumResponse.data, function(album){
            Facebook.api('/'.concat(album.cover_photo), function(photoResponse){
              var albumData = {name:'',cover:''};
              albumData.name = album.name;
              albumData.cover = photoResponse.images[photoResponse.images.length-1];
              albumData.created_time = album.created_time;
              console.log(photoResponse);
              if(!(album.name==='Cover Photos' || album.name ==='Profile Pictures' || album.name ==='Timeline Photos')){
                albums.push(albumData);
              }
            })
          });
          callback.call(self, albums);
        }
      });
    })

  }

  function getUserPhotos(callback){
    var userPhotos = {
      photos:[],
      viewHeaderTitle:''
    };
     _500px.api('/users', function(response){
      var me = response.data.user;
      _500px.api('/photos', {feature:'user', user_id:me.id, image_size:3}, function(response){
        userPhotos.photos = response.data.photos;
        userPhotos.viewHeaderTitle='Facebook - Photos of '+ me.firstname;
        callback.call(self,userPhotos);
      });
    });
  }

  function getFbPopularImages(callback) {
    var popularPhotos = {
      photos:[],
      viewHeaderTitle:''
    };
    _500px.api('/photos', { feature: 'popular', page: 1, image_size:3 }, function (response) {
      popularPhotos.photos=response.data.photos;
      popularPhotos.viewHeaderTitle = 'Facebook - Cameraworks photos';
      callback.call(self,popularPhotos);
    });
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
