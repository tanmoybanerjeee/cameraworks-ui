/**
 * Created by tanmoybanerjee on 4/19/15.
 */
'use strict';
angular.module('cameraworks').controller('FacebookController',
  ['FacebookService', '$state', function (FacebookService, $state) {

  var self = this;
  self.connectOption = {
    import:'',
    select:'',
    publish:''
  };

  self.albums = [];

  self.connectOption.import = 'Import your Facebook images';
  self.connectOption.select='Select your best photos';
  self.connectOption.publish='Publish to Gallery';

    FacebookService.checkAuthAndLoad(function(albums){
      self.albums = albums;
    });

  self.fbLogin = function(){
    FacebookService.getFbAuthorization(function(albums){
      self.albums = albums;
    });
  }

}]);
