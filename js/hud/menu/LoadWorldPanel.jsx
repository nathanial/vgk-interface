var React = require('react');
var _ = require('lodash');
var Button = require('react-bootstrap/lib/Button');
var Panel = require('../../components/Panel');
var ListView = require('../../components/ListView');

var LoadWorldPanel = React.createClass({
  propTypes: {
    onClose: React.PropTypes.func.isRequired,
    worlds: React.PropTypes.array.isRequired,
    onLoadWorld: React.PropTypes.func.isRequired
  },

  getInitialState: function(){
    return {
      selectedWorld: _.first(this.props.worlds)
    };
  },

  render: function(){
    return (
      <Panel {...this.props}>
        <div className="panel-header">
          <span className="panel-title">Load World</span>
        </div>
        <div className="panel-content load-world-panel">
          <ListView items={this.props.worlds}
                    labelProperty="name"
                    selected={this.state.selectedWorld}
                    onSelect={this.onWorldSelect}>
          </ListView>
        </div>
        <div className="panel-footer">
          <Button onClick={this.onLoadClick}>Load</Button>
          <Button onClick={this.onCancelClick}>Cancel</Button>
        </div>
      </Panel>
    );
  },

  onLoadClick: function(){
    this.props.onLoadWorld(this.state.selectedWorld);
  },

  onCancelClick: function(){
    this.props.onClose();
  },

  onWorldSelect: function(world){
    this.setState({
      selectedWorld: world
    });
  }
});

module.exports = LoadWorldPanel;
