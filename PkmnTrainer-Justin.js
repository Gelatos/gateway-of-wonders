//================================================================================
//                              TRAINER: JUSTIN
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Justin";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Justin";
TrainerList[currentTrainer].fullName = "Justin Hart";

// pokedollars
TrainerList[currentTrainer].pokedollars = 2600;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Justin.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "What? That doesn’t make any sense. Exodeus is a benevolent well-meaning hierarchy.";
TrainerList[currentTrainer].age = "16";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "In battle he tries to act tough but is really a naive coward and is easily persuadable out of fear or by a pretty face. While shy at first meeting he will eventually warm up to people and from there on consider them family.";
TrainerList[currentTrainer].preferredPokemon = "Any type of Pokemon will do, however, he prefers water, grass and fire types.";
TrainerList[currentTrainer].dislikedPokemon = "Creepier pokemon such as ghosts and any Pokemon with evil intentions. Also has a mild dislike for the Whimsicott evolution line.";
TrainerList[currentTrainer].skills = "Is a semi-experienced breeder and has a basic knowledge of breeding and egg moves (I would love if I was able to use Pokemon egg moves because of this but I'm fine if I can't).";

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
item.name = "Tarp";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Blue Tent";
item.type = "Camping Gear";
item.quantity = 1;
item.description = "";
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

var item = new Item ();
item.name = "Sand Badge";
item.type = "Badge";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/TemporalBadge.png";
item.description = "<img src='" + getEmoteSet ("Sandro").getEmote("Battle", "") + "' />";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "Potion";
item.type = "Medicine";
item.quantity = 5;
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
item.image = "http://cdn.bulbagarden.net/upload/3/38/Bag_TM_Dark_Sprite.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 LILILIL (Petilil)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Lililil";
pkmn.species = "Petilil";
pkmn.speciesNumber = "548";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/61/548.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 33;

// pokemon ability
pkmn.abilityName = "Chlorophyll";
pkmn.abilityDesc = "Boosts the Pokémon‘s Speed in sunshine.";

// notes
pkmn.notes = "";

// Reign of Hart
// ---------------------------------
var move = new PokemonMove ();
move.name = "Reign of Hart";
move.type = typeNormal;
move.category = catSpecial;
move.power = "100%";
move.accuracy = "Always Hits";
move.target = "Single Target";
move.effect = "Liligant, Gardevoir, and Quagsire must use this attack at the same time. This move may only be used once per chapter.";
move.description = "The users hearts bond with their trainer to call forth power hidden deep within. The foe is then struck with the materialized energy in the form of a beam.";
pkmn.uniqueMoves.push (move);

// Blossom Serenade
// ---------------------------------
var move = new PokemonMove ();
move.name = "Blossom Serenade";
move.type = typeGrass;
move.category = catSpecial;
move.power = "150";
move.accuracy = "Always Hits";
move.target = "Self";
move.effect = "This move can only be used once per chapter. Furthermore, it may also only be used to KO an opponents final Pokémon.";
move.description = "The user dances, channeling a strange energy which causes its petals to become bright and pink like cherry blossoms. A tornado of blossoms then engulfs the opponent, dealing massive damage. The user turns to normal as the tornado dissipates.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GARDEVOIR
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gardevoir";
pkmn.species = "Gardevoir";
pkmn.speciesNumber = "282";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/2/20/Spr_5b_282.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Synchronize";
pkmn.abilityDesc = "Passes on a burn, poison, or paralysis to the foe.";

// notes
pkmn.notes = "";

// Reign of Hart
// ---------------------------------
var move = new PokemonMove ();
move.name = "Reign of Hart";
move.type = typeNormal;
move.category = catSpecial;
move.power = "100%";
move.accuracy = "Always Hits";
move.target = "Single Target";
move.effect = "Liligant, Gardevoir, and Quagsire must use this attack at the same time. This move may only be used once per chapter.";
move.description = "The users hearts bond with their trainer to call forth power hidden deep within. The foe is then struck with the materialized energy in the form of a beam.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 QUAGSIRE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Quagsire";
pkmn.species = "Quagsire";
pkmn.speciesNumber = "195";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/0f/Spr_5b_195_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 33;

// pokemon ability
pkmn.abilityName = "Water Absorb";
pkmn.abilityDesc = "The Pokémon heals up to 1/4 of it‘s maximum Hit Points when hit with Water-type moves.";

// notes
pkmn.notes = "";

// Reign of Hart
// ---------------------------------
var move = new PokemonMove ();
move.name = "Reign of Hart";
move.type = typeNormal;
move.category = catSpecial;
move.power = "100%";
move.accuracy = "Always Hits";
move.target = "Single Target";
move.effect = "Liligant, Gardevoir, and Quagsire must use this attack at the same time. This move may only be used once per chapter.";
move.description = "The users hearts bond with their trainer to call forth power hidden deep within. The foe is then struck with the materialized energy in the form of a beam.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 TENTACOOL
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Tentacool";
pkmn.species = "Tentacool";
pkmn.speciesNumber = "072";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/0c/Spr_5b_072.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Liquid Ooze";
pkmn.abilityDesc = "When the opponent absorbs Hit Points from this Pokémon, the opponent instead loses Hit Points.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GYARADOS
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gyarados";
pkmn.species = "Gyarados";
pkmn.speciesNumber = "130";
pkmn.gender = "Female";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/PinkGyarados.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Moxie";
pkmn.abilityDesc = "Attack is raised by one stage when the Pokémon knocks out another Pokémon.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 GULPIN
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gulpin";
pkmn.species = "Gulpin";
pkmn.speciesNumber = "316";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/5/57/Spr_5b_316_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Liquid Ooze";
pkmn.abilityDesc = "When the opponent absorbs Hit Points from this Pokémon, the opponent instead loses Hit Points.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 PLUSLE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Plusle";
pkmn.species = "Plusle";
pkmn.speciesNumber = "311";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/bb/Spr_5b_311.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Plus";
pkmn.abilityDesc = "When battling with Plus or Minus, Special Attack becomes 1.5 times greater.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SIGILYPH
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Sigilyph";
pkmn.species = "Sigilyph";
pkmn.speciesNumber = "561";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/3/39/Spr_5b_561.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Magic Guard";
pkmn.abilityDesc = "Prevents all damage except from direct-attack moves.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DARUMAKA
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Darumaka";
pkmn.species = "Darumaka";
pkmn.speciesNumber = "554";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/16/Spr_5b_554.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undetermined";
pkmn.abilityDesc = "The ability has yet to be determined.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 FLOETTE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Floette";
pkmn.species = "FLoette";
pkmn.speciesNumber = "670";
pkmn.gender = "";
pkmn.image = "http://puu.sh/fA7Hj/750eace52c.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 32;

// pokemon ability
pkmn.abilityName = "Undetermined";
pkmn.abilityDesc = "The ability has yet to be determined.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

