const aceAlters = (title, url, ...tags) => ({
  alt_text: `${title} altered by Ace Quisido`,
  media: `alters/${url}.jpg`,
  status:
    `${title} https://acealters.com/${url}/ ` +
    '#MagicTheGathering #MTG #MTGAlter #MTGArt #MTGCommunity #WeAreMTG' +
    tags.map(tag => ` #${tag}`).join(''),
});

const darkSoulsDarkroot = (
  character,
  filename,
  acrylic = true,
  oil = true,
  wash = true,
) => {
  const paints = [];
  if (acrylic) {
    paints.push('#acrylic');
  }
  if (oil) {
    paints.push('metallic oil-based #paint');
  }
  let finale = '';
  if (wash) {
    finale = ' with an ';
    if (!acrylic) {
      finale += '#';
    }
    finale += 'acrylic thin wash';
  }
  return {
    alt_text:
      `${character} from the Dark Souls Darkroot Expansion, painted by Ace ` +
      'Quisido',
    media: `dark-souls-darkroot/${filename}.jpg`,
    status:
      `${character} painted with ${paints.join(' and ')}` +
      finale + ' and protected with varnish. ' +
      '#Art #BoardGames #DarkSouls #Miniature #MiniaturePainting ' +
      `#Miniatures${oil ? '' : '#paint'} #Painting`,
  };
};

