//================================================================================
//                              TRAINER: MAXUS
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Maxus";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Maxus";
TrainerList[currentTrainer].fullName = "Maxus";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Maxus.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "I'd really hate to have anyone disappointed with my services. You understand, right?";
TrainerList[currentTrainer].age = "??";
TrainerList[currentTrainer].gender = "??";
TrainerList[currentTrainer].personality = "Stoic";
TrainerList[currentTrainer].preferredPokemon = "??";
TrainerList[currentTrainer].dislikedPokemon = "??";
TrainerList[currentTrainer].skills = "Bodyguard";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 MISSINGNO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Oh shi-";
pkmn.species = "Missingno";
pkmn.speciesNumber = "000";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/9/98/Missingno_RB.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "NaN error";
pkmn.abilityDesc = "Has a random chance of altering game data.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
