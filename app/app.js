var app = angular.module('SLCV', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider, $mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('grey');
});

app.controller('main', function main($scope){

});

app.component('curriculumVitae', {
  templateUrl: '/app/views/cv.html',
  controller: function($scope){
    $scope.show = {
      aboutMe:true,
      work: false,
      projects: false,
      school:false,
      skills: false,
      hobbies:false
    }

    $scope.changeValue = function (name)
    {
      if($scope.show[name]){
            $scope.show[name] = false;
      }
      else {
            $scope.show[name] = true;
      }
    }

  }
}
)
