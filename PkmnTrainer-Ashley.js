//================================================================================
//                           TRAINER: ASHLEY WILLIAMS
//================================================================================

// Create the trainer and add them to the Trainer List
currentTrainer = "Ashley";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Ashley";
TrainerList[currentTrainer].fullName = "Ashley Williams";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/AshleyWilliams-1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley3-1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley4-1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley5-1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/AshleyRocket.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley-Exodeus-1.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Ashley-Lioness-1.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet ("AshL").getEmote("Confident", "");
TrainerList[currentTrainer].age = "19";
TrainerList[currentTrainer].gender = "Female";

TrainerList[currentTrainer].quote = "Glamorous and beautiful, superstar, secret agent Ashley Williams has got ya covered.";

TrainerList[currentTrainer].personality = "Ashley is the type of person that sticks to her decisions no matter where they take her, grossly dedicated to whatever she does. However, due to some hard times in her past, she is a bit prickly, blunt, and quick-tempered. She has a tendency to be very preachy as well.";

TrainerList[currentTrainer].preferredPokemon = "Only things that are really cute or show a lot of ability and power. Anyone that has honor is especially appealing. She prefers steel and fighting types.";

TrainerList[currentTrainer].dislikedPokemon = "Anything that looks weak, lazy, immoral, or mystical. Ghost and Poison types are easily her least liked types.";

TrainerList[currentTrainer].skills = "Ashley is only a trainer because she likes to spar. She&lsquo;s an excellent martial artist and has training in a variety of weapons so she can defend herself easily. She&lsquo;s also an excellent chef, keen into history, has basic engineering understanding, and overall tends to be resourceful having little bits of knowledge here and there, likely formally educated.";

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
item.name = "Guaze Pads";
item.type = "Medical Supplies";
item.quantity = 24;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Bandages";
item.type = "Medical Supplies";
item.quantity = 20;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Antiseptic Pads";
item.type = "Medical Supplies";
item.quantity = 15;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Painkillers";
item.type = "Medical Supplies";
item.quantity = 200;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tape";
item.type = "Medical Supplies";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Tweezers";
item.type = "Medical Supplies";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Scissors";
item.type = "Medical Supplies";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);


var item = new Item ();
item.name = "Rayner&lsquo;s pokeballs";
item.type = "Exodeus Tech";
item.quantity = 6;
item.description = "";
TrainerList[currentTrainer].items.push (item);


var item = new Item ();
item.name = "Sunglasses";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);


var item = new Item ();
item.name = "Flashlight";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);


var item = new Item ();
item.name = "Perfume Bottle - Spore";
item.type = "Common";
item.quantity = 1;
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Medicine
// ------------------------------------------------
var item = new Item ();
item.name = "Paralyze Heal";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/a/ab/Bag_Paralyze_Heal_Sprite.png";
item.description = "Heals paralysis in a pokemon.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Heal Pwdr";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/7/77/Bag_Heal_Powder_Sprite.png";
item.description = "Heals all status effects on a pokemon.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Energy Pwdr";
item.type = "Medicine";
item.quantity = 1;
item.image = "http://cdn.bulbagarden.net/upload/3/3f/Bag_Energy_Powder_Sprite.png";
item.description = "Restores 50 health to a pokemon.";
TrainerList[currentTrainer].items.push (item);

// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
//
//                                 CHAIN (Gallade)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Chain";
pkmn.species = "Gallade";
pkmn.speciesNumber = "475";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/ChainGallade.gif";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 41;

// pokemon ability
pkmn.abilityName = "Telepathy";
pkmn.abilityDesc = "This pokemon can read the thoughts of others and communicate with them through thought.";

