//================================================================================
//                              TRAINER: JASON
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Jason";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "Jason Evans";

// pokedollars
TrainerList[currentTrainer].pokedollars = 5900;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Jason2.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Jason-Nin-nin.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "...";
TrainerList[currentTrainer].age = "16";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Fairly calm and relaxed, and not above being sarcastic to others. He does things at his own pace and though he doesn't particularly mind working with others, he won't seek actively seek others to work with unless he needs them. ";
TrainerList[currentTrainer].preferredPokemon = "He tends to prefer Pokemon able to adapt to different situations without much trouble, particularly dark and fighting types. ";
TrainerList[currentTrainer].dislikedPokemon = "Holds a strong dislike for ghost pokemon, or at least those that are visibly so. Also dislikes ground and rock types.";
TrainerList[currentTrainer].skills = "Fairly fast runner and skilled at parkour. Also rather good at working out puzzles and problems.";

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
item.name = "Black Pokeball";
item.type = "Exodeus Tech";
item.quantity = 2;
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Badges
// ------------------------------------------------
var item = new Item ();
item.name = "Flutter Badge";
item.type = "Badge";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/FlutterBadge.png";
item.description = "<img src='" + getEmoteSet ("Fluttera").getEmote("Battle", "") + "' />";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

var item = new Item ();
item.name = "Secret Power";
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
//                                 SURA (Combusken )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Sura";
pkmn.species = "Combusken ";
pkmn.speciesNumber = "0";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/60/Spr_5b_256_m_s.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Speed Boost";
pkmn.abilityDesc = "Speed increases by one stage each turn except the turn that the Pokemon is switched into battle.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 LEO (Eevee )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Leo";
pkmn.species = "Eevee ";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/3/30/Spr_4d_133.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Adaptability";
pkmn.abilityDesc = "Increases the Same Type Attack Bonus from 1.5 to 2.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DORINA (Nidorina )
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dorina";
pkmn.species = "Nidorina ";
pkmn.speciesNumber = "0";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a8/Spr_5b_030.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Hustle";
pkmn.abilityDesc = "Damage from physical attacks is 1.5 times, but average accuracy is only 80%.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 FEEBAS 
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Feebas ";
pkmn.species = "Feebas ";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/40/Spr_5b_349.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Swift Swim";
pkmn.abilityDesc = "Boosts the Pokemon‘s Speed in rain.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 TERA (Chinchou)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Tera";
pkmn.species = "Chinchou";
pkmn.speciesNumber = "169";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/be/170.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Volt Absorb";
pkmn.abilityDesc = "Restores HP if hit by an Electric-type move.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 PINECO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Pineco";
pkmn.species = "Pineco";
pkmn.speciesNumber = "203";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/3/33/Spr_4d_204.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Sturdy";
pkmn.abilityDesc = "The Pokemon is protected against 1-hit KO attacks.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

