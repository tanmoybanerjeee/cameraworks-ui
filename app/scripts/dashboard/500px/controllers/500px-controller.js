/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').controller('PxController', ['PxService',function(PxService){

  var self = this;
  this.viewHeaderTitle = '500px';
  self.photos = [];
    PxService.getPxConnection().then(function(photos){
      angular.forEach(photos, function(photo){
        console.log(photo.name);
        self.photos.push(photo);
      })
    });
}]);
