//================================================================================
//                              TRAINER: DOODLE
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Doodle";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Doodle";
TrainerList[currentTrainer].fullName = "Doodle";

// pokedollars
TrainerList[currentTrainer].pokedollars = 7325;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Doodle.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Doodle.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Doodle.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Doodle.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Grin", "");
TrainerList[currentTrainer].quote = "Scream, fart, and sit. Do these things, and no bad will come for you.";
TrainerList[currentTrainer].age = "14";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Suffers from very faint memories of a distant past he doesn't remember, different 'sides' of him coming out at random times. Doesn't seem capable of voicing his thoughts and emotions efficiently, but even so has a great desire for friends and communication. Often hungry, jumpy at small noises, and lost in thinking when something he experiences almost clicks in his mind. Appears to enjoy one-on-one fist fights, perhaps out of a lack of Pokemon battle experience. His height sometimes inflates is ego, despite his youth. Takes pride in and cherishes objects that he salvages from important experiences, especially his red hoody. Mostly slow-witted and unable to come up with clever remarks or jokes, his mind almost always wandering elsewhere.";
TrainerList[currentTrainer].preferredPokemon = "At the moment is a novice and thus has little preference, but seems to enjoy Fire-type. He also seems to have some odd enjoyment with Ghost or Psychic Pokémon that have particularly strange behaviors.";
TrainerList[currentTrainer].dislikedPokemon = "Doesn't enjoy those with perky, upbeat personalities. Also doesn't enjoy ice or water types, that are small and fast.";
TrainerList[currentTrainer].skills = "Can sleep through just about anything, and has a curious, observing mind. When given the opportunity, he's able to use a long stick as a good defensive weapon. With his rather feminine figure, he's sorta athletic and acrobatic, though he still lacks impressive physical strength.";

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

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
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 LITE (Litwick)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Lite";
pkmn.species = "Litwick";
pkmn.speciesNumber = "607";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/5/50/Spr_5b_607.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Undefined";
pkmn.abilityDesc = "";

// notes
pkmn.notes = "Lite is Doodle‘s seventh caught Pokémon with Craggly, one of the few done through battling. Lite is mysterious and curious, and has an obsession with the mind. It doesn‘t much care for the world other than the things living in it, and is infatuated with nature. It thinks Doodle‘s soul is rich with emotion and nutrition.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
