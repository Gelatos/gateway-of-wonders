//================================================================================
//                              TRAINER: HAKU
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Haku";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Haku";
TrainerList[currentTrainer].fullName = "Haku Damashi";

// pokedollars
TrainerList[currentTrainer].pokedollars = 800;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Haku.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Happy", "");
TrainerList[currentTrainer].quote = "Hehe, yeah, I did win this battle.";
TrainerList[currentTrainer].age = "16";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "He's a reckless go getter this one. He's not much of a thinking guy, he's more of a man of action that rushes in and does his best at whatever he tries. He's a chill, easy going guy that's friendly and polite to those who approach him, but becomes a bit of a snarky, sarcastic jackass if he gets too friendly, but tries not to be rude. He likes to be a helpful good sammaritan to those around him, but he does have a limit to how helpful he wants to be. When it gets down to wire, he is willing to swallow his pride and take a more methodical and careful approach to solving problems.";
TrainerList[currentTrainer].preferredPokemon = "\"There's no better defence than a good offence\". He wants to hit first, hit fast, and hit hard, defending is an afterthought. He prefers Pokemon with high speed, and high power, the type is irrelevant.";
TrainerList[currentTrainer].dislikedPokemon = "Slow, defensive pokemon. Pokemon that benefit the longer the battle lasts. Those that are indirect in their approach, that focus more on stage hazards and hindering status conditions. He doesn't mind so much using them himself, as they allow his other, faster Pokemon to be more efficient at ass kicking, but fighting them is the worst.";
TrainerList[currentTrainer].skills = "Has high stamina. He can do alot before he starts feeling tired and or hungry. ";

// ========================================================
//                   TRAINER ITEMS
// ========================================================

// ------------------------------------------------
//                   Generics
// Generic Items can actually have their own type.
// All items with the same type in this section will be 
// sorted in their own category on the key item page.
// ------------------------------------------------

// ------------------------------------------------
//                   Badges
// ------------------------------------------------

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "Max Potion";
item.type = "Medicine";
item.quantity = 5;
item.image = "http://cdn.bulbagarden.net/upload/7/7d/Bag_Max_Potion_Sprite.png";
item.description = "Heals a pokemon to full health.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Full Heal";
item.type = "Medicine";
item.quantity = 5;
item.image = "http://cdn.bulbagarden.net/upload/2/29/Bag_Full_Heal_Sprite.png";
item.description = "Heals a pokemon of all status conditions.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Revive";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/9/9a/Bag_Revive_Sprite.png";
item.description = "Revives a fainted pokemon to half health.";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
// 
//                                 ANGUS (Infernape)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Angus";
pkmn.species = "Infernape";
pkmn.speciesNumber = "392";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/d/dd/Spr_5b_392.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 38;

// pokemon ability
pkmn.abilityName = "Blaze";
pkmn.abilityDesc = "When HP is below 1/3rd its maximum, power of Fire-type moves is increased by 50%.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DAN (Greninja)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dan";
pkmn.species = "Greninja";
pkmn.speciesNumber = "658";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/greninja.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 38;

// pokemon ability
pkmn.abilityName = "Protean";
pkmn.abilityDesc = "Before the Pokemon uses a move, it becomes a pure Pokemon of that type.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 KASUGA (Sneasel)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Kasuga";
pkmn.species = "Sneasel";
pkmn.speciesNumber = "215";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/b5/Spr_4p_215_f.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Inner Focus";
pkmn.abilityDesc = "This Pokemon will not flinch. Does not prevent flinching with Focus Punch.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 BILL (Electabuzz)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Bill";
pkmn.species = "Electabuzz";
pkmn.speciesNumber = "125";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/79/Spr_5b_125.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Static";
pkmn.abilityDesc = "When the opponent makes physical contact with the user, they become paralyzed.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ROBIN (Talonflame)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Robin";
pkmn.species = "Talonflame";
pkmn.speciesNumber = "663";
pkmn.gender = "Female";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/talonflame.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Flight";
pkmn.abilityDesc = "This pokemon can fly at high speeds with a traveler that rest on its back.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 EDDIE (Kirlia)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Eddie";
pkmn.species = "Kirlia";
pkmn.speciesNumber = "281";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/1e/Spr_5b_281.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Telepathy";
pkmn.abilityDesc = "This pokemon can read the thoughts of others and communicate with them through thought.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

