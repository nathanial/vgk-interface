var React = require('react');
var Draggable = require('react-draggable2');
var CubeIcon = require('cube-icon');
var $ = require('jquery');
require('jquery-ui');

var Dragged;

var InventoryItem = React.createClass({
  propTypes: {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired,
    itemKey: React.PropTypes.string.isRequired,
    item: React.PropTypes.object.isRequired,
    onDropItem: React.PropTypes.func.isRequired,
    onRemoveItem: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool
  },

  render: function(){
    var start = {
      left: this.props.left,
      top: this.props.top
    };
    var classes = "inventory-item";
    if(this.props.selected){
      classes += " selected";
    }
    return (
      <div style={start} className={classes}>
        <div className="inventory-content">
        </div>
      </div>
    );
  },

  componentDidMount: function(){
    this._reloadContent();
  },

  componentDidUpdate: function(){
    this._reloadContent();
  },

  componentWillUnmount: function(){
    this.oldItem = undefined;
    this.loaded = false;
    try {
      $(this.getDOMNode()).find('.inventory-content').draggable('destroy');
    } catch(err){

    }
  },

  _reloadContent: function(){
    if(this.loaded && (this.props.item === this.oldItem)){
      return;
    }
    this.oldItem = this.props.item;
    this.loaded = true;


    var self = this;
    var contents = $(this.getDOMNode()).find('.inventory-content');

    if(contents.hasClass('.ui-draggable')){
      contents.draggable('destroy');
    } else if(contents.hasClass('ui-droppable')){
      contents.droppable('destroy');
    }

    contents.empty();

    if(this.props.item){
      contents.append($("<span class=\"inventory-item-count\">"+this.props.item.count+"</span>"))
      contents.draggable({
        revert: "invalid",
        appendTo: "body",
        helper: "clone",
        start: function(){
          Dragged = {
            item: self.props.item,
            source: self
          };
          contents.hide();
        },
        stop: function(){
          contents.show();
        }
      });
      var cube = this.props.item.render();
      contents.append(cube);
    } else {
      contents.droppable({
        accept: '.inventory-content',
        drop: function(event, ui){
          if(Dragged){
            Dragged.source.removeItem();
            self.setItem(Dragged.item);
          }
          Dragged = undefined;
        }
      });
    }
  },

  setItem: function(item){
    this.props.onDropItem(this, this.props.itemKey, item);
  },

  removeItem: function(){
    this.props.onRemoveItem(this, this.props.itemKey);
  }

});

module.exports = InventoryItem;
