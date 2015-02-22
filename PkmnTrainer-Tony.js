//================================================================================
//                              TRAINER: TONY
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Tony";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Tony";
TrainerList[currentTrainer].fullName = "Tony Watt";

// pokedollars
TrainerList[currentTrainer].pokedollars = 200;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/Tony3.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Tony-Rocket.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "Wha-What do I... Oh man... A REAL girl in my room! This is so hi-technicaaaal!";
TrainerList[currentTrainer].age = "21";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Serious, blunt, and easily gets wrapped in his own thoughts often muttering them in the process. He seeks to discover and learn new things. He's also a bit of a coward and will almost never stick his neck out for anyone else. He isn't too reliable during dangerous situations, and while he is friendly and often nice he won't hesitate to betray a friend if it means saving himself. He is also intensely curious, he has a very hard time holding back his curiosity and it will often get the better of him. If the unknown ever comes up, he has to discover everything there is to discover about it.";
TrainerList[currentTrainer].preferredPokemon = "Steel, Electric, Bug and Fire types. ";
TrainerList[currentTrainer].dislikedPokemon = "Humanoid's and most water types.";
TrainerList[currentTrainer].skills = "Very smart and an excellent mechanic and electrician. He's also skilled in thermology, physics, mechanical engineering, aerospace engineering, electrical engineering, and computers. He's quite the scientist. He also has an extensive knowledge of pokeballs. He also has moderate knowledge of chemistry, biology, and other sciences.";

// ========================================================
//                   TRAINER ITEMS
// ========================================================

// ------------------------------------------------
//                   Generics
// Generic Items can actually have their own type.
// All items with the same type in this section will be 
// sorted in their own category on the key item page.
// ------------------------------------------------

var item = new Item ();
item.name = "Syringe";
item.type = "Medical Supplies";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Needles";
item.type = "Medical Supplies";
item.quantity = 6;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Needle Case";
item.type = "Medical Supplies";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Pokemon Poison";
item.type = "Medical Supplies";
item.quantity = "100ml";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Sodium Pentothal";
item.type = "Medical Supplies";
item.quantity = "22/8";
item.description = "Truth Serum";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tetrodotoxin";
item.type = "Medical Supplies";
item.quantity = "3/4";
item.description = "Deadly Poison";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Neurolisokrypt";
item.type = "Medical Supplies";
item.quantity = "7/4";
item.description = "Paralysis";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Broken Black Pokeball";
item.type = "Exodeus Tech";
item.quantity = 6;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Admin Launcher";
item.type = "Exodeus Tech";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Resonator Sound Module";
item.type = "Exodeus Tech";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Map";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Bedroll";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tent";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tarp";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tools";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Razor";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Matches";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Cigarettes";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Sharpie";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Super Rod";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Dome Fossil";
item.type = "Common";
item.quantity = 1;
item.description = "<img src='http://cdn.bulbagarden.net/upload/5/51/Mine_Dome_Fossil.png' />";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Badges
// ------------------------------------------------
var item = new Item ();
item.name = "Venom Badge";
item.type = "Badge";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/VenomBadge.png";
item.description = "<img src='" + getEmoteSet ("Vanessa").getEmote("Battle", "") + "' />";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Flutter Badge";
item.type = "Badge";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/FlutterBadge.png";
item.description = "<img src='" + getEmoteSet ("Fluttera").getEmote("Battle", "") + "' />";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "Potion";
item.type = "Medicine";
item.quantity = 7;
item.image = "http://cdn.bulbagarden.net/upload/e/ed/Bag_Potion_Sprite.png";
item.description = "Heals a small amount of health to a pokemon.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Revive";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/9/9a/Bag_Revive_Sprite.png";
item.description = "Revives a fainted pokemon to half health.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Rare Candy";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/8/8d/Bag_Rare_Candy_Sprite.png";
item.description = "Feeding this to a pokemon will give it a level up.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/MedicineItemD.png";
item.description = "Heals a pokemon of poison.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Super Repel";
item.type = "Medicine";
item.quantity = 2;
item.image = "http://cdn.bulbagarden.net/upload/c/c0/Bag_Super_Repel_Sprite.png";
item.description = "Repels pokemon.";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

