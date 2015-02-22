//================================================================================
//                              TRAINER: MIRAS
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Miras";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Miras";
TrainerList[currentTrainer].fullName = "Miras Paura";

// pokedollars
TrainerList[currentTrainer].pokedollars = 10000;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Miras.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Happy", "");
TrainerList[currentTrainer].quote = "Maxus? Do you like me?";
TrainerList[currentTrainer].age = "15";
TrainerList[currentTrainer].gender = "Female";
TrainerList[currentTrainer].personality = "\"She had a wonderful personality of being cheerful, thoughtful, creative, slightly spontaneous, adventurous, inquisitive, observing, caring—pretty much just exuding happiness and likability for someone like me. However, I should add that this is what I’ve gathered from years of knowing her. Before we warmed up to one another, Miras was shy and obedient, speaking in very short sentences and normally looking at the ground when approached. She was someone that really loved her friends, but had trouble making them.\" She is also afraid of almost anything that has an imposing figure or appearance, but is excited to learn of things she hasn't before. Due to a very severe accident in her childhood, Miras almost always feels the need to do what appears right--that is, whatever saves the one who is the most helpless--and feels great sympathy for anyone in any situation. And loves small animals and pillows. In any confrontation, she doesn't normally feel able to handle it herself and will almost desperately search for backup. Despite her outward positivity and optimism, she feels conflicted with memories of the past and doesn't mind time alone to ponder.";
TrainerList[currentTrainer].preferredPokemon = "Enjoys those with personality and color, especially those of flying-type. She also finds those with healing artes useful and just, and sometimes adorable.";
TrainerList[currentTrainer].dislikedPokemon = "Afraid of those with dark abilities, especially Ghost-type and Dark-type. While not necessarily a fan of most Psychic-type Pokémon, she doesn't mind Psychic-type moves--that is, those that heal.";
TrainerList[currentTrainer].skills = "Though not necessarily a skill, Miras is one who loves her friends dearly and is willing to do many things for them should the need arise. Despite her cowardice and shyness, she is at least able to stand up and defend those helpless--though, not alone, if at all possible. She is artistic and has been studying practical medical practice for some time.";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 BLISSEY
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Blissey";
pkmn.species = "Blissey";
pkmn.speciesNumber = "242";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/73/Spr_3r_242.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Healer";
pkmn.abilityDesc = "Healer has a 30% chance of curing an adjacent ally`s status ailment at the end of each turn in Double and Triple Battles.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 AUDINO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Audino";
pkmn.species = "Audino";
pkmn.speciesNumber = "531";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/08/Spr_5b_531.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Synchronize";
pkmn.abilityDesc = "Regenerator causes the user to restore HP by 1/3 of its maximum HP when switching out.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

