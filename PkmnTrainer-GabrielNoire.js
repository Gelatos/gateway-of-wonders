//================================================================================
//                              TRAINER: GABRIEL NOIRE
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "GabrielNoire";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Gabriel";
TrainerList[currentTrainer].fullName = "Gabriel Cross";

// pokedollars
TrainerList[currentTrainer].pokedollars = 0;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/GabrielNoire.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Embarrassed", "");
TrainerList[currentTrainer].quote = "I'm soooo screwed! What is the Chief thinking!?";
TrainerList[currentTrainer].age = "20";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "";
TrainerList[currentTrainer].preferredPokemon = "";
TrainerList[currentTrainer].dislikedPokemon = "";
TrainerList[currentTrainer].skills = "";

// ========================================================
//                   TRAINER ITEMS
// ========================================================



// ========================================================
//                   POKEMON
// ========================================================

// -----------------------------------------------------------------------------
//
//                                 BLSTOISE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Blastoise";
pkmn.species = "Blastoise";
pkmn.speciesNumber = "009";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/FoamBlastoise.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Impulse Cannon";
pkmn.abilityDesc = "Cannon attacks can punch through walls with ease.";

// Basic - Aqua Shot
// ---------------------------------
var move = new PokemonMove ();
move.name = "Aqua Shot";
move.group = groupBasic;
move.type = typeWater;
move.category = catSpecial;
move.power = "60";
move.accuracy = "100";
move.target = "Single";
move.effect = "";
move.description = "A simple attack in which Blastoise fires a single, bullet-shaped, burst of water from one of its cannons. Good for attacking distant foes.";
pkmn.uniqueMoves.push (move);

// Basic - Fortify
// ---------------------------------
var move = new PokemonMove ();
move.name = "Fortify";
move.group = groupBasic;
move.type = typeWater;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Raises Defense one stage";
move.description = "Bastouse buffs up its defenses, planting itself firmly in place.";
pkmn.uniqueMoves.push (move);

// Super - Artillery Spout
// ---------------------------------
var move = new PokemonMove ();
move.name = "Artillery Spout";
move.group = groupSuper;
move.type = typeWater;
move.category = catSpecial;
move.power = "120";
move.accuracy = "100%";
move.target = "Single";
move.effect = "";
move.description = "A much more powerful version of Aqua Shot, this attack launches a water bullet at a much higher pressure. It can easily punch holes in most walls and other defenses.";
pkmn.uniqueMoves.push (move);

// Super - Storm Gatling
// ---------------------------------
var move = new PokemonMove ();
move.name = "Storm Gatling";
move.group = groupSuper;
move.type = typeWater;
move.category = catPhysical;
move.power = "60";
move.accuracy = "100%";
move.target = "Multi";
move.effect = "Multi-Hit, Rapid Fire";
move.description = "Blastoise rapidly fires off multiple shots of water over a wide radius, striking all targets multiple times.";
pkmn.uniqueMoves.push (move);

// Super - Foam Round
// ---------------------------------
var move = new PokemonMove ();
move.name = "Foam Round";
move.group = groupSuper;
move.type = typeWater;
move.category = catOther;
move.power = "-";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Encased (frozen) 66%";
move.description = "Blastoise fires off a special foamy bullet, encasing the target in sticky foam that quickly hardens in the open air. Great for trapping criminal scum.";
pkmn.uniqueMoves.push (move);

// Super - Rain Shell
// ---------------------------------
var move = new PokemonMove ();
move.name = "Rain Shell";
move.group = groupSuper;
move.type = typeWater;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "-";
move.effect = "Causes rain";
move.description = "Blastoise fires a cloudy shot into the sky, causing storm clouds to form and the surrounding area to be drenched with rain.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 DODRIO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Dodrio";
pkmn.species = "Dodrio";
pkmn.speciesNumber = "085";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/1/19/Spr_5b_085_m.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Fast Foot";
pkmn.abilityDesc = "Can be ridden and runs at high speeds. Capable of leaping over or around most obstacles. Great for pursuing a fleeing target.";

