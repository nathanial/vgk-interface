var React = require('react');
var Draggable = require('react-draggable2');
var CubeIcon = require('cube-icon');
var $ = require('jquery');
require('jquery-ui');

var InventoryItem = React.createClass({
  propTypes: {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired
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
    if(!this.props.item){
      return;
    }
    var contents = $(this.getDOMNode()).find('.inventory-content');
    contents.draggable({
      revert: true,
      appendTo: "body",
      helper: "clone",
      start: function(){
        contents.hide();
      },
      stop: function(){
        contents.show();
      }
    });
    var cube = this.props.item.render();
    contents.append(cube);
  },

  componentWillUnmount: function(){
    if(this.props.item){
      $(this.getDOMNode()).find('.inventory-content').draggable('destroy');
    }
  }

});

module.exports = InventoryItem;
