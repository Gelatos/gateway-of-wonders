//================================================================================
//                              TRAINER: JAMES
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "James";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "James";
TrainerList[currentTrainer].fullName = "James Sorrell";

// pokedollars
TrainerList[currentTrainer].pokedollars = 5000;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/James.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "I Like Purple!";
TrainerList[currentTrainer].age = "22";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "James is an adventurous and inquisitive trainer. He is intensely curious about the workings of the world and Pokémon, continually poking things for reactions and comparing reality to his own mental model of the world. At first glance he also seems very impulsive, rushing headlong into action and making things \"Interesting! That's what we're going for, right?\" But with Al's \"help\" thinking takes place rapidly, leaving the world to move at a snail's pace. Stuck with crawling through a slow moving world, he tries to compensate by talking quickly and avoiding boredom at all costs.<br /><br />James also tends to get fixated and obsessed easily, focusing on some new goal or puzzle until burning out or completing it and jumping onto the next item that catches his attention. While focused he will get extremely annoyed at distractions and attempt to ignore the thing that insists on existing despite his utter lack of attention. When this doesn't work he will react poorly and attempt to stop the thing from barging into his reality through whatever means necessary until it is gone or he snaps out of his obsession.";
TrainerList[currentTrainer].preferredPokemon = "Prefers Psychic Pokemon or other Pokemon with a large intelligence or humanoid appearance.";
TrainerList[currentTrainer].dislikedPokemon = "James generally looks down on Pokémon that are beastlike or rely on brute strength rather than finesse and cunning.";
TrainerList[currentTrainer].skills = "James is extremely good at analyzing data. With his eidectic memory by proxy and ability to rapidly process what he sees he has a veritable library of books and information to call on. As such, he is skilled with computers, tactics, strategy, etc. He tends to avoid skills that cannot be learned without tedious effort or non-mental practice.";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 AI (ALakazam)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "AI";
pkmn.species = "ALakazam";
pkmn.speciesNumber = "065";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/9/91/Spr_4h_065_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 40;

// pokemon ability
pkmn.abilityName = "Synchronize";
pkmn.abilityDesc = "When this Pokémon becomes POISON, PARALYZE, or BURN, so does the opponent. However, Fire-type and Water Veil ability Pokémon cannot be BURNed, Poison-type and Steel-type and Immunity ability Pokémon cannot be POISONed, and Limber ability Pokémon cannot be PARALYZEd.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DUSKULL
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Duskull";
pkmn.species = "Duskull";
pkmn.speciesNumber = "355";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/7f/Spr_4d_355.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Levitate";
pkmn.abilityDesc = "Damage dealing Ground-type moves have no effect on this Pokémon. Cannot be trapped by Arena Trap ability. Takes no damage from Spikes.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 KIRLIA
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Kirlia";
pkmn.species = "Kirlia";
pkmn.speciesNumber = "281";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/1e/Spr_5b_281.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Telepathy";
pkmn.abilityDesc = "Prevents damage from team-mates during Double and Triple battles";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 CLAYDOL
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Claydol";
pkmn.species = "Claydol";
pkmn.speciesNumber = "344";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/b7/Spr_5b_344.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Levitate";
pkmn.abilityDesc = "Damage dealing Ground-type moves have no effect on this Pokémon. Cannot be trapped by Arena Trap ability. Takes no damage from Spikes.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 EXEGGCUTE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Exeggcute";
pkmn.species = "Exeggcute";
pkmn.speciesNumber = "102";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/8/8f/Spr_5b_102.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Chlorophyll";
pkmn.abilityDesc = "When sunny, the Pokémon‘s Speed doubles. However, Speed will not double on the turn weather becomes Clear Skies.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SNORLAX
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Snorlax";
pkmn.species = "Snorlax";
pkmn.speciesNumber = "143";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/02/Spr_4h_143.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Thick Fat";
pkmn.abilityDesc = "Fire and Ice-type moves deal 50% damage.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

