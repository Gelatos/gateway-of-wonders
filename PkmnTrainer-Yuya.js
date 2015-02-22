//================================================================================
//                              TRAINER: YUYA
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Yuya";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "Yuya Narumi";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Yuya.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "Persona!";
TrainerList[currentTrainer].age = "?";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "?";
TrainerList[currentTrainer].preferredPokemon = "?";
TrainerList[currentTrainer].dislikedPokemon = "?";
TrainerList[currentTrainer].skills = "?";

// ========================================================
//                   TRAINER ITEMS
// ========================================================


// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 NARUKAMI (Magneton )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Narukami";
pkmn.species = "Magneton ";
pkmn.speciesNumber = "0";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/45/Spr_5b_082.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Unknown";
pkmn.abilityDesc = "No description available.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 TAKEBA (Xatu )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Takeba";
pkmn.species = "Xatu ";
pkmn.speciesNumber = "0";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a6/Spr_5b_178_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Unknown";
pkmn.abilityDesc = "No description available.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ARISATO (Trapinch )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Arisato";
pkmn.species = "Trapinch ";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/1a/Spr_4d_328.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Unknown";
pkmn.abilityDesc = "No description available.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 HANAMURA (Foongus )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Hanamura";
pkmn.species = "Foongus ";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/ec/Spr_5b_590.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Unknown";
pkmn.abilityDesc = "No description available.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 AMAGI (Pignite)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Amagi";
pkmn.species = "Pignite";
pkmn.speciesNumber = "498";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/f/f8/Spr_5b_499.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Unknown";
pkmn.abilityDesc = "No description available.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

