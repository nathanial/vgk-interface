import React from 'react';
import Draggable from 'react-draggable2';
import {Button} from 'react-bootstrap';
import InventoryGrid from './InventoryGrid';
import Panel from '../../components/Panel';
import Component from '../../components/Component';

class InventoryPanel extends Component {

  static propTypes = {
    player: React.PropTypes.object.isRequired
  }

  render(){
    var style = this.getStyle();

    var header = (
      <div>
        <span>Inventory</span>
        <Button bsStyle="link" style={style.closeBtn}>
          <i className="fa fa-times"></i>
        </Button>
      </div>
    );

    return (
      <Panel {...this.props}>
        <div className="inventory-panel panel-content">
          <InventoryGrid ref="backpackInventory"
                         className="inventory-grid backpack-inventory"
                         rows={7} columns={20} contents={this.props.player.backpack}
                         onContentChanged={this.onBackpackChanged}>
          </InventoryGrid>
          <InventoryGrid ref="toolboxInventory"
                         className="inventory-grid toolbox-inventory"
                         rows={1} columns={9} contents={this.props.player.toolbox}
                         onContentChanged={this.onToolboxChanged}>
          </InventoryGrid>
        </div>
      </Panel>
    );
  }

  getStyle(){
    return {
      closeBtn: {
        position: 'absolute',
        right: 0,
        top: 3
      }
    };
  }

  onToolboxChanged(){
    this.props.player.emitEvent('toolbox-changed');
  }

  onBackpackChanged(){
    this.props.player.emitEvent('backpack-changed');
  }
}

module.exports = InventoryPanel;
