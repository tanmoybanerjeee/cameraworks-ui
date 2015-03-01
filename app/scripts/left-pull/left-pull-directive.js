/**
 * Created by tanmoybanerjee on 3/1/15.
 */
'use strict';

angular.module('cameraworks').directive('cwLeftpull', function () {
  return {
    restrict: 'A',
    templateUrl: function(element){
      element.bind('mouseenter', function(){
        return 'views/left-pull/hover.html';
      });
      element.bind('mouseleave', function(){
        return 'views/left-pull/default.html';
      });
      return 'views/left-pull/default.html';
    }
  };
});
