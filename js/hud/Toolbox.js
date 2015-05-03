var React = require('react');
var _ = require('lodash');
var VoxelTypes = require('../data/VoxelTypes');
var VoxelType = require('./VoxelType');
var InventoryGrid = require('./inventory/InventoryGrid');

var Toolbar = React.createClass({

  propTypes: {
    player: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      selected: ''
    };
  },

  render: function(){
    var self = this;
    return (
      <div className="toolbar">
        <InventoryGrid columns={9} rows={1} contents={this.props.player.toolbar}></InventoryGrid>
      </div>
    );
  },

  componentDidMount: function(){
    this._bindToolbarChanged();
  },

  componentWillUnmount: function(){
    this._unbindToolbarChanged();
  },

  componentWillReceiveProps: function(){
    this._unbindToolbarChanged();
    this._bindToolbarChanged();
  },

  onSelected: function(voxelType){
    this.setState({
      selected: voxelType.name
    });
  },

  onToolbarChanged: function(){
    this.forceUpdate();

  },

  _bindToolbarChanged: function(){
    this.toolbarChangedListener = _.bind(this.onToolbarChanged, this);
    this.props.player.on('toolbar-changed', this.toolbarChangedListener);
  },

  _unbindToolbarChanged: function(){
    this.props.player.off('toolbar-changed', this.toolbarChangedListener);
    this.toolbarChangedListener = undefined;
  }
});

module.exports = Toolbar;
