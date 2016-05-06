/**
 * @ngdoc directive
 * @name timeslotapp.directive:numberOnly
 * @description - Allow Only Number In the Field Up to 10 digit
 * # numberOnly
 */
 var timeslotApp=angular.module('timeslotapp')
timeslotApp.directive('numberOnly', function () {    
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          if(!ngModelCtrl) {
            return; 
          }
          ngModelCtrl.$parsers.push(function(val) {
            if (angular.isUndefined(val)) {
              val = '';
            }
            var clean = val.replace(/[^0-9]/g, '');            
            if(clean.length>10){
               clean=clean.slice(0,9);                
            }                        
            //clean=clean.replace(/^0+/, '');
            if (val !== clean) {
              ngModelCtrl.$setViewValue(clean);
              ngModelCtrl.$render();
            }            
            return clean;
          });
          element.bind('keypress', function(event) {
            if(event.keyCode === 32) {
              event.preventDefault();
            }
          });
        }
      };
});

/**
 * @ngdoc directive
 * @name timeslotapp.directive:custMaxlength
 * @description- set the maximum limits for input field
 * # custMaxlength
 */

timeslotApp.directive('custMaxlength', function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {      
      var maxlength = Number(attrs.custMaxlength);
      function fromUser(text) {         
          if(text!=undefined){  
            if (text.length > maxlength) {
              var transformedInput = text.substring(0, maxlength);
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
              return transformedInput;
            }
          } 
          return text;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  }; 
});