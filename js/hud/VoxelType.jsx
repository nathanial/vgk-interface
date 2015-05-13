import React from 'react';
import Component from '../components/Component';

class VoxelType extends Component {

  static propTypes = {
    voxelType: React.PropTypes.object.isRequired,
    onSelected: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool.isRequired
  }

  render(){
    var style = this.getStyle();
    var type = this.props.voxelType;
    var classes = "voxel-type";
    if(this.props.selected){
      classes += " selected";
    }
    return (
      <div className={classes} onClick={this.onClick}>
        <img src={type.image} style={style.voxelImage} />
        <span className="voxel-type-name">{type.name}</span>
      </div>
    );
  }

  onClick(){
    this.props.onSelected(this.props.voxelType);
  }

  getStyle(){
    return {
      voxelImage: {
        width: 42,
        height: 42,
        position: 'absolute',
        left: 12,
        top: 5,
        border: '1px solid gray',
        'image-rendering': 'pixelated'
      }
    };
  }
}

module.exports = VoxelType;
