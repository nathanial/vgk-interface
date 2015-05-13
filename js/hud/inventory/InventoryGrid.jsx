var React = require('react');
var InventoryItem = require('./InventoryItem');

var columnWidth = 42;
var rowHeight = 42;

var InventoryGrid = React.createClass({

  propTypes: {
    rows: React.PropTypes.number,
    columns: React.PropTypes.number,
    contents: React.PropTypes.object.isRequired,
    onContentChanged: React.PropTypes.func,
    selected: React.PropTypes.number.isRequired
  },

  getDefaultProps: function(){
    return {
      rows: 10,
      columns: 10,
      selected: 0
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
    var self = this;
    var i = 1;
    for(var row = 0; row < this.props.rows; row++){
      for(var col = 0; col < this.props.columns; col++){
        var b = this.props.contents[row+","+col];
        var selected = i === this.props.selected;
        results.push(
          <InventoryItem left={col*columnWidth} top={row*rowHeight} item={b}
                         itemKey={row+","+col}
                         key={row+","+col}
                         selected={selected}
                         onDropItem={self.onDropItem}
                         onRemoveItem={self.onRemoveItem}>
          </InventoryItem>
        );
        i += 1;
      }
    }
    return results;
  },

  _getStyle: function(){
    return {
      width: this.props.columns * columnWidth,
      height: this.props.rows * rowHeight
    };
  },

  onDropItem: function(source, itemKey, item){
    this.props.contents[itemKey] = item;
    this.forceUpdate();
    if(this.props.onContentChanged){
      this.props.onContentChanged();
    }
  },

  onRemoveItem: function(source, itemKey){
    delete this.props.contents[itemKey];
    this.forceUpdate();
    if(this.props.onContentChanged){
      this.props.onContentChanged();
    }
  }
});

module.exports = InventoryGrid;
