var React = require('react');
var Draggable = require('react-draggable2');
var Panel = require('react-bootstrap/lib/Panel');
var Button = require('react-bootstrap/lib/Button');
var InventoryGrid = require('./InventoryGrid');

var InventoryPanel = React.createClass({
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
      <Draggable handle=".panel-title">
        <Panel header={header} className="inventory-panel">
          <InventoryGrid ref="backpackInventory" className="inventory-grid backpack-inventory" rows={3} columns={9}></InventoryGrid>
          <InventoryGrid ref="toolbarInventory" className="inventory-grid toolbar-inventory" rows={1} columns={9}></InventoryGrid>
        </Panel>
      </Draggable>
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
  }
});

module.exports = InventoryPanel;
