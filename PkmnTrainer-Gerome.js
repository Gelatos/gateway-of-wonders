//================================================================================
//                              TRAINER: GEROME
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Gerome";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "Gerome Serge";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Gerome.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "Well then, I’m off to Basson, something suspicious is happening there and I have to know what.";
TrainerList[currentTrainer].age = "22";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Gerome is a rather cautious and intelligent person. He likes to consider every possibility possible before coming to a conclusion and does not display his any possibility to others until he is positive that it is authentic. <br /><br />He is also always serious, but also understanding. When his friends need some moral advice, he is often the guy giving out answers. He has a strong sense of justice and law. But despite that, he is willing to go around laws if he feels that they are taking advantage of the ones giving them are abusing power. He considers his job's first priority as a tool for the people and a seeker of truth.";
TrainerList[currentTrainer].preferredPokemon = "Good Pokemon";
TrainerList[currentTrainer].dislikedPokemon = "Bad Pokemon";
TrainerList[currentTrainer].skills = "Gerome is a detective and is skilled in solving mysteries and is capable of coming to accurate conclusions based off simple statistics alone. He was also was a cop for some time, so he is also skilled in hand to hand combat to a major degree.";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 MIMIC (Ditto)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Mimic";
pkmn.species = "Ditto";
pkmn.speciesNumber = "131";
pkmn.gender = "";
pkmn.image = "http://www.serebii.net/pokearth/sprites/hgss/132.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Limber";
pkmn.abilityDesc = "Immune to Paralysis";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MINERVA (Aerodactyl)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Minerva";
pkmn.species = "Aerodactyl";
pkmn.speciesNumber = "141";
pkmn.gender = "Female";
pkmn.image = "http://www.smogon.com/download/sprites/bw/142.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Rock Head";
pkmn.abilityDesc = "Does not receive recoil damage";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 TRICKSTER (Zoroak)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Trickster";
pkmn.species = "Zoroak";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://www.serebii.net/blackwhite/pokemon/571.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Illusion";
pkmn.abilityDesc = "When sent out into battle, it takes the name and appearance of the last non-fainted Pokémon within your party. It breaks when an attack does damage on the Pokémon but not from Weather Effects or Entry Hazards.";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SHADOW (Gengar)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Shadow";
pkmn.species = "Gengar";
pkmn.speciesNumber = "93";
pkmn.gender = "Male";
pkmn.image = "http://www.serebii.net/blackwhite/pokemon/094.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Levitate";
pkmn.abilityDesc = "Immune to Ground Types";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 CRAWLER (Joltik)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Crawler";
pkmn.species = "Joltik";
pkmn.speciesNumber = "594";
pkmn.gender = "Female";
pkmn.image = "http://www.serebii.net/blackwhite/pokemon/595.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Compound Eyes ";
pkmn.abilityDesc = "Increases Accuracy by 30%";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DECODER (Kadabra)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Decoder";
pkmn.species = "Kadabra";
pkmn.speciesNumber = "63";
pkmn.gender = "Male";
pkmn.image = "http://www.serebii.net/blackwhite/pokemon/064.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Magic Guard ";
pkmn.abilityDesc = "Immune to damage except Physical Attacks ";

// notes
pkmn.notes = "No notes available.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