var item = new Item ();
item.name = "Toxic";
item.type = "TM";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/3/38/Bag_TM_Dark_Sprite.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Dig";
item.type = "TM";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/b/b8/Bag_TM_Ground_Sprite.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Thunder Wave";
item.type = "TM";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemD.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Pay Day";
item.type = "TM";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemD.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Roost";
item.type = "TM";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemD.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Flash";
item.type = "TM";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemD.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 FURY (Scyther)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Fury";
pkmn.species = "Scyther";
pkmn.speciesNumber = "123";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e9/Spr_4p_123_f_s.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 40;

// pokemon ability
pkmn.abilityName = "Technician";
pkmn.abilityDesc = "Raises moves power by 1.5x that have 60 or less base power.";

// notes
pkmn.notes = "";

// Bullet Combat
// ---------------------------------
var move = new PokemonMove ();
move.name = "Bullet Combat";
move.type = typeFighting;
move.category = catPhysical;
move.power = "60";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Multi hit move whose implementation is as a single hit move.";
move.description = "The user attacks their opponent five times so fast that it looks like they struck with just a single blow.";
pkmn.uniqueMoves.push (move);

// Toxic
// ---------------------------------
var move = new PokemonMove ();
move.name = "Toxic";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/toxic.shtml";
move.type = typeNormal

// U-turn
// ---------------------------------
var move = new PokemonMove ();
move.name = "U-turn";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/u-turn.shtml";
move.type = typeNormal

// Warrior`s Cry
// ---------------------------------
var move = new PokemonMove ();
move.name = "Warrior`s Cry";
move.type = typeFighting;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Single Target";
move.effect = "Sharply (2) raises the user`s Attack Stat.";
move.description = "The user makes a fearsome battle cry, invigorating themself.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SCHKLOUP (Octillery)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Schkloup";
pkmn.species = "Octillery";
pkmn.speciesNumber = "224";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/f/f5/Spr_5b_224_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 39;

// pokemon ability
pkmn.abilityName = "Sniper";
pkmn.abilityDesc = "Raises critical hit damage to 3x instead of 2x.";

// notes
pkmn.notes = "";

// Toxic
// ---------------------------------
var move = new PokemonMove ();
move.name = "Toxic";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/toxic.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 AL (Golett)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Al";
pkmn.species = "Golett";
pkmn.speciesNumber = "622";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e3/Spr_5b_622.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 46;

// pokemon ability
pkmn.abilityName = "No Guard";
pkmn.abilityDesc = "The accuracy of all moves known by this Pokemon and all Pokemon targeting this Pokemon raises to 100%";

// notes
pkmn.notes = "";

// Demonic Punch
// ---------------------------------
var move = new PokemonMove ();
move.name = "Demonic Punch";
move.type = typeGhost;
move.category = catPhysical;
move.power = "130";
move.accuracy = "20%";
move.target = "Single Target";
move.effect = "Lowers the user`s Special Defense and Speed.";
move.description = "Golurk calls upon the devil to bless him with more physical strength for a single punch. In exchange he loses some of his sanity and reaction.";
pkmn.uniqueMoves.push (move);

// Prankster Illusion
// ---------------------------------
var move = new PokemonMove ();
move.name = "Prankster Illusion";
move.type = typeDark;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Create an illusion of something nearby.";
move.description = "The Pokemon creates an illusion of whatever it can imagine nearby.";
pkmn.uniqueMoves.push (move);

// Shadow Shift
// ---------------------------------
var move = new PokemonMove ();
move.name = "Shadow Shift";
move.type = typeGhost;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Pass through walls, objects, or other innanimate objects.";
move.description = "Allows ghost Pokemon to shift through walls or other solid objects or creatures. They can also take items or creatures through with them, even if they are a Ghost type only because it is their secondary typing.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 IVY (Venusaur)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Ivy";
pkmn.species = "Venusaur";
pkmn.speciesNumber = "003";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/c/cb/Spr_3e_003.gif";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 33;

