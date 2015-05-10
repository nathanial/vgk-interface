var React = require('react');
var _ = require('lodash');
var Button = require('react-bootstrap/lib/Button');

var LoadWorldPanel = React.createClass({
  getInitialState: function(){
    return {
      worlds: []
    };
  },

  render: function(){
    return (
      <div className="panel-container">
        <div className="load-world-panel panel centered-panel" {...this.props}>
          <div className="panel-header">
            <span className="panel-title">Load World</span>
          </div>
          <div className="panel-content">
            <ul className="world-list">
              {_.map(this.state.worlds, function(world){
                return <li>{world.name}</li>;
              })}
            </ul>
          </div>
          <div className="panel-footer">
            <Button>Load</Button>
            <Button>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoadWorldPanel;
