var React = require('react');
var _ = require('lodash');
var VoxelTypes = require('../data/VoxelTypes');
var VoxelType = require('./VoxelType');

var Toolbox = React.createClass({

  getInitialState: function(){
    return {
      selected: ''
    };
  },

  render: function(){
    var style = this.getStyle();
    var self = this;
    return (
      <div style={style.toolbox}>
        {_.map(VoxelTypes, function(voxelType){
          return (
            <VoxelType key={voxelType.name}
                       selected={self.state.selected == voxelType.name}
                       onSelected={self.onSelected}
                       voxelType={voxelType}>
            </VoxelType>
          );
        })}
      </div>
    );
  },

  onSelected: function(voxelType){
    this.setState({
      selected: voxelType.name
    });
  },

  getStyle: function(){
    return {
      toolbox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 81,
        background: "rgba(255,255,255,0.3)",
        color: 'black',
        overflowY:'auto'
      }
    };
  }
});

module.exports = Toolbox;
