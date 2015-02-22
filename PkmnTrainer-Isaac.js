//================================================================================
//                              TRAINER: ISAAC
//================================================================================

// Create the trainer and add them to the Trainer List
var currentTrainer = "Isaac";
TrainerList[currentTrainer] = new Trainer ();

// Name
TrainerList[currentTrainer].name = "Isaac";
TrainerList[currentTrainer].fullName = "Isaac Watt";

// pokedollars
TrainerList[currentTrainer].pokedollars = 650;

// images
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Isaac2.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Isaac3.png");
TrainerList[currentTrainer].images.push ("http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Isaac-Rocket.png");

// profile stats
TrainerList[currentTrainer].emote = getEmoteSet (currentTrainer).getEmote("Sneer", "");
TrainerList[currentTrainer].quote = "Tch, stuck with such dead weight";
TrainerList[currentTrainer].age = "16";
TrainerList[currentTrainer].gender = "Male";
TrainerList[currentTrainer].personality = "Let's be blunt, Isaac is an arrogant jerk. He thinks he's better then most people and is blunt if they are not. To trainers he sees as equals, he often gives them... some respect, but still looks down on them. His bluntness leads him to speaking his mind to whoever he sees, often leading to the conflicts with others. While he does have a soft spot at times, you're going to have to dig deep to reach it.<br /><br />He also has an ulterior motive for everything, if he's comforting you it's because you're annoying him. If he's training you, it's because he feels like you'll hold him back. To put it simply, he's doing everything for himself and while that doesn't mean he's willing to hurt random people to put himself forward, he is always looking out for number 1. The only thing he seems to selflessly do is help his pokemon, but that seems to be out of a mutual partnership then anything in his eyes.<br /><br />Also, he is always up for a pokemon battle, any challenge for him works out perfectly. He will never reject a battle and ends up disappointed if he doesn't have one at times, even in matters of life and death. <br /><br />Also, he's asexual and does not get that kind of stuff. At all ";
TrainerList[currentTrainer].preferredPokemon = "Pokemon that are powerful in battles, or will become powerful in battles once evolved, anything else is a bonus.";
TrainerList[currentTrainer].dislikedPokemon = "Pokemon which have lesser abilitiess in fighting. ";
TrainerList[currentTrainer].skills = "Isaac is a powerful trainer in his own right, often winning his battles by overpowering his enemies with overwhelming force, or at least that's what his game plan usually is. He has the heaviest training regime on the team often hoping to improve himself and while not as strong as Ashley, is certainly one of the physically strongest members of the team. ";

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
item.name = "Mega Ring";
item.type = "Common";
item.quantity = 1;
item.image = "";
item.description = "Allows the user to tap into the power of mega evolution";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Lucarionite";
item.type = "Hold Items";
item.quantity = 1;
item.image = "";
item.description = "<img src='http://cdn.bulbagarden.net/upload/5/53/Dream_Lucarionite_Sprite.png' />" +
    "<br />Allows Lucario to mega evolve.";
TrainerList[currentTrainer].items.push (item);

var item = new Item ();
item.name = "Mawilite";
item.type = "Hold Items";
item.quantity = 1;
item.image = "";
item.description = "<img src='http://cdn.bulbagarden.net/upload/f/fe/Dream_Mawilite_Sprite.png' />" +
    "<br />Allows Lucario to mega evolve.";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   Badges
// ------------------------------------------------
var item = new Item ();
item.name = "Gear Badge";
item.type = "Badge";
item.quantity = 1;
item.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/GearBadge.png";
item.description = "";
TrainerList[currentTrainer].items.push (item);

// ------------------------------------------------
//                   TMs
// ------------------------------------------------

var item = new Item ();
item.name = "Secret Power";
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
//                                 LUCARIO
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Lucario";
pkmn.species = "Lucario";
pkmn.speciesNumber = "448";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/8/80/Spr_4p_448.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 47;

// pokemon ability
pkmn.abilityName = "Aura";
pkmn.abilityDesc = "Lucario can look at others auras to find their location, behavior, etc. I think we know how I do this by now.";

// notes
pkmn.notes = "";

// Fallen‘s Sake
// ---------------------------------
var move = new PokemonMove ();
move.name = "Fallen‘s Sake";
move.type = typeFighting;
move.category = catPhysical;
move.power = "Special";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Base Power is equal to 35 x (Amount of Pokémon fainted)";
move.description = "Riolu feels the aura of his fallen comrades and realize that he‘s fighting for their stake, he uses this to unleash his hidden powers and take on the enemy in the form of a fierce punch. The attack looks like the Falcon punch from the anime, just saying.";
pkmn.uniqueMoves.push (move);

// Vital Strain
// ---------------------------------
var move = new PokemonMove ();
move.name = "Vital Strain";
move.type = typeFighting;
move.category = catOther;
move.power = "Special";
move.accuracy = "-";
move.target = "Self";
move.effect = "The user increases the power of its next move by 4X, however it leaves the user incapable of attacking in the next turn and doubles damage taken from attackers during this time. Does not affect the action limit for other Pokémon.";
move.description = "Riolu concentrates its power to an unhealthy limit and unleashes its power. Once it occurs, Riolu is left weak and vulnerable. ";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SHELGON
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Shelgon";
pkmn.species = "Shelgon";
pkmn.speciesNumber = "372";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/3/3b/372.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 46;

// pokemon ability
pkmn.abilityName = "Flight";
pkmn.abilityDesc = "He's an aerial traveler that Isaac can ride over long distances, such as bodies of water.";

