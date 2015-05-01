var CubeIcon = require('cube-icon');
var $ = require('jquery');
var _ = require('lodash');
var VoxelTypes = require('../data/VoxelTypes');

var Block = function(name, count){
  this.voxel = _.find(VoxelTypes, function(vt){
    return vt.name === name;
  });
  this.count = count;
};

Block.prototype.render = function(){
  var side = this.getSideImage();
  var top = this.getTopImage();
  var cube = $(CubeIcon({
    side: side,
    top: top,
    scale: 0.5,
    size: 42,
    faceFilters: {
      front: 'brightness(70%)',
      left: 'brightness(80%)',
      top: 'brightness(90%)'
    }
  }).container);
  cube.css({
    position: 'absolute',
    left: -33,
    top: -28
  });
  return cube;
};

Block.prototype.getSideImage = function(){
  if(_.isObject(this.voxel.images)){
    return this.voxel.images['side'];
  } else {
    return this.voxel.images;
  }
};

Block.prototype.getTopImage = function(){
  if(_.isObject(this.voxel.images)){
    return this.voxel.images['top'];
  } else {
    return this.voxel.images;
  }
};

module.exports = Block;
