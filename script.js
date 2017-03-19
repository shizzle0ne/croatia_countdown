var app = angular.module('croatiaCountdown', ['circle.countdown']);

app.controller('CountdownCtrl', ['$scope', function($scope){
  // date in milliseconds //
  // austria vacation (raphi)
  // var end = new Date('08/14/2017 12:0 AM');

  // croatia vacation (kev)
  var end = new Date('07/28/2017 00:0 AM');
  var now = new Date();

  // converting date to seconds
  $scope.time = Math.round((end - now)/1000);
  // console.log($scope.time);

  // initial animation options
  addEventListener('DOMContentLoaded', function() {
    var pyro = document.getElementById('pyro').className = '';
    var before = document.getElementById('before').className = '';
    var after = document.getElementById('after').className = '';
  });

  // do stuff when finished countdown
  $scope.finished = function() {
    // fade out the background
    var countdownWrapper = document.getElementById('countdownWrapper');

    if (countdownWrapper.className != 'animated darkenBackground') {
      countdownWrapper.className = 'animated darkenBackground';
    }

    var countdown = document.getElementById('countdown');
    if (countdown.className != 'animated fadeOut') {
      countdown.className = 'animated fadeOut';
    }

    // put in awesome animated fireworks!
    pyro.className = 'pyro';
    before.className = 'before';
    after.className = 'after';
  }
}])
