var React = require('react');

var Panel = React.createClass({
  render: function(){
    return (
      <div className="panel-container" {...this.props}>        
        <div className="panel">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Panel;
