//================================================================================
//                              TRAINER: MORDECAI
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Mordecai";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = currentTrainer;
TrainerList[currentTrainer].fullName = "Mordecai Sol";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Mordecai.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Serious", "");
TrainerList[currentTrainer].quote = "Lots of ways to help people. Sometimes heal patients; sometimes breaking limbs.";
TrainerList[currentTrainer].age = "26";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Mordecai is an eccentric and thorough planner. He usually prefers to think through his actions in full before executing on them. He believes in every action he makes, never having regrets due to believing that whatever course of action he takes is the best action he could have made at the time.";
TrainerList[currentTrainer].preferredPokemon = "Mordecai has no preferences. As long as a pokemon is useful it is a good pokemon.";
TrainerList[currentTrainer].dislikedPokemon = "Any pokemon that refuses to help or perform duties.";
TrainerList[currentTrainer].skills = "Mordecai is a well trained doctor who's currently in medical school. Mordecai is a fully certified doctor, however his training is highly specialized for combat based wounds and battlefield injuries and is taking medical school to attain a more generalized education. He is proficient in the healing of both pokemon and humans and intends to open a clinic once he finishes his education.<br /><br />Mordecai also has a strong background in chemical warfare and poisons, able to create and treat many.";

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

// ------------------------------------------------
//                   Badges
// ------------------------------------------------
var item = new Item ();
item.name = "";
item.type = "Badge";
item.quantity = 1;
item.image = "";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "";
item.type = "Medicine";
item.quantity = 1;
item.image = "";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