// Basic - Tailwind
// ---------------------------------
var move = new PokemonMove ();
move.name = "Tailwind";
move.group = groupBasic;
move.type = typeFlying;
move.category = catOther;
move.power = "-";
move.accuracy = "100%";
move.target = "Self";
move.effect = "Raises speed one level";
move.description = "Whips up a powerful wind that increases the running speed of the user.";
pkmn.uniqueMoves.push (move);

// Basic - Feather Spray
// ---------------------------------
var move = new PokemonMove ();
move.name = "Feather Spray";
move.group = groupBasic;
move.type = typeNormal;
move.category = catSpecial;
move.power = "30";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Lowers target Defense one level";
move.description = "Dodrio hurls a cluster of needle-like, hardened feathers at the opposition, piercing their defenses.";
pkmn.uniqueMoves.push (move);

// Super - Pluck
// ---------------------------------
var move = new PokemonMove ();
move.name = "Pluck";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "30";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Steals held item from target.";
move.description = "Two head hold the foe in place while the third nabs an item the target is holding.";
pkmn.uniqueMoves.push (move);

// Super - Hurricane Dash
// ---------------------------------
var move = new PokemonMove ();
move.name = "Hurricane Dash";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "90";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Raises user speed two levels";
move.description = "Dodrio surges toward the enemy, creating a wind funnel behind itself to propel it forward. Hits hard and raises speed.";
pkmn.uniqueMoves.push (move);

// Super - Sky Walk
// ---------------------------------
var move = new PokemonMove ();
move.name = "Sky Walk";
move.group = groupSuper;
move.type = typeNormal;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "-";
move.effect = "Sky Walking";
move.description = "The Pokemon kicks the air to propel itself skyward. The user gains the ability to walk/run through the air.";
pkmn.uniqueMoves.push (move);

// Super - Dust Twister
// ---------------------------------
var move = new PokemonMove ();
move.name = "Dust Twister";
move.group = groupSuper;
move.type = typeFlying;
move.category = catSpecial;
move.power = "60";
move.accuracy = "100%";
move.target = "Multi-Target";
move.effect = "";
move.description = "The user spins rapidly in place, generating a tornado that hits everything around it and scatters light objects in all directions.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 JOLTIK
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Joltik";
pkmn.species = "Joltik";
pkmn.speciesNumber = "595";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e7/Spr_5b_595.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Tiny";
pkmn.abilityDesc = "Small enough to hide on its trainer&lsquo;s person without being noticed, specifically in his hair.";

// Basic - Shock
// ---------------------------------
var move = new PokemonMove ();
move.name = "Shock";
move.group = groupBasic;
move.type = typeElectric;
move.category = catPhysical;
move.power = "60";
move.accuracy = "100%";
move.target = "Single";
move.effect = "";
move.description = "Joltik latches onto the target and zaps them with an electrical current.";
pkmn.uniqueMoves.push (move);

// Basic - Web Shot
// ---------------------------------
var move = new PokemonMove ();
move.name = "Web Shot";
move.group = groupBasic;
move.type = typeBug;
move.category = catOther;
move.power = "-";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Lowers Target Speed 1 stage";
move.description = "Joltik sprays the target with sticky web, hindering their movement.";
pkmn.uniqueMoves.push (move);

// Super - Lightning Bolt
// ---------------------------------
var move = new PokemonMove ();
move.name = "Lightning Bolt";
move.group = groupSuper;
move.type = typeElectric;
move.category = catSpecial;
move.power = "120";
move.accuracy = "100%";
move.target = "Single";
move.effect = "";
move.description = "Joltik fires a single solid bolt of electricity at a foe, putting all its power behind the attack.";
pkmn.uniqueMoves.push (move);

// Super - Recharge
// ---------------------------------
var move = new PokemonMove ();
move.name = "Recharge";
move.group = groupSuper;
move.type = typeElectric;
move.category = catSpecial;
move.power = "30";
move.accuracy = "100%";
move.target = "Multi-Target";
move.effect = "Raises user&lsquo;s Special Attack and Special Defense one stage";
move.description = "Joltik creates and electric field around itself increasing its abilities. Generating this field will also give a slight shock to all nearby enemies.";
pkmn.uniqueMoves.push (move);

