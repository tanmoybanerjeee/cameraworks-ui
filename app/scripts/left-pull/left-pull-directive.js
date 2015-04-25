/**
 * Created by tanmoybanerjee on 3/1/15.
 */
'use strict';

angular.module('cameraworks').directive('cwLeftpull', function () {
  return {
    restrict: 'A',
    transclude:true,
    priority:10,
    templateUrl: function(element){
      return 'views/left-pull/left-pull.html';
    }
  };
});