// pokemon ability
pkmn.abilityName = "Overgrow";
pkmn.abilityDesc = "Raises grass moves by 1.5x when low on health.";

// notes
pkmn.notes = "";

// Venoshock
// ---------------------------------
var move = new PokemonMove ();
move.name = "Venoshock";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/venoshock.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 CRICKEY (Feraligatr)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Crickey";
pkmn.species = "Feraligatr";
pkmn.speciesNumber = "160";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/06/Spr_5b_160.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 33;

// pokemon ability
pkmn.abilityName = "Torrent";
pkmn.abilityDesc = "Powers up Water-type moves in a pinch.";

// hold item
pkmn.holdItemName = "Poison Barb";
pkmn.holdItemDesc = "Increases poison moves by 20%";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 WRATH (Pinsir)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Wrath";
pkmn.species = "Pinsir";
pkmn.speciesNumber = "127";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/b1/Spr_5b_127.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Moxie";
pkmn.abilityDesc = "Attack is raised by one stage when the Pokemon knocks out another Pokemon.";

// notes
pkmn.notes = "";

// Toxic
// ---------------------------------
var move = new PokemonMove ();
move.name = "Toxic";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/toxic.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 LANCE (Beedrill)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Lance";
pkmn.species = "Beedrill";
pkmn.speciesNumber = "015";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/eb/Spr_4d_015_s.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Swarm";
pkmn.abilityDesc = "Raises bug moves by 1.5x when low health";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 JAWS (Trapinch)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Jaws";
pkmn.species = "Trapinch";
pkmn.speciesNumber = "328";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a6/328.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Arena Trap";
pkmn.abilityDesc = "The opponent cannot run nor switch. Flying-type Pokemon and Pokemon with the Levitate special ability are unaffected. If this Pokemon switches, the opponent is still trapped for that turn. The opponent may still switch by using Baton Pass.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DEMON (Sneasel)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Demon";
pkmn.species = "Sneasel";
pkmn.speciesNumber = "215";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/76/Spr_5b_215_m.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Keen Eye";
pkmn.abilityDesc = "Prevents the Pokemon from losing accuracy.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DEVIL (Sableye)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Devil";
pkmn.species = "Sableye";
pkmn.speciesNumber = "302";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/c/c2/Spr_4d_302.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Keen Eye";
pkmn.abilityDesc = "Prevents the Pokemon from losing accuracy.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ARIADOS
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Ariados";
pkmn.species = "Ariados";
pkmn.speciesNumber = "168";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/7d/Spr_5b_168.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Swarm";
pkmn.abilityDesc = "Raises bug moves by 1.5x when low health";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SUSHI (Shellder)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Sushi";
pkmn.species = "Shellder";
pkmn.speciesNumber = "090";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/66/Spr_5b_090.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Skill Link";
pkmn.abilityDesc = "All multi-hit moves hit the max amount of times.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GRIMER
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Grimer";
pkmn.species = "Grimer";
pkmn.speciesNumber = "088";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/6e/Spr_5b_088.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Stench";
pkmn.abilityDesc = "If the Pokemon make physical contact with the opponent, there is a chance the opponent flinches.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 KIPZ (Mudkip)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Kipz";
pkmn.species = "Mudkip";
pkmn.speciesNumber = "258";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/60/Spr_5b_258.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Torrent";
pkmn.abilityDesc = "Powers up Water-type moves in a pinch.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ARON
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Aron";
pkmn.species = "Aron";
pkmn.speciesNumber = "304";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/aa/Spr_4d_304.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Rock Head";
pkmn.abilityDesc = "Negates recoil damage.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 FUGLY (Purugly)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Fugly";
pkmn.species = "Purugly";
pkmn.speciesNumber = "432";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/PuruglyEx.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 38;

// pokemon ability
pkmn.abilityName = "Thick Fat";
pkmn.abilityDesc = "Raises resistance to Fire-and Ice-type moves.";