// Super - EMP
// ---------------------------------
var move = new PokemonMove ();
move.name = "EMP";
move.group = groupSuper;
move.type = typeElectric;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "Self";
move.effect = "Electromagnetic Pulse, Flinch electric types 10%";
move.description = "Joltik generates am electromagnetic pulse that disables all electrical devices in the vicinity. Joltik can alter the range of this move anywhere between a 10-50 meter radius around the Pokemon. It will also cause electric type Pokemon in range to flinch on the turn it is used.";
pkmn.uniqueMoves.push (move);

// Super - Silk Net
// ---------------------------------
var move = new PokemonMove ();
move.name = "Silk Net";
move.group = groupSuper;
move.type = typeBug;
move.category = catOther;
move.power = "-";
move.accuracy = "-";
move.target = "-";
move.effect = "Silk Net";
move.description = "Joltik creates a sticky net of webbing, so thin it&lsquo;s invisible unless viewed from up close with good lighting. Anything that touches it becomes stuck to the web. The web can only broken by moves with a base power of 150 or greater, however, cutting/slashing/slicing moves can cut the net as long as they have a base power of 90 or higher. The web can also be burned away with any fire move. Joltik itself can also remove objects from the web but can only disconnect one thing at a time via use of an action if attempted during combat.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

// -----------------------------------------------------------------------------
//
//                                 BOUFFALANT
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Bouffalant";
pkmn.species = "Bouffalant";
pkmn.speciesNumber = "626";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/4f/Spr_5b_626.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 35;

// pokemon ability
pkmn.abilityName = "Sturdy";
pkmn.abilityDesc = "With its powerful headbutts and protective afro, it is capable of stopping any moving object in its tracks, provided it is able to get in front of said object.";

// Basic - Right Horn
// ---------------------------------
var move = new PokemonMove ();
move.name = "Right Horn";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "30";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Raises user attack one stage";
move.description = "Bouffalant gores the foe with its right horn, increasing its rage and attack power.";
pkmn.uniqueMoves.push (move);

// Basic - Left Horn
// ---------------------------------
var move = new PokemonMove ();
move.name = "Left Horn";
move.group = groupBasic;
move.type = typeNormal;
move.category = catPhysical;
move.power = "30";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Lowers target attack one stage";
move.description = "Bouffalant strikes the foe with its left horn, impeding their ability to hit back.";
pkmn.uniqueMoves.push (move);

// Super - Toss
// ---------------------------------
var move = new PokemonMove ();
move.name = "Toss";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "30";
move.accuracy = "100%";
move.target = "1-2";
move.effect = "Toss";
move.description = "Bouffalant lifts a foe or object with it horns and hurls it with great force in a direction if it&lsquo;s choosing. Damage can vary given what the target ends up being thrown into/against/off of. Damage can also be dealt by throwing something at a foe. Damage can be dealt to a max of two foes by throwing one target at another.";
pkmn.uniqueMoves.push (move);

// Super - Mad Surge
// ---------------------------------
var move = new PokemonMove ();
move.name = "Mad Surge";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "120";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Raises user attack 2 stages. Lowers user defense 1 stage.";
move.description = "A mad dash in which the user completely disregards its own safety for an increase in power.";
pkmn.uniqueMoves.push (move);

// Super - Jump Stamp
// ---------------------------------
var move = new PokemonMove ();
move.name = "Jump Stamp";
move.group = groupSuper;
move.type = typeNormal;
move.category = catPhysical;
move.power = "90";
move.accuracy = "100%";
move.target = "Single";
move.effect = "Grounding";
move.description = "The user leaps into the air and stamps down hard on its target with two front hooves. This grounds flying and levitating Pokemon.";
pkmn.uniqueMoves.push (move);

// Super - Trample
// ---------------------------------
var move = new PokemonMove ();
move.name = "Trample";
move.group = groupSuper;
move.type = typeGround;
move.category = catPhysical;
move.power = "120";
move.accuracy = "100%";
move.target = "Single";
move.effect = "";
move.description = "The user brutally stomps its opposition into the ground.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);
