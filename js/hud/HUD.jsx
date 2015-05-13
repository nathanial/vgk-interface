import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import Toolbox from './Toolbox';
import InventoryPanel from './inventory/InventoryPanel';
import MainMenu from './menu/MainMenu';
import Player from '../player/Player';
import GlobalEventService from '../GlobalEventService';
import Component from '../components/Component';

class HUD extends Component {

  constructor(props){
    super(props);
    this.state = {
      player: new Player(),
      panel: 'main-menu'
    };
  }

  render(){
    const style = this.getStyle();
    return (
      <div style={style.hud}>
        <InventoryPanel style={style.inventory} player={this.state.player}></InventoryPanel>
        <MainMenu style={style.mainMenu}></MainMenu>
        <Toolbox player={this.state.player}></Toolbox>
      </div>
    );
  }

  getStyle(){
    const style = {
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
  }

  componentDidMount(){
    GlobalEventService.addListener('exit', this.onExit);
    GlobalEventService.addListener('open-inventory', this.onOpenInventory);
  }

  componentWillUnmount(){
    GlobalEventService.removeListener('close-hud', this.onCloseHUD);
    GlobalEventService.removeListener('open-inventory', this.onOpenInventory);
  }

  onExit(){
    if(this.state.panel){
      window.engine.call('UnfreezePlayer')
      this.setState({
        panel: false
      });
    } else {
      window.engine.call('FreezePlayer')
      this.setState({
        panel: 'main-menu'
      });
    }
  }

  onOpenInventory(){
    window.engine.call('FreezePlayer')
    this.setState({
      panel: 'inventory'
    });
  }
}

module.exports = HUD;
