var React = require('react');
var _ = require('lodash');

var ListView = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    selected: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    labelProperty: React.PropTypes.string.isRequired
  },

  render: function(){
    var self = this;
    return (
      <ul className="list-view">
        {_.map(this.props.items, function(item){
          var classes = "list-view-item";
          if(self.props.selected === item){
            classes += " selected";
          }
          return <li className={classes} onClick={_.partial(self.onItemClicked, item)}>{item[self.props.labelProperty]}</li>
        })}
      </ul>
    );
  },

  onItemClicked: function(item){
    this.props.onSelect(item);
  }
});

module.exports = ListView;
