var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var Toolbox = require('./Toolbox');
var InventoryPanel = require('./inventory/InventoryPanel');
var MainMenu = require('./menu/MainMenu');
var Player = require('../player/Player');
var GlobalEventService = require('../GlobalEventService');

var HUD = React.createClass({

  getInitialState: function(){
    return {
      player: new Player(),
      panel: 'main-menu'
    };
  },

  render: function(){
    var style = this.getStyle();
    return (
      <div style={style.hud}>
        <InventoryPanel style={style.inventory} player={this.state.player}></InventoryPanel>
        <MainMenu style={style.mainMenu}></MainMenu>
        <Toolbox player={this.state.player}></Toolbox>
      </div>
    );
  },

  getStyle: function(){
    var style = {
      hud: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      },
      inventory: {},
      mainMenu: {}
    };
    if(this.state.panel !== 'inventory'){
      style.inventory.display = 'none';
    }
    if(this.state.panel !== 'main-menu'){
      style.mainMenu.display = 'none';
    }
    return style;
  },

  componentDidMount: function(){
    GlobalEventService.addListener('exit', this.onExit);
    GlobalEventService.addListener('open-inventory', this.onOpenInventory);
  },

  componentWillUnmount: function(){
    GlobalEventService.removeListener('close-hud', this.onCloseHUD);
    GlobalEventService.removeListener('open-inventory', this.onOpenInventory);
  },

  onExit: function(){
    if(this.state.panel){
      this.setState({
        panel: false
      });
    } else {
      this.setState({
        panel: 'main-menu'
      });
    }
  },

  onOpenInventory: function(){
    this.setState({
      panel: 'inventory'
    });
  }
});

module.exports = HUD;
