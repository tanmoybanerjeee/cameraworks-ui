/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').controller('PxController', ['PxService', function (PxService) {

  var self = this;
  self.viewHeaderTitle = '';
  self.connectOption = '';
  self.photos = [];

  self.authData = {};

  self.viewHeaderTitle = '500px - Popular Images ';
  self.connectOption = 'Import your 500px images';

  PxService.getPxPopularImages().then(function (photos) {
      self.photos = photos;
  });

  self.linkPxPhotos = function(){

     PxService.linkPxPhotos(function(userPhotos){
       self.photos = userPhotos.photos;
       self.viewHeaderTitle=userPhotos.viewHeaderTitle;
     });

  };


  self.showPhoto = function (id) {
    PxService.getPhoto(id).then(function (photo) {
      self.photo = photo;
      console.log(photo.image_url);
    })
  };

}]);
