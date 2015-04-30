var React = require('react');
var HUD = require('./hud/HUD');
var $ = require('jquery');
$(function(){
  React.render(
    React.createElement(HUD, null),
    document.body
  );  
});
