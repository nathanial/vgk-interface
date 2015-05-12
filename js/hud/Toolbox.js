import React from 'react';
import _ from 'lodash';
import VoxelTypes from '../data/VoxelTypes';
import VoxelType from './VoxelType';
import InventoryGrid from './inventory/InventoryGrid';
import Component from '../components/Component';
import GlobalEventService from '../GlobalEventService';

class Toolbox extends Component {

  static propTypes = {
    player: React.PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      selected: 1
    };
  }

  render(){
    console.log("SET SELECTED", this.state.selected);
    return (
      <div className="toolbox">
        <InventoryGrid columns={9}
                       rows={1}
                       contents={this.props.player.toolbox}
                       selected={this.state.selected}>
        </InventoryGrid>
      </div>
    );
  }

  componentDidMount(){
    this._bindToolboxChanged();
  }

  componentWillUnmount(){
    this._unbindToolboxChanged();
  }

  componentWillReceiveProps(){
    this._unbindToolboxChanged();
    this._bindToolboxChanged();
  }

  onSelected(voxelType){
    this.setState({
      selected: voxelType.name
    });
  }

  onToolboxChanged(){
    this.forceUpdate();
  }

  _bindToolboxChanged(){
    this.props.player.on('toolbox-changed', this.onToolboxChanged);
    GlobalEventService.on('toolbox-select', this.onToolboxSelect);
  }

  _unbindToolboxChanged(){
    this.props.player.off('toolbox-changed', this.onToolboxChanged);
    GlobalEventService.off('toolbox-select', this.onToolboxSelect);
  }

  onToolboxSelect(index){
    this.setState({
      selected: index
    });
  }


}

module.exports = Toolbox;