module.exports = {

  /**
   * ALTERS
   */
  Dispel: aceAlters('Dispel (Battle for Zendikar)', 'dispel'),
  'Fevered Visions': aceAlters(
    'Fevered Visions (Shadows Over Innistrad)', 'fevered-visions',
    'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
  ),

  'Force of Will': aceAlters(
    'Force of Will (Eternal Masters)', 'force-of-will',
    'EDH', 'MTGCommander', 'MTGLegacy', 'MTGVintage',
  ),

  Hinder: aceAlters(
    'Hinder (Magic Player Rewards)', 'hinder',
    'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
  ),

  Island: aceAlters(
    'Island 286 (Shadows Over Innistrad)', 'island',
    'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern', 'MTGStandard',
    'MTGVintage',
  ),

  'Knight of the Reliquary': [
    aceAlters(
      'Fall Season Knight of the Reliquary (Conflux)',
      'knight-of-the-reliquary-fall',
      'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern',
    ),
    aceAlters(
      'Spring Season Knight of the Reliquary (Conflux)',
      'knight-of-the-reliquary-spring',
      'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern',
    ),
    aceAlters(
      'Summer Season Knight of the Reliquary (Conflux)',
      'knight-of-the-reliquary-summer',
      'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern',
    ),
    aceAlters(
      'Winter Season Knight of the Reliquary (Conflux)',
      'knight-of-the-reliquary-winter',
      'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern',
    ),
  ],

  'Lord of the Unreal': aceAlters(
    'Lord of the Unreal (Core Set 2012)', 'lord-of-the-unreal',
    'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
  ),

  'Mana Leak': aceAlters(
    'Mana Leak (Magic Player Rewards)', 'mana-leak',
    'acrylics', 'MTGModern',
  ),

  Negate: [
    aceAlters(
      'Negate (Magic Player Rewards)', 'negate',
      'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
    ),
    aceAlters(
      'Negate (Magic Player Rewards)', 'negate2',
      'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
    ),
  ],

  Plains: aceAlters(
    'Plains 230 (Core Set 2014)', 'plains',
    'acrylics', 'EDH', 'MTGCommander', 'MTGLegacy', 'MTGModern', 'MTGStandard',
    'MTGVintage',
  ),

  Ponder: aceAlters(
    'Ponder (Magic Player Rewards)', 'ponder',
    'acrylics','EDH', 'MTGCommander',
  ),

  'Psionic Blast': aceAlters(
    'Psionic Blast (Magic Player Rewards)', 'psionic-blast',
    'acrylics', 'EDH', 'MTGCommander', 'MTGModern',
  ),

  'Remove Soul': aceAlters(
    'Remove Soul (Magic Player Rewards)', 'remove-soul',
    'acrylics', 'EDH', 'MTGCommander',
  ),

  Thoughtseize: aceAlters(
    'Thoughtseize (Theros)', 'thoughtseize',
    'acrylics', 'MTGModern',
  ),

  'Tireless Tracker': aceAlters(
    'Tireless Tracker (Shadows Over Innistrad)', 'tireless-tracker',
    'acrylics', 'MTGModern',
  ),



  /**
   * DRAWINGS
   */
  'Brittany Welsh': {
    alt_text: 'Brittany Welsh, drawn by Ace Quisido',
    media: 'drawings/brittany-welsh.jpg',
    status:
      'Still life of a dear friend. Charcoals on Canson Mi-Teintes. ' +
      '#art #charcoal #stilllife',
  },

  'Lake Collage': {
    alt_text: `Piece of Lake Collage, drawn by Ace Quisido`,
    media: 'drawings/lake-collage-2.jpg',
    /*
    [
      'drawings/lake-collage-1.jpg',
      'drawings/lake-collage-2.jpg',
      'drawings/lake-collage-3.jpg',
    ]
    */
    status:
      'Chiaroscuro 🙂 #art #charcoal #charcoaldrawing #chiaroscuro #landscape',
  },

  'Portrait #1': {
    alt_text: 'Portrait #1, drawn by Ace Quisido',
    media: 'drawings/portrait-1.jpg',
    status:
      'One of my earlier attempts at #Portraiture: ' +
      '#Charcoal on Gray Canson Mi-Teintes ' +
      '#art #portrait',
  },



  /**
   * FABRICATION
   */
  'Deck Box': [ {
    alt_text: 'Wooden Deck Box modeled after UltraPro tower by Ace Quisido.',
    media: 'fabrication/deck-box-1.jpg',
    status:
      'Wooden Deck Box made with Arkansas Cedar and steel sheets. ' +
      'Modeled after UltraPro tower. ' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  }, {
    alt_text: 'Wooden Deck Box modeled after UltraPro tower by Ace Quisido.',
    media: 'fabrication/deck-box-2.jpg',
    status: 
      'Wooden Deck Box made with Arkansas Cedar and steel sheets. ' +
      'Modeled after UltraPro tower.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  }, {
    alt_text: 'Wooden Deck Box modeled after UltraPro tower by Ace Quisido.',
    media: 'fabrication/deck-box-3.jpg',
    status: 
      'Wooden Deck Box made with Arkansas Cedar and steel sheets. ' +
      'Modeled after UltraPro tower.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  } ],

  'Resin River Box': [ {
    alt_text: 'Clear Resin River Box by Ace Quisido',
    media: 'fabrication/resin-river-box-closed.jpg',
    status:
      'Clear resin river on Arkansas Cedar finished with clear lacquer.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  }, {
    alt_text: 'Clear Resin River Box by Ace Quisido',
    media: 'fabrication/resin-river-box-inside.jpg',
    status:
      'Clear resin river on Arkansas Cedar finished with clear lacquer.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  }, {
    alt_text: 'Clear Resin River Box by Ace Quisido',
    media: 'fabrication/resin-river-box-open.jpg',
    status:
      'Clear resin river on Arkansas Cedar finished with clear lacquer.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  }, {
    alt_text: 'Clear Resin River Box by Ace Quisido',
    media: 'fabrication/resin-river-box-open-closeup.jpg',
    status:
      'Clear resin river on Arkansas Cedar finished with clear lacquer.' +
      '#MagicTheGathering #MTG #MTGCommunity #WeAreMTG #WoodWork',
  } ],



  /**
   * MINIATURES
   */
  Artorias: [
    darkSoulsDarkroot('Artorias', 'artorias-front', true, true, true),
    darkSoulsDarkroot('Artorias', 'artorias-side', true, true, true),
  ],

  'Mushroom Parent & Child': darkSoulsDarkroot(
    'Mushroom Parent and Mushroom Child', 'mushrooms', true, false, false,
  ),

  'Demonic Foliage': darkSoulsDarkroot(
    'Demonic Foliage', 'demonic-foliage', true, false, false,
  ),

  Scarecrows: [
    darkSoulsDarkroot('Plow Scarecrow', 'plow-scarecrow', true, true, true),
    darkSoulsDarkroot(
      'Shears Scarecrow', 'shears-scarecrow', true, true, true,
    ),
  ],

  'Sif, the Great Grey Wolf': [
    darkSoulsDarkroot(
      'Sif, the Great Grey Wolf', 'sif-front', true, true, true,
    ),
    darkSoulsDarkroot(
      'Sif, the Great Grey Wolf', 'sif-left', true, true, true,
    ),
    darkSoulsDarkroot(
      'Sif, the Great Grey Wolf', 'sif-right', true, true, true,
    ),
  ],

  'Stone Guardian': [
    darkSoulsDarkroot(
      'Stone Guardian', 'stone-guardian-side', true, true, true,
    ),
    darkSoulsDarkroot(
      'Stone Guardian', 'stone-guardian-front', true, true, true,
    ),
  ],

  'Stone Knight':
    darkSoulsDarkroot('Stone Knight', 'stone-knight', false, true, true),



  /**
   * PAINTINGS
   */
  'Girl in the Red Dress': {
    alt_text: 'Girl in the Red Dress, by Ace Quisido',
    media: 'paintings/girl-in-the-red-dress.jpg',
    status:
      'Girl in the Red Dress -- an early attempt of #pastel #portraiture. ' +
      '#art #pastels #portrait',
  }
};
