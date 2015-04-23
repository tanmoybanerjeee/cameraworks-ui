/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').controller('PxController', ['PxService', '$state', function (PxService, $state) {

  var self = this;
  self.connectOption = {
    import:'',
    select:'',
    publish:''
  };
  self.photoModel = {
    photos:[],
    viewHeaderTitle:''
  }

  self.connectOption.import = 'Import your 500px images';
  self.connectOption.select='Select your best photos';
  self.connectOption.publish='Publish to Gallery';

  PxService.getPxAuthorization(function(data){
    self.photoModel=data;
  });

  self.linkPxPhotos = function(){
     PxService.linkPxPhotos(function(userPhotos){
       self.photoModel= userPhotos;
       $state.go('500px');
     });

  };

  self.showPhoto = function (id) {
    PxService.getPhoto(id).then(function (photo) {
      self.photo = photo;
      console.log(photo.image_url);
    })
  };

}]);