// notes
pkmn.notes = "Chain was Ashley&lsquo;s sixth captured pokemon, however it had been entirely a mistake. Chain is one who often gets carried away by his imagination, inventing grandiose dilemmas out of the basic reality before him. He&lsquo;s very aware that it&lsquo;s all fiction he has made in his head, but once a story has been strung it&lsquo;s difficult for him to lose character as it is what motivates him to carry on. <br><br>As a Ralts, Chain traveled the region with only a stick in one hand and wooden shield in the other. He traveled around trying to save injured or bullied damsels from devious tyrants, seeing his journey as a quest for redemption. For what he needed redeeming is a mystery, one that only he or rather his imagination knows. He followed Ashley after seeing her dragon, Carpet, as his next target. Lithe being the damsel that required saving who appeared to have been taken captive by the vile water wyrm. Upon defeating Carpet while Ashley and Lithe were away, he was then defeated by the one he sought to save, misinterpreting the entire situation. He now sees Lithe as an adversary, while Ashley the vile Dragon Lady that tames magical beasts and serves Lithe as bodyguard. Since then he&lsquo;s ruined the bug festival in Daysteam, destroyed torches in the cave path through the mountains, and saved Ashley and her pokemon from a losing battle with some ghost pokemon. He&lsquo;s also evolved into a Gallade, learned some new skills by accident, and had his heart broken when his friend destroyed his greatest companion of his life. ";

// Auraweave Armor
// ---------------------------------
var move = new PokemonMove ();
move.name = "Auraweave Armor";
move.type = typeNormal;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Changes the type of all Physical Attacks to the type of the auraweave. " +
    "Also adds a chance to inflict a status effect based on the type selected.<br>";
move.description =  "The user concentrates the power of aura into a cloak around them. " +
    "The aura is imbued with an elemental property, causing the aura to change shape and take on " +
    "the properties of the element that is imbued for example the aura begins to flicker in waves " +
    "like fire or spark like lightning. Once an aura takes effect, any physical attack made while " +
    "the aura is active takes on the typing of the aura. The aura also grants a chance to inflict " +
    "a status effect on opponents depending on the type chosen.<br><br>" +
    "<b>Auraweave Types</b><br>" +
    "<img src=\\\"" + typeFire +  "\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" >" +
    "<br>Causes the aura to flicker like fire and become slightly red. Physical attacks have a " +
    "33% chance to burn the target.<br>" +
    "<img src=\\\"" + typeIce + "\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" >" + 
    "<br>Causes the aura to sparkle like snow and glow white. Physical attacks have a 33% chance " +
    "to freeze the target.<br>" +
    "<img src=\\\"" + typeFighting + "\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" >" +
    "<br>Causes the aura to glow a stronger and more vivid blue. Physical attacks have a " +
    "33% chance to critical hit.<br>" +
    "<img src=\\\"" +typeRock +  "\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" >" +
    "<br>Causes the aura to break off in crystals that disappear within seconds. Physical attacks " +
    "have a 33% chance to trap the target.";
pkmn.uniqueMoves.push (move);
             
// Skyward Sword
// ---------------------------------
var move = new PokemonMove ();
move.name = "Skyward Sword";
move.type = typeFighting;
move.category = catPhysical;
move.power = "90";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Creates four aura blades, each of a different type.";
move.description = "<b>Special</b><br>Must have an aura weave active." + 
    "The auraweave armor&lsquo;s entire mass of aura concentrates on the user&lsquo;s arm " +
    "and extends like a blade. The sword is raised high and splits creating four swords in total, " + 
    "each of a different type from available auraweaves types. Blades that are not held " + 
    "float behind the user&lsquo;s back, for later use. Each blade can be used for future use, " +
    "however each blade fades once used. Using a new Auraweave Armor destroys all " + 
    "unused blades for the aura is needed to maintain the armor.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 LITHE (Mienfoo)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Lithe";
pkmn.species = "Mienfoo";
pkmn.speciesNumber = "619";
pkmn.gender = "Female";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Lithe-1.gif";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 41;

// pokemon ability
pkmn.abilityName = "Danger Sense";
pkmn.abilityDesc = "Due to a strong extrasensory ability, the pokemon can sense the presence of those with hostile intentions who are nearby.";

// notes
pkmn.notes = "Lithe is Ashley&lsquo;s first caught pokemon since joining the Resistance. Lithe is a fierce fighter, stoic, and eager to prove her fighting skills against anyone. She considers Ashley a rival after Ashley alone gave Lithe a run for her money in a duel ending in her capture. She trains so that she can one day beat Ashley on her own.<br><br> Lithe has gained a rival of sorts in Chain  since he had saved her during a time when she couldn&lsquo;t defeat some ghosts. She sees Chain as immature and naive, however both traits can sometimes be seen as charming as well. <br><br>Lithe has picked up a black scarf while shopping that she`s grown quite attached to after breaking the weapon that Chain had given to her as a gift.";

