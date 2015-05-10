var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var NewWorldCommand = require('../../commands/NewWorldCommand');
var LoadWorldCommand = require('../../commands/LoadWorldCommand');
var SaveWorldCommand = require('../../commands/SaveWorldCommand');
var ExitGameCommand = require('../../commands/ExitGameCommand');
var GlobalEventService = require('../../GlobalEventService');
var LoadWorldPanel = require('./LoadWorldPanel');
var Panel = require('../../components/Panel');

var MainMenu = React.createClass({

  getInitialState: function(){
    return {
      panel: 'main-menu',
      worlds: []
    };
  },

  render: function(){
    var style = this.getStyle();
    return (
      <Panel {...this.props}>
        <div className="panel-content main-menu">
          <Button onClick={this.onNewWorldClick}>New World</Button>
          <Button onClick={this.onLoadWorldClick}>Load World</Button>
          <Button onClick={this.onSaveWorldClick}>Save World</Button>
          <Button onClick={this.onExitGame}>Exit Game</Button>
        </div>
        <LoadWorldPanel style={style.loadPanel}
                        worlds={this.state.worlds}
                        onLoadWorld={this.onLoadWorld}
                        onClose={this.onCloseLoadPanel}>
        </LoadWorldPanel>
      </Panel>
    );
  },

  getStyle: function(){
    var style = {};
    if(this.state.panel !== 'main-menu'){
      style.mainMenu = {
        display: 'none'
      };
    }
    if(this.state.panel !== 'load-panel'){
      style.loadPanel = {
        display: 'none'
      };
    }
    return style;
  },

  onNewWorldClick: function(){
    new NewWorldCommand().invoke();
  },

  onLoadWorldClick: function(){
    var self = this;
    window.engine.call("FindLoadableRealms").then(function(loadableWorlds){
      console.log(loadableWorlds);
      loadableWorlds = JSON.parse(loadableWorlds);
      self.setState({
        worlds: loadableWorlds,
        panel: 'load-panel'
      });
    });
  },

  onLoadWorld: function(){

  },

  onCloseLoadPanel: function(){

  },

  onSaveWorldClick: function(){
    new SaveWorldCommand().invoke();
  },

  onExitGame: function(){
    new ExitGameCommand().invoke();
  },

  componentDidMount: function(){
    GlobalEventService.addListener('exit', this.onExit);
  },

  componentWillUnmount: function(){
    GlobalEventService.removeListener('exit', this.onExit);
  },

  onExit: function(){
    this.setState({
      panel: 'main-menu'
    });
  }
});

module.exports = MainMenu;
