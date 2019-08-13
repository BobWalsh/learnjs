'use strict';
var learnjs = {};

learnjs.problemView = function () {
  return $('<div class="problem-view">').text('Coming soon!')
}

learnjs.showView = function (hash) {

  var routes = {
    '#problem': learnjs.problemView
  };
  var hashParts = hash.split('-');
  var viewFn = routes[hash];
  if (viewFn) {
    $('.view-container').empty().append(viewFn());
  }
}
