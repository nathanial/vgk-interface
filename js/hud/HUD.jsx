var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var Toolbox = require('./Toolbox');
var InventoryPanel = require('./inventory/InventoryPanel');

var HUD = React.createClass({
  render: function(){
    var style = this.getStyle();
    return (
      <div style={style.hud}>
        <InventoryPanel></InventoryPanel>
        <Toolbox></Toolbox>
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
