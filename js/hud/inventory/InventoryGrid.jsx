var React = require('react');
var InventoryItem = require('./InventoryItem');

var InventoryGrid = React.createClass({

  getDefaultProps: function(){
    return {
      rows: 10,
      columns: 10
    };
  },


  render: function(){
    return (
      <div className="inventory-grid">
        {this._renderGrid()}
      </div>
    );
  },

  _renderGrid: function(){
    var results = [];
    for(var row = 0; row < this.props.rows; row++){
      for(var col = 0; col < this.props.columns; col++){
        results.push(<InventoryItem left={row*42} top={col*40}></InventoryItem>);
      }
    }
    return results;
  }
});

module.exports = InventoryGrid;
