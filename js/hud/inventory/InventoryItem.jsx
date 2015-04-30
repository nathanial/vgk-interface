var React = require('react');
var Draggable = require('react-draggable2');
var $ = require('jquery');
require('jquery-ui');

var InventoryItem = React.createClass({
  propTypes: {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  },

  render: function(){
    var start = {
      left: this.props.left,
      top: this.props.top
    };
    return (
      <div style={start} className="inventory-item">
        <div className="inventory-content">
        </div>
      </div>
    );
  },

  componentDidMount: function(){
    $(this.getDOMNode()).find('.inventory-content').draggable({
      revert: true,
      appendTo: "body",
      helper: "clone"
    });
  },

  componentWillUnmount: function(){
    $(this.getDOMNode()).find('.inventory-content').draggable('destroy');
  }

});

module.exports = InventoryItem;
