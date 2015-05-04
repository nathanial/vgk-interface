var React = require('react');
var VoxelTypes = require('./data/VoxelTypes');
var _ = require('lodash');
var HUD = require('./hud/HUD');
var $ = require('jquery');
var engine = require('./engine/coherent');

engine.on('Ready', function(){
  engine.call('GetVoxelRegistry').then(function(VoxelRegistry){
    _.each(VoxelTypes, function(VoxelType){
      VoxelRegistry.RegisterFromJSON(JSON.stringify(VoxelType));
    });
  });
});

$(function(){
  React.render(
    React.createElement(HUD, null),
    document.body
  );
});