// Dark Channel
// ---------------------------------
var move = new PokemonMove ();
move.name = "Dark Channel";
move.type = typeDark;
move.category = catSpecial;
move.power = "60";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Lowers User&lsquo;s Defence one stage.<br> Has a 33% chance to inflict Partially Trapped Status.";
move.description = "The user creates aura in their hand and adds shadow energy to the force. " +
    "The force is then thrown at the target, plaguing them with a persistent, damaging dark field."
pkmn.uniqueMoves.push (move);

// Adrenaline Rush
// ---------------------------------
var move = new PokemonMove ();
move.name = "Adrenaline Rush";
move.type = typeFighting;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "In the same action, the user may attack two additional times, each attack at 75% power.";
move.description = "The user gains a burst of energy as their attacks gracefully chain into each other " +
    "in one fluid motion." +
    "<br><br><b>Restrictions</b><br>" +
    "Attacks used in combination with this attack must be physical attacks with 100% accuracy " +
    "and are single target.<br>One attack used in this combination must have no additional effects " + 
    "associated with it. It must be an attack that does pure damage. If both attacks have " + 
    "additional effects, one of the two attacks will be reduced to only doing base damage and the " + 
    "additional effects will be ignored.<br>Every attack made must be done in close proximity. " + 
    "Attacking two different enemies that are beside each other is okay, attack two enemies that " + 
    "are apart is not.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 SNICKERS (Excadrill)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Snickers";
pkmn.species = "Excadrill";
pkmn.speciesNumber = "530";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Snickers.gif";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 43;

// pokemon ability
pkmn.abilityName = "Core Drill";
pkmn.abilityDesc = "With a drill that can pierce the heavens, this pokemon can bore a hole " +
        "into anything as strong as steel.";

// notes
pkmn.notes = "Snickers is Ashley&lsquo;s second caught pokemon. Snickers is always looking for a laugh and to have fun. However his perception of fun is often violent. He met Ashley after throwing rocks at her and Lithe, and to their annoyance was beaten to an inch of life. Still, he&lsquo;s not resentful, that was legitimately fun and he&lsquo;s eager to put a smile on anyone he meets. Although, usually they pass out after all the fun. Still, that&lsquo;s a victory in of itself, right?<br><br>Snickers started in Ashley&lsquo;s group as a Drillbur who enjoyed playing. When he evolved, he was worried that he&lsquo;d have to act more grown up but resolved that this was a terrible idea so he continued carrying on his ways.<br><br>He has gained a friend in Isaac&lsquo;s Tomp as the two go on silly adventures and wage in competition. ";

// X-Scissor
// ---------------------------------
var move = new PokemonMove ();
move.name = "X-Scissor";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-xy/x-scissor.shtml";
move.type = typeBug;

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 CARPET (Gyarados)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Carpet";
pkmn.species = "Gyarados";
pkmn.speciesNumber = "130";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Carpet.gif";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Dragon Flight";
pkmn.abilityDesc = "This pokemon can fly at high speeds with travelers that rest on its back.";

// notes
pkmn.notes = "Carpet started out as a measly Magikarp that Ashley caught while on a fishing trip and became her third caught pokemon. The poor thing has since been abused by Ashley as she used the thing on land where it couldn&lsquo;t swim and swung it like a weapon when she had no pokemon. It was during one of these &lsquo;fights&lsquo; that the Magikarp evolved. With a new superior form it began to attack its master only to realize that she was still more than a match for him. The beating was so severe the pokemon now quivers when it sees his master, obeys her every word, and tries his best not to cry as it would only anger Ashley. Since then, the Gyarados was given the name Carpet as it now provides transportation services for Ashley and her friends. ";

// Draconic Excellence
// ---------------------------------
var move = new PokemonMove ();
move.name = "Draconic Excellence";
move.type = typeDragon;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Replaces the flying type of the user with the dragon type.<br>" +
    "Replaces the user&lsquo;s ability with Levitate.";
