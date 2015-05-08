var React = require('react');
var Draggable = require('react-draggable2');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var InventoryGrid = require('./InventoryGrid');

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
      <div {...this.props}>
        <div className="inventory-panel-background"></div>
        <div className="inventory-panel">
          <InventoryGrid ref="backpackInventory"
                         className="inventory-grid backpack-inventory"
                         rows={7} columns={20} contents={this.props.player.backpack}
                         onContentChanged={this.onBackpackChanged}>
          </InventoryGrid>
          <InventoryGrid ref="toolbarInventory"
                         className="inventory-grid toolbar-inventory"
                         rows={1} columns={9} contents={this.props.player.toolbar}
                         onContentChanged={this.onToolbarChanged}>
          </InventoryGrid>
        </div>
      </div>
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

  onToolbarChanged: function(){
    this.props.player.emitEvent('toolbar-changed');
  },

  onBackpackChanged: function(){
    this.props.player.emitEvent('backpack-changed');
  }
});

module.exports = InventoryPanel;
