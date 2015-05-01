var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var Toolbox = require('./Toolbox');
var InventoryPanel = require('./inventory/InventoryPanel');
var Player = require('../player/Player');

var HUD = React.createClass({

  getInitialState: function(){
    return {
      player: new Player()
    };
  },

  render: function(){
    var style = this.getStyle();
    return (
      <div style={style.hud}>
        <InventoryPanel player={this.state.player}></InventoryPanel>
      </div>
    );
  },

  getStyle: function(){
    return {
      hud: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    };
  }
});

module.exports = HUD;