var item = new Item ();
item.name = "";
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
//                                 RAVAGER (Delphox)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Ravager";
pkmn.species = "Delphox";
pkmn.speciesNumber = "654";
pkmn.gender = "Female";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/delphox.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Magician, Fire Focus";
pkmn.abilityDesc = "The Pokémon steals the held item of a Pokémon it hits with a move. This pokemon knows all fire type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "Ravager was Mordecai&lsquo;s first pokemon, given to him as a Fennekin. She provides the role of Special Attacker on Mordecai&lsquo;s team. Ravager is a classy lady who likes to make sure she&lsquo;s always proper and her appearance isn&lsquo;t so ragged like other Delphox. ";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SENTINEL (Skarmory)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Sentinel";
pkmn.species = "Skarmory";
pkmn.speciesNumber = "226";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e6/Spr_5b_227.png ";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Sturdy, Flying Foucs";
pkmn.abilityDesc = "The Pokémon is unaffected by One Hit Knock Out moves and the Pokémon cannot be knocked out when it has full Hit Points. This pokemon knows all flying type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "Sentinel was Mordecai&lsquo;s first capture in the wild. Sentinel is one of Mordecai&lsquo;s longest maintained ally, traveling with him ever since he was 12. He provides the role of physical wall, using his powerful steel body to shield attacks aimed at Mordecai and his allies. Sentinel is a tough guy who&lsquo;s unafraid to head first into battle.Mordecai found the bird while at the base of Mount Silver during a family trip in the Johto region. The bird was injured from a battle with a wild pokemon, so Mordecai took the pokemon and restored it to full health. Thankful to Mordecai, Sentinel allowed the young Mordecai to capture him. It was this achievement that convinced Mordecai that he wished to be a medic one day.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MEDIC (Blissey)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Medic";
pkmn.species = "Blissey";
pkmn.speciesNumber = "241";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/b5/Spr_5b_242.png ";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Healer, Psychic Focus";
pkmn.abilityDesc = "he end of the turn, there is a 30% chance of either Ally being healed from a status condition. This pokemon knows all psychic type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "Medic was given to Mordecai as a Chancey when he joined the military academy&lsquo;s field medic division. Medic has been Mordecai&lsquo;s aid in pokemon recovery, being a faithful nurse when he requires it. She&lsquo;s loyal to Mordecai but easily annoyed with her allies. She cares for them, but prefers to give them tough love as opposed to nurture.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 COMMANDO (Breloom)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Commando";
pkmn.species = "Breloom";
pkmn.speciesNumber = "285";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/7/75/Spr_4d_286.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Technician, Grass Focus";
pkmn.abilityDesc = "Moves with a base power of 60 or less raise to 1.5 times. This pokemon knows all grass type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "Commando is Mordecai&lsquo;s second captured pokemon and fulfills the main physical attacker component of his team. When he&lsquo;s not higher than a kite, Commando can give off the persona of a proud leader, but usually he&lsquo;s hallucinating, taking the orders of Mordecai as tips from his trainer while he takes on foes in the boxing ring. Commando was a professional boxer traveling his home of Unova, the greatest region in the world! While he wasn&lsquo;t the best, he was one of the most popular having many adoring fans from across the region. But one day it would all end when he was contacted by a friend, a tentacool he met on one of his tours, to help in the war of Pokenam. Commando, along with many other Unova residents, was brought to the south of Pokenam to help the allies there. It was a long two month war, Commando being given charge of his own platoon due to his military genius. He always held onto the hope that he&lsquo;d be able to lead the south to victory, however some wars just don&lsquo;t end that way. When Commando returned to Unova, he was a changed man. Haunted by the deaths of his friends, he seeked ways to forget it all. This lead to the creation of &lsquo;powder&lsquo; a substance that when ingested would cause the taker to forget and enter a hallucinatory state. He&lsquo;s since abused the drug and now his life is filled with reliving his life as a boxer and pretending his adoring fans still follow him to this day.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SYNERGIST (Meowstik)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Synergist";
pkmn.species = "Meowstik";
pkmn.speciesNumber = "0";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/meowstic.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Prankster, Psychic Focus";
pkmn.abilityDesc = "Status category moves have their Speed Priority increased by 1.This pokemon knows all psychic type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "This was Mordecai&lsquo;s fourth pokemon he captured. Synergist provides the role of support on Mordecai&lsquo;s team, sabotaging the enemy and buffing the team. He&lsquo;s one of the most level headed of the group, making him kind of plain.Synergist was one of the residents in Southern Pokenam during the war when he was an Espurr. He was under Commando&lsquo;s leadership in his platoon in the war and was rather jumpy. He always looked like he came back from seeing something horrible, which was pretty often considering he was in a war. Commando tried his best to make sure Synergist would not lose his cool, something the Espurr always appreciated. Eventually he&lsquo;d get over the horrors of war and this calming caused him to evolve once the war finished.Since the war, he&lsquo;s looked over Commando and Saboteur since both have driven themselves into hard drugs. He constantly worries about them and has been trying to get them to stop since. When Mordecai captured both of them he willingly joined the team in order to continue watching over his friends.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SABOTEUR (Tentacruel)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Saboteur";
pkmn.species = "Tentacruel";
pkmn.speciesNumber = "72";
pkmn.gender = "";
pkmn.image = "http://cdn.bulbagarden.net/upload/9/98/Spr_5b_073.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 36;

// pokemon ability
pkmn.abilityName = "Clear Body, Poison Focus";
pkmn.abilityDesc = "The wielder&lsquo;s stats cannot be lowered.This pokemon knows all poison type moves in it&lsquo;s attack list.";

// notes
pkmn.notes = "Saboteur was Mordecai&lsquo;s third captured pokemon, taken while he was on a trip in Unova. Saboteur is a bit of a hot-head as he competes with his allies to take out the most enemies on the battlefield. However he provides the role of support in Mordecai&lsquo;s team as his skills are more suited for battlefield control.Saboteur was a recruiter for the war and got Commando to join in Pokenam. He was relatively weak in battle but was always trying to improve himself. Eventually his hard work paid off and he evolved into a Tentacruel during a battle. Since the war, Saboteur has gotten way into weight-lifting and bodybuilding. But when he&lsquo;s not doing that he&lsquo;s tripping on acid with his best friend Commando. He&lsquo;s a little more recreational with it over the Breloom, as it does interfere with his training. But that doesn&lsquo;t stop it from being fun.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);