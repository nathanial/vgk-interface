var _ = require('lodash');

var VoxelTypes = _.flatten([
  require('../../assets/artificial/beacon/beacon.json'),
  require('../../assets/artificial/bookshelf/bookshelf.json'),
  require('../../assets/artificial/crafting_table/crafting_table.json'),
  require('../../assets/artificial/daylight_detector/daylight_detector.json'),
  require('../../assets/inanimate/dirt/dirt.json'),
  require('../../assets/inanimate/bedrock/bedrock.json'),
  require('../../assets/inanimate/brick/brick.json'),
  require('../../assets/inanimate/clay/clay.json'),
  require('../../assets/inanimate/coal/coal.json'),
  require('../../assets/inanimate/cobblestone/cobblestone.json'),
  require('../../assets/inanimate/diamond/diamond.json'),
  require('../../assets/inanimate/emerald/emerald.json'),
  require('../../assets/inanimate/glass/glass.json'),
  require('../../assets/inanimate/glowstone/glowstone.json'),
  require('../../assets/inanimate/gold/gold.json'),
  require('../../assets/inanimate/gravel/gravel.json'),
  require('../../assets/inanimate/ice/ice.json'),
  require('../../assets/inanimate/iron/iron.json'),
  require('../../assets/inanimate/lava/lava.json'),
  require('../../assets/inanimate/obsidian/obsidian.json'),
  require('../../assets/inanimate/quartz/quartz.json'),
  require('../../assets/inanimate/redstone/redstone.json'),
  require('../../assets/inanimate/sand/sand.json'),
  require('../../assets/inanimate/stone/stone.json'),
  require('../../assets/organic/melon/melon.json'),
  require('../../assets/organic/mushroom/mushroom.json'),
  require('../../assets/organic/nether/nether.json'),
  require('../../assets/organic/sponge/sponge.json'),
  require('../../assets/organic/trees/acacia/acacia.json'),
  require('../../assets/organic/trees/birch/birch.json'),
  require('../../assets/organic/trees/jungle/jungle.json'),
  require('../../assets/organic/trees/oak/oak.json'),
  require('../../assets/organic/trees/spruce/spruce.json')
]);

var root = "file://C:/Users/nathanial/Projects/vgk-interface/";
_.each(VoxelTypes, function(vtype, index){
  vtype.block = index + 1;

  if(_.isObject(vtype.images)){
    vtype.images['top'] = root + vtype.images['top']
    if(!vtype.images['bottom']){
      vtype.images['bottom'] = vtype.images['top']
    }
    vtype.images['side'] = root + vtype.images['side'];
  } else {
    vtype.images = root + vtype.images;
  }
});



module.exports = VoxelTypes;