move.description = "The user shows its true draconic heritage and releases it all at once as it flies " +
    "into a fury. Dragon type attacks become more powerful and dragon resistances are " +
    "applied to the user. <br><br>Because of the increased fortitude gained from the " +
    "dragon type allows the user to fly greater distances as well. The user can fly to " +
    "a nearby town it knows of at high speeds by controlling the winds to propel him " +
    "at a greater speed than its own speed could handle otherwise. Because this speed " +
    "is so incredible, it is difficult to use outside of long distance travel for " +
    "maneuverability is greatly diminished. This ability also has the negative effect " +
    "of using up the power up and preventing its use for an hour long recovery period. " +
    "This recovery period is only in effect if the power is used for long distance flight.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 NOIRE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Noire";
pkmn.species = "Pangoro";
pkmn.speciesNumber = "675";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Noire-1.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 41;

// pokemon ability
pkmn.abilityName = "Intimidating Presence";
pkmn.abilityDesc = "This pokemon&lsquo;s frightful presence can cause opponents of weaker stature to flee in terror.";

// notes
pkmn.notes = "His true name is Hakuma, a masterful swordsman who traveled the land removing evil where he finds it. In more recent years he has decided to take up teaching those who wish to learn his swordsmanship to help punish evil wherever they find it. He considers himself retired from fighting however with his capture he finds himself coming out of retirement with a renewed vigor. ";

// add the pokemon to the current trainer&lsquo;s pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 SPIKE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Spike";
pkmn.species = "Chesnaught";
pkmn.speciesNumber = "652";
pkmn.gender = "Male";
pkmn.image = "http://play.pokemonshowdown.com/sprites/bw/chesnaught.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Guardian";
pkmn.abilityDesc = "This pokemon&lsquo;s sturdy defenses and defense oriented personality lets it take hits for allies.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 HERA (Heracross)
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Hera";
pkmn.species = "Heracross";
pkmn.speciesNumber = "214";
pkmn.gender = "Female";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Hera-1.gif";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 38;

// pokemon ability
pkmn.abilityName = "Herculean Might";
pkmn.abilityDesc = "The user can toss anything up to three times her size with her horn.";

pkmn.notes = "Hera is Ashley‘s first pokemon she received when being released from Exodeus. The two took to each other immediately, each one supporting the other in fights. Hera is very respectful and stoic, however has shown a motherly side when taking care of her supposed egg. She seems to have a thing for bad boys, in particular Tony‘s Fury.";

// Launch
// ---------------------------------
var move = new PokemonMove ();
move.name = "Launch";
move.type = typeNormal;
move.category = catPhysical;
move.power = "60";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Causes Float on the target.";
move.description = "The user digs into the ground and using powerful arms or horn " +
    "and launches the target high into the air, preventing them from reacting to a followup attack." +
    "<br><br>" +
    "<b>Float</b><br>" + 
    "Float causes the target to fly in the air momentarily. Because the target is in the air, " +
    "it is impossible to get footing and thus difficult to dodge attacks. Unless the target of " +
	"float can resist the attack, the next attack against that target is guaranteed to hit if " +
	"their accuracy is 100%, otherwise it raises by one stage. Due to being in the air, a target " +
    "of float is immune to ground type attacks. Float ends once the target of float is hit by " +
    "any attack or once they are capable of reacting to attacks (defined as the person who " +
    "controls a floated character posts).";
pkmn.uniqueMoves.push (move);

// Secret Power
// ---------------------------------
var move = new PokemonMove ();
move.name = "Secret Power";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-xy/secretpower.shtml";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 PATCHY
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Patchy";
pkmn.species = "Pachirisu";
pkmn.speciesNumber = "417";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/4b/Spr_5b_417_m.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Inspiration";
pkmn.abilityDesc = "This pokemon&lsquo;s ability to win tournaments and also sheer worthlessness can inspire anyone. Being in it&lsquo;s presence inspires hope and reason to get you through the toughest problems.";

// notes
pkmn.notes = "Patchy is Ashley&lsquo;s eighth captured pokemon and is just cute and stuff. It hasn&lsquo;t really done anything but it was in Ashley&lsquo;s party for a brief time to never be used. Ashley likes it because it&lsquo;s cute. There&lsquo;s seriously no other reason for it to be in the party. Patchy will probably never realize this either as it&lsquo;s kind of dumb.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 GOBI
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gobi";
pkmn.species = "Larvitar";
pkmn.speciesNumber = "246";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/1e/Spr_4d_246.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 32;

// pokemon ability
pkmn.abilityName = "Desert Storm";
pkmn.abilityDesc = "This pokemon can use sandstorm without using an action.";

// notes
pkmn.notes = "Gobi is Ashley&lsquo;s ninth pokemon who joined her team when she was digging into the Exodeus base in the Nessis Desert. He&lsquo;s a pacifist who&lsquo;s decided to listen to Ashley&lsquo;s directives in order to prevent another beating. He doesn&lsquo;t really understand how to fight or why anyone would want to. Before being captured he was a lobbyist for global veganism, deciding that a diet of berries and vegetables was preferable to killing each other. Now that he&lsquo;s been taken away from his group, he wonders if this may be an opportunity to spread his views to the rest of the world";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 CHOU
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Chou";
pkmn.species = "Chinchou";
pkmn.speciesNumber = "170";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/be/170.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Lightbulb";
pkmn.abilityDesc = "This pokemon can glow, illuminating darkness up to 30 ft. away.";

// notes
pkmn.notes = "Chou was Ashley&lsquo;s third capture. It hasn&lsquo;t seen much activity as Ashley boxed it almost as soon as she caught a full team. It&lsquo;s jealous of Jason&lsquo;s Tera as it was the first to enter the story and thus Chou is now seen as the sloppy clone. He seeks a method to break away from this type casting, but sadly no director is eager to give him a chance. Maybe one day when he gains enough levels to evolve into a Lanturn will he be able to see the light of day and overcome his dilemma. Maybe. ";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 DREAMER
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dreamer";
pkmn.species = "Parasect";
pkmn.speciesNumber = "047";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/b/b0/047.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Concentrated Spray";
pkmn.abilityDesc = "This pokemon can use spore and powder moves so accurately that it can fill bottles and hit only specific targets.";

// notes
pkmn.notes = "Dreamer was Ashley&lsquo;s fifth captured pokemon. The parasect has since been used to gather spore for Ashley&lsquo;s perfume bottle. The thing is deathly afraid of battle and cowers when it begins while releasing spores to maintain safety. It was due to this cowardice that awarded him a position in the box. ";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 GUNNER
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Gunner";
pkmn.species = "Horsea";
pkmn.speciesNumber = "116";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/d/d1/116.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Sniper";
pkmn.abilityDesc = "This pokemon can hit targets from great distance with incredible accuracy with aura, pulse, and gun moves.";

// notes
pkmn.notes = "Gunner was Ashley&lsquo;s fourth capture. The pokemon is resentful of Ashley as it did not wish to be captured and does not wish to be ordered around. To add insult to injury, Ashley uses the Horsea like a gun and redirects her attacks at Ashley&lsquo;s foes. But to be fair, Gunner is typically trying to hit Ashley when attacking. Despite having the name Gunner, it&lsquo;s never been called as such as Ashley doesn&lsquo;t name her pokemon until long after its been caught.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
// 
//                                 FANGS
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Fangs";
pkmn.species = "Trapinch";
pkmn.speciesNumber = "328";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a6/328.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Arena Trap";
pkmn.abilityDesc = "The opponent cannot run nor switch. Flying-type Pokémon and Pokémon with the Levitate special ability are unaffected. If this Pokémon switches, the opponent is still trapped for that turn. The opponent may still switch by using Baton Pass.";

// notes
pkmn.notes = "Fangs was Ashley's seventh captured pokemon. He first arrived by trying to eat Ashley but was promptly beaten up by his prey. Before being captured, Fangs was a hater of pokemon pacifism, a recent movement in the desert to persuade pokemon to no longer eat each other. He fought back by eating pokemon pacifists. He's since lived in the box where his traditionalist views could be ignored.";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

