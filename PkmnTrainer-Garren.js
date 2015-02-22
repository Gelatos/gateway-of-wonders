//================================================================================
//                              TRAINER: GARREN
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Garren";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "Garren Valkyrie";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Garren.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "It doesn't matter how we get there, as long as the problem is solved.";
TrainerList[currentTrainer].age = "22";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Garren is a bit of a hothead who hates being restricted in any way. He has a strong sense of what is right and will perform his own sense of justice in whatever way he can. He is highly dedicated to his causes, preferring to take action over talking.";
TrainerList[currentTrainer].preferredPokemon = "Bird and Reptillian pokemon.";
TrainerList[currentTrainer].dislikedPokemon = "Anything that looks frail or uses cute charm to exploit weakness.";
TrainerList[currentTrainer].skills = "Garren is an experienced battler and expert martial artist. While Ashley is a very agile fighter, Garren specializes in a more brutish approach to combat and can swing a powerful punch.";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 PHAESTON (Fraxure)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Phaeston";
pkmn.species = "Fraxure";
pkmn.speciesNumber = "610";
pkmn.gender = "Female";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/fraxure.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Charge, Ground Focus";
pkmn.abilityDesc = "This pokemon can shove anything that is up to 5x its size.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 VICTUS (Clawitzer)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Victus";
pkmn.species = "Clawitzer";
pkmn.speciesNumber = "692";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/clawitzer.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Mega Cannon, Ice Focus";
pkmn.abilityDesc = "This pokemon can fire shells that are powerful enough to rip through steel.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 HIERAX (Talonflame)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Hierax";
pkmn.species = "Talonflame";
pkmn.speciesNumber = "662";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/talonflame.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Flight, Flying Focus";
pkmn.abilityDesc = "This pokemon can fly at high speeds to take its trainer great distances.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 NYREEN (Hawlucha)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Nyreen";
pkmn.species = "Hawlucha";
pkmn.speciesNumber = "700";
pkmn.gender = "Female";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/hawlucha.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Agile, Rock Focus";
pkmn.abilityDesc = "If this pokemon does nothing in battle it can deftly avoid attacks.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 CORINTHUS (Sceptile)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Corinthus";
pkmn.species = "Sceptile";
pkmn.speciesNumber = "253";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/46/Spr_4d_254.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Nourish, Grass Focus";
pkmn.abilityDesc = "This pokemon can revitalize plants with its nourishing seeds.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SAREN (Tyrantrum)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Saren";
pkmn.species = "Tyrantrum";
pkmn.speciesNumber = "696";
pkmn.gender = "";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/tyrantrum.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Shredder, Ground Focus";
pkmn.abilityDesc = "Nomnomnom";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);