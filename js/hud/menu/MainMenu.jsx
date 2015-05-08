var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var NewWorldCommand = require('../../commands/NewWorldCommand');
var LoadWorldCommand = require('../../commands/LoadWorldCommand');
var SaveWorldCommand = require('../../commands/SaveWorldCommand');
var ExitGameCommand = require('../../commands/ExitGameCommand');

var MainMenu = React.createClass({
  render: function(){
    return (
      <div {...this.props}>
        <div className="main-menu" >
          <Button onClick={this.onNewWorldClick}>New World</Button>
          <Button onClick={this.onLoadWorldClick}>Load World</Button>
          <Button onClick={this.onSaveWorldClick}>Save World</Button>
          <Button onClick={this.onExitGame}>Exit Game</Button>
        </div>
        <div className="main-menu-background"></div>
      </div>
    );
  },

  onNewWorldClick: function(){
    new NewWorldCommand().invoke();
  },

  onLoadWorldClick: function(){
    new LoadWorldCommand().invoke();
  },

  onSaveWorldClick: function(){
    new SaveWorldCommand().invoke();
  },

  onExitGame: function(){
    new ExitGameCommand().invoke();
  }
});

module.exports = MainMenu;
