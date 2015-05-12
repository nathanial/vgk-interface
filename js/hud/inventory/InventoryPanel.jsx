var React = require('react');
var Draggable = require('react-draggable2');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var InventoryGrid = require('./InventoryGrid');
var Panel = require('../../components/Panel');

var InventoryPanel = React.createClass({

  propTypes: {
    player: React.PropTypes.object.isRequired
  },

  render: function(){
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
  },

  getStyle: function(){
    return {
      closeBtn: {
        position: 'absolute',
        right: 0,
        top: 3
      }
    };
  },

  onToolboxChanged: function(){
    this.props.player.emitEvent('toolbox-changed');
  },

  onBackpackChanged: function(){
    this.props.player.emitEvent('backpack-changed');
  }
});

module.exports = InventoryPanel;