// notes
pkmn.notes = "<b>Special Condition:</b> Purugly is always under the negative effects of center of attention.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DIM (Volbeat)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dim";
pkmn.species = "Volbeat";
pkmn.speciesNumber = "313";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/VolbeatEx.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Illuminate";
pkmn.abilityDesc = "If the Pokemon is in the lead spot, chance of encountering a wild Pokemon increases to 200%.";

// notes
pkmn.notes = "<b>Special Condition:</b> Volbeat is always under the negative effects of confusion.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GLUTTONY (Lickitung)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gluttony";
pkmn.species = "Lickitung";
pkmn.speciesNumber = "108";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/LickitungEx.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Own Tempo";
pkmn.abilityDesc = "Prevents the Pokemon from becoming confused.";

// notes
pkmn.notes = "<b>Special Condition:</b> Lickitung is always under the negative effects of encore.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SLOTH (Zorua )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Sloth";
pkmn.species = "Zorua ";
pkmn.speciesNumber = "570";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/ZoruaEx.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Illusion";
pkmn.abilityDesc = "When sent out into battle, it takes the name and appearance of the last non-fainted Pokemon within your party. It breaks when an attack does damage on the Pokemon but not from Weather Effects or Entry Hazards.";

// notes
pkmn.notes = "<b>Special Condition:</b> Zorua is always under the negative effects of recharging.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SPIRITOMB
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Spiritomb";
pkmn.species = "Spiritomb";
pkmn.speciesNumber = "442";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/SpiritombEx.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 50;

// pokemon ability
pkmn.abilityName = "Pressure";
pkmn.abilityDesc = "When this Pokemon is hit by a move, the opponent`s PP lowers by 2 rather than 1.";

// notes
pkmn.notes = "<b>Special Condition:</b> Spiritomb will always take constant damage when released, " + 
    "any moves it uses are instantly redirected a itself.";

// Toxic
// ---------------------------------
var move = new PokemonMove ();
move.name = "Toxic";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-bw/toxic.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 FROAKIE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Froakie";
pkmn.species = "Froakie";
pkmn.speciesNumber = "656";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/froakie.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 15;

// pokemon ability
pkmn.abilityName = "Protean";
pkmn.abilityDesc = "Before the Pokémon uses a move, it becomes a pure Pokémon of that type.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 PHOENIX (Fletchinder)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Phoenix";
pkmn.species = "Fletchinder";
pkmn.speciesNumber = "662";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/fletchinder.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Flame Body";
pkmn.abilityDesc = "The opponent has a 30% chance of being induced with BURN when using an attack, that requires physical contact, against this Pokémon. ";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GELATOS (Pidove)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gelatos";
pkmn.species = "Pidove";
pkmn.speciesNumber = "519";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/ed/Spr_5b_519_s.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 15;

// pokemon ability
pkmn.abilityName = "Rivalry";
pkmn.abilityDesc = "Attack & Special Attack is increased by 25% if the foe is of the same gender; Attack & Special Attack is decreased by 25% if the foe is of the opposite gender.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SHYGUY (Pidove)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Shyguy";
pkmn.species = "Pidove";
pkmn.speciesNumber = "519";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a5/Spr_5b_519.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 15;

// pokemon ability
pkmn.abilityName = "Rivalry";
pkmn.abilityDesc = "Attack & Special Attack is increased by 25% if the foe is of the same gender; Attack & Special Attack is decreased by 25% if the foe is of the opposite gender.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MLGF (Pidove)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "MLGF";
pkmn.species = "Pidove";
pkmn.speciesNumber = "519";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/7e/Spr_b_5b_519.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 15;

// pokemon ability
pkmn.abilityName = "Rivalry";
pkmn.abilityDesc = "Attack & Special Attack is increased by 25% if the foe is of the same gender; Attack & Special Attack is decreased by 25% if the foe is of the opposite gender.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DRILLBIT (Pidove)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Drillbit";
pkmn.species = "Pidove";
pkmn.speciesNumber = "519";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/c/cd/Spr_1b_016.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 15;

// pokemon ability
pkmn.abilityName = "Keen Eye";
pkmn.abilityDesc = "Opponent cannot lower this Pokémon's accuracy.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

