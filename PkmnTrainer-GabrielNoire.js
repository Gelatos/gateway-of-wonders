//================================================================================
//                              TRAINER: GABRIEL NOIRE
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "GabrielNoire";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Gabriel";
TrainerList[currentTrainer].fullName = "Gabriel Cross";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/GabrielNoire.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Embarrassed", "");
TrainerList[currentTrainer].quote = "I'm soooo screwed! What is the Chief thinking!?";
TrainerList[currentTrainer].age = "20";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "";
TrainerList[currentTrainer].preferredPokemon = "";
TrainerList[currentTrainer].dislikedPokemon = "";
TrainerList[currentTrainer].skills = "";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
//
//                                 BLSTOISE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Blastoise";
pkmn.species = "Blastoise";
pkmn.speciesNumber = "009";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/FoamBlastoise.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Impulse Cannon";
pkmn.abilityDesc = "Cannon attacks can punch through walls with ease.";

// Basic - Aqua Shot
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 DODRIO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dodrio";
pkmn.species = "Dodrio";
pkmn.speciesNumber = "085";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/19/Spr_5b_085_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Fast Foot";
pkmn.abilityDesc = "Can be ridden and runs at high speeds. Capable of leaping over or around most obstacles. Great for pursuing a fleeing target.";

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 JOLTIK
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Joltik";
pkmn.species = "Joltik";
pkmn.speciesNumber = "595";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e7/Spr_5b_595.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Tiny";
pkmn.abilityDesc = "Small enough to hide on its trainer's person without being noticed, specifically in his hair.";

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 BOUFFALANT
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Bouffalant";
pkmn.species = "Bouffalant";
pkmn.speciesNumber = "626";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/4f/Spr_5b_626.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Sturdy";
pkmn.abilityDesc = "With its powerful headbutts and protective afro, it is capable of stopping any moving object in its tracks, provided it is able to get in front of said object.";

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Basic - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// Super - 
// ---------------------------------
var move = new PokemonMove ();
move.name = "";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "";
move.accuracy = "";
move.target = "";
move.effect = "";
move.description = "";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