// notes
pkmn.notes = "";

// Ego‘s Sake
// ---------------------------------
var move = new PokemonMove ();
move.name = "Ego‘s Sake";
move.type = typeDragon;
move.category = catPhysical;
move.power = "Special";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "Base Power is equal to 25 x (Amount of Pokémon not fainted)";
move.description = "Attack Description: Shelgon takes an ego trip and decides no one else is going to take on this enemy, as his pride is on the line. For every Pokémon that is left in the party, the more inclined he feels to end the battle before they show up. The attack itself is a fierce headbutt of doom.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ARCANINE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Arcanine";
pkmn.species = "Arcanine";
pkmn.speciesNumber = "059";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/a/a8/Spr_4d_059.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 40;

// pokemon ability
pkmn.abilityName = "Extreme Speedin";
pkmn.abilityDesc = "Arcanine can use his immense speed to make quick jumps an escapes. Fast land mobility I guess.";

// notes
pkmn.notes = "";

// Bullet Charge
// ---------------------------------
var move = new PokemonMove ();
move.name = "Bullet Charge";
move.type = typeFire;
move.category = catPhysical;
move.power = "120";
move.accuracy = "100%";
move.target = "Single Target";
move.effect = "The user takes 25% of the damage as recoil.Has a 33% chance to Burn the target.";
move.description = "Arcanine uses flamethrower in front of him while also running into it in an extremespeed like fashion. The result is a giant flaming bullet that leads him to being damaged while also burning the enemy.";
pkmn.uniqueMoves.push (move);

// Flame Plume
// ---------------------------------
var move = new PokemonMove ();
move.name = "Flame Plume";
move.type = typeFire;
move.category = catSpecial;
move.power = "100";
move.accuracy = "100%";
move.target = "Multiple Target";
move.effect = "Has a 33% chance to Burn the target.";
move.description = "Isaac got sick of being wrong and had Arcanine actually learn this weird move. It‘s a stronger version of Flame Burst and twice as manly. Perfect for taking out hoards or cheating Flash asshole.";
pkmn.uniqueMoves.push (move);

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SCYTHER
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Scyther";
pkmn.species = "Scyther";
pkmn.speciesNumber = "123";
pkmn.gender = "Male";
pkmn.image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/Scyther-Isaac.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 37;

// pokemon ability
pkmn.abilityName = "Technician";
pkmn.abilityDesc = "Powers up the Pokémon‘s weaker moves.";

// notes
pkmn.notes = "";

// U-turn
// ---------------------------------
var move = new PokemonMove ();
move.name = "U-turn";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-xy/u-turn.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MARSHTOMP
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Marshtomp";
pkmn.species = "Marshtomp";
pkmn.speciesNumber = "259";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/e/e7/Spr_5b_259_s.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 37;

// pokemon ability
pkmn.abilityName = "The Tomp";
pkmn.abilityDesc = "Can slightly bend reality in vague ways I'm not too sure I just kinda improv it and see what you let me get away with.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 QUILAVA
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Quilava";
pkmn.species = "Quilava";
pkmn.speciesNumber = "156";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/f/fd/Spr_5b_156.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Spanish Night Light";
pkmn.abilityDesc = "Portable light and mild spanish accent.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 FRILLISH
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Frillish";
pkmn.species = "Frillish";
pkmn.speciesNumber = "592";
pkmn.gender = "Female";
pkmn.image = "http://cdn.bulbagarden.net/upload/9/91/592.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "Deep seas";
pkmn.abilityDesc = "The ability to drown others on water surface battles.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 MANKEY
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Mankey";
pkmn.species = "Mankey";
pkmn.speciesNumber = "056";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/4/40/056.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "623C";
pkmn.abilityDesc = "Mankey does an uppercut that can break large walls with his monkey fists and hit pokemon attacking from the air";

// notes
pkmn.notes = "";

// Brick Break
// ---------------------------------
var move = new PokemonMove ();
move.name = "Brick Break";
move.simple = true;
move.url = "http://www.serebii.net/attackdex-xy/brickbreak.shtml";
move.type = typeNormal

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 SKARMORY
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Skarmory";
pkmn.species = "Skarmory";
pkmn.speciesNumber = "227";
pkmn.gender = "Male";
pkmn.image = "http://cdn.bulbagarden.net/upload/5/54/Spr_4d_227.png";

// pokemon daily stats
pkmn.party = false;
pkmn.level = 31;

// pokemon ability
pkmn.abilityName = "U Mad Brah?";
pkmn.abilityDesc = "Skarmory can go on a rampage and hit two pokemon with the same attack ONCE per battle.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);


// -----------------------------------------------------------------------------
// 
//                                 ZANGOOSE
//
// -----------------------------------------------------------------------------
var pkmn = new Pokemon();

// pokemon intrinsic stats
pkmn.nickname = "Zangoose";
pkmn.species = "Zangoose";
pkmn.speciesNumber = "335";
pkmn.gender = "Male";
pkmn.image = "http://i57.tinypic.com/2i102le.png";

// pokemon daily stats
pkmn.party = true;
pkmn.level = 32;

// pokemon ability
pkmn.abilityName = "Respect Dem Elders";
pkmn.abilityDesc = "Zangoose can use his old age to seem feeble and drive attackers away from him.";

// notes
pkmn.notes = "";

// add the pokemon to the current trainer's pokemon list
TrainerList[currentTrainer].pokemon.push (pkmn);

