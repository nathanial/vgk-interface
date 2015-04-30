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
      <div className="inventory-grid" style={this._getStyle()} {...this.props}>
        {this._renderGrid()}
      </div>
    );
  },

  _renderGrid: function(){
    var results = [];
    for(var row = 0; row < this.props.rows; row++){
      for(var col = 0; col < this.props.columns; col++){
        results.push(<InventoryItem left={col*42} top={row*40}></InventoryItem>);
      }
    }
    return results;
  },

  _getStyle: function(){
    return {
      width: this.props.columns * 42,
      height: this.props.rows * 40
    };
  }
});

module.exports = InventoryGrid;
