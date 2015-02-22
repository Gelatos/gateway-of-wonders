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
//                                 CHAR (Charmeleon)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Char";
pkmn.species = "Charmeleon";
pkmn.speciesNumber = "4";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/09/Spr_4d_005.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Blaze";
pkmn.abilityDesc = "When a Pokémon with Blaze uses a Fire-type move, the power will increase by 1.5x if the user has less than or equal to ⅓ of its maximum HP remaining.";

// notes
pkmn.notes = "Char is Doodle‘s first Pokémon, given to him by Grey during the Escape From Exodeus.  He‘s a sarcastic grump filled with attitude and clever quips.  He seems to be hiding some sort of dark secret from his group of fellow captured fighters, but it doesn‘t bother him much.  He makes it obvious that he defies Doodle‘s rule over him and denies his authority as master.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MIGHTY (Mightyena)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Mighty";
pkmn.species = "Mightyena";
pkmn.speciesNumber = "261";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/5/5b/Spr_4d_262.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Quick Feet";
pkmn.abilityDesc = "Speed is increased by 50% when induced with a status (Burn, Poison, Sleep, Frozen & Paralysis). If Paralysed, the speed drop is ignored.";

// notes
pkmn.notes = "Mighty is Doodle‘s first caught Pokémon, burned to exhaustion by Char.  Despite his apparent age, Mighty has not lost his visible strength, and instead has gained much wisdom ready to spread to his fellow captives of the Pokeballs.  Even if there‘s no wind, his fur will move about dramatically.  He‘s very interested in Doodle and all humans.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 CRAGGLY (Corphish)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Craggly";
pkmn.species = "Corphish";
pkmn.speciesNumber = "340";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/6/6f/Spr_4d_341.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Hyper Cutter";
pkmn.abilityDesc = "Opponent cannot lower this Pokémon’s Attack value. This Pokémon may still lower its own Attack value using a move of by itself.";

// notes
pkmn.notes = "Craggly is Doodle‘s third caught Pokémon, the prize of a fishing contest with Alexis.  Craggly is a very shy, very timid crustacean that hides behind his huge claws at small unexpected noises, and fusses over cleanliness and sanitation.  He doesn‘t miss being in the ocean, now being away from the mounds of sand that could hide anything.  He‘s deathly afraid of Doodle.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ARBY (Arbok)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Arby";
pkmn.species = "Arbok";
pkmn.speciesNumber = "23";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/0/00/Spr_5b_024.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Shed Skin";
pkmn.abilityDesc = "Every turn, it has a 1 in 3 chance of healing from a status condition (BURN, PARALYZE, SLEEP, POISON, FREEZE).";

// notes
pkmn.notes = "Arby is Doodle‘s fourth snatched fighter, done by literally using his head.  Arby is violent and has a lust for hunting, strangling, and scaring.  She‘s offended whenever someone mistakes the face on her neck for her actual face.  She finds Doodle to be some sort of toy gone haywire, and is upset that he doesn‘t know she‘s female.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 YAM (Yamask)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Yam";
pkmn.species = "Yamask";
pkmn.speciesNumber = "561";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/d/d1/Spr_5b_562.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Mummy";
pkmn.abilityDesc = "If you are touched by an opponent, you make their ability Mummy.";

// notes
pkmn.notes = "Yam is Doodle‘s tenth Pokémon, mercifully taken down by Mighty.  Yam is pretty shy and worries a lot about its friends‘ welfare.  It seems to entirely remember itself in life, but refuses to discuss it--this leads to only it knowing if it‘s a she, which everyone seems to assume.  It feels an odd sense of familiarity with Doodle, but tries to ignore it whenever near him.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ONE (Onix)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "One";
pkmn.species = "Onix";
pkmn.speciesNumber = "94";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/4c/Spr_4d_095.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Sturdy";
pkmn.abilityDesc = "The Pokémon is unaffected by One Hit Knock Out moves and in Generation V, the Pokémon cannot be knocked out when it has full Hit Points";

// notes
pkmn.notes = "Onix is Doodle‘s eighth Pokémon, done through battle with Craggly.  Onix is pretty stupid and cocky, but honest and determined.  He once thought he was a shark because of the spike on his head, but now thinks he‘s some sort of hybrid of multiple creatures.  He can relate to Doodle‘s inner desperation to get smarter and better, but would enjoy smashing him to death.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MOLGA (Emolga)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Molga";
pkmn.species = "Emolga";
pkmn.speciesNumber = "586";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a2/Spr_5b_587.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Static";
pkmn.abilityDesc = "The opponent has a 30% chance of being induced with PARALYZE when using an attack, that requires physical contact, against this Pokémon.";

// notes
pkmn.notes = "Molga is Doodle‘s second catch, the first done without any Pokémon.  Molga is a cheery and easygoing flare of sunshine, and has a constant need to have fun.  He often forgets his tail exists and mistakes it for an enemy.  He doesn‘t seem to mind Doodle much, and is normally glad to fly around his shoulders.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 KOFF (Koffing)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Koff";
pkmn.species = "Koffing";
pkmn.speciesNumber = "108";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/ba/Spr_5b_109.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Levitate";
pkmn.abilityDesc = "Damage dealing Ground-type moves have no effect on this Pokémon. Cannot be trapped by Arena Trap ability. Takes no damage from Spikes.";

// notes
pkmn.notes = "Koff is Doodle‘s fifth catch, revenge for when Wes locked away his stuff including the Weezing he saved at Seabrush.  Koff doesn‘t appear to be able to speak, but from the way he poots out smoke, one can tell that he‘s concerned about how others view him and envies their looks.  He doesn‘t envy Doodle, though--his hoody and hair make him look ugly.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 DUSK (Duskull)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dusk";
pkmn.species = "Duskull";
pkmn.speciesNumber = "354";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/7f/Spr_4d_355.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Levitate";
pkmn.abilityDesc = "Damage dealing Ground-type moves have no effect on this Pokémon. Cannot be trapped by Arena Trap ability. Takes no damage from Spikes.";

// notes
pkmn.notes = "Dusk is Doodle‘s sixth lured ally, done by a mix of Pokémon battling and use of his own skills.  Dusk enjoys the basics of his kind--crying of children--but has also had an interest in taking up knitting, finding it funny that sharp tools can be used creatively.  Immediately after seeing Doodle, Dusk seemed to have understood him and now shows affection toward him.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SHU (Shuppet)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Shu";
pkmn.species = "Shuppet";
pkmn.speciesNumber = "352";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/43/Spr_5b_353.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Insomnia";
pkmn.abilityDesc = "The Pokémon cannot be under the SLEEP condition while having this ability.";

// notes
pkmn.notes = "Shu is Doodle‘s ninth captured pet, hastily fought by Mighty.  Shu has a rather soul-searchy personality, and speaks by blowing wind from beneath her cloak.  Shu once went an entire week without scaring anyone--it was the worst time of her life.  She finds Doodle‘s presence to be filled with vengeance and anger, and so she feeds off of it whenever possible.";

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
pkmn.speciesNumber = "606";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/5/50/Spr_5b_607.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Flame Body";
pkmn.abilityDesc = "The opponent has a 30% chance of being induced with BURN when using an attack, that requires physical contact, against this Pokémon.";

// notes
pkmn.notes = "Lite is Doodle‘s seventh caught Pokémon with Craggly, one of the few done through battling.  Lite is mysterious and curious, and has an obsession with the mind.  It doesn‘t much care for the world other than the things living in it, and is infatuated with nature.  It thinks Doodle‘s soul is rich with emotion and nutrition.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

