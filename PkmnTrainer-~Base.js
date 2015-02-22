//================================================================================
//                              TRAINER: NAME
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "";
TrainerList[currentTrainer].age = "";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "";
TrainerList[currentTrainer].preferredPokemon = "";
TrainerList[currentTrainer].dislikedPokemon = "";
TrainerList[currentTrainer].skills = "";

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
item.name = "";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Badges
// ------------------------------------------------
var item = new Item ();
item.name = "";
item.type = "Badge";
item.quantity = 1;
item.image = "";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "";
item.type = "Medicine";
item.quantity = 1;
item.image = "";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

var item = new Item ();
item.name = "";
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
//                                 PkmnName
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "";
pkmn.species = "";
pkmn.speciesNumber = "";
pkmn.gender = "Male";
pkmn.image = "";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 0;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// hold item
pkmn.holdItemName = "None";
pkmn.holdItemDesc = "";

// notes
pkmn.notes = "";

// Unique Move - Delete if unused
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Simple Unique Move - Delete if unused
// ---------------------------------
var move = newPokemonMove ();
move.name = "";
move.simple = true;
move.url = "";
move.type = typeNormal;

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
