var React = require('react');
var InventoryItem = require('./InventoryItem');

var columnWidth = 42;
var rowHeight = 42;

var InventoryGrid = React.createClass({

  propTypes: {
    rows: React.PropTypes.number,
    columns: React.PropTypes.number,
    contents: React.PropTypes.object.isRequired
  },

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
        var b = this.props.contents[row+","+col];
        results.push(<InventoryItem left={col*columnWidth} top={row*rowHeight} item={b}></InventoryItem>);
      }
    }
    return results;
  },

  _getStyle: function(){
    return {
      width: this.props.columns * columnWidth,
      height: this.props.rows * rowHeight
    };
  }
});

module.exports = InventoryGrid;
