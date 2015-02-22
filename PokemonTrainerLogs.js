//================================================================================
// ARRAY SEARCH
//================================================================================
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			if (this[i] === obj) {
				return i;
			}
		}
		return -1;
	}
}

// ================================================================================
// 2D ARRAY SEARCH
// ================================================================================
function Array2DSearch(arrayDict, searchString) {
	// determine the variables for the formatter
	var output = "";

	for (var z = 0; z < arrayDict.length; z++) {
		if (arrayDict[z].indexOf(searchString) !== -1) {
			output = arrayDict[z][1];
		}
	}

	return output;
}

// ================================================================================
// 2D ARRAY SEARCH KEY
// ================================================================================
function Array2DSearchKey(arrayDict, key) {
	// search for the key
	for (var z = 0; z < arrayDict.length; z++) {
		if (arrayDict[z].indexOf(key) !== -1) {
			return true;
		}
	}

	return false;
}

var preventTooltipHiding = false;
var toolTipText = "";
//=============================================================
// SHOW TOOL TIP:
// Shows the tooltip box
//=============================================================
function showToolTip(str) {
    toolTipText = str;
    if (!preventTooltipHiding) {
        document.getElementById('bubble_tooltip').style.display = 'block';
        document.getElementById('bubble_tooltip_content').innerHTML = toolTipText;
    }
}

//=============================================================
// HIDE TOOL TIP:
// hides the tooltip box
//=============================================================
function hideToolTip() {
    toolTipText = "";
    if (!preventTooltipHiding) {
        document.getElementById('bubble_tooltip').style.display = 'none';
        document.getElementById('bubble_tooltip_content').innerHTML = "";
    }
}

//=============================================================
// REMOVE TOOL TIP:
// rewmoves the tooltip box
//=============================================================
function removeToolTip() {
    preventTooltipHiding = !preventTooltipHiding;
    if (!preventTooltipHiding) {
        if (toolTipText == "") {
            hideToolTip();
        } else {
            showToolTip(toolTipText);
            preventTooltipHiding = !preventTooltipHiding;
        }
    }
}

// ================================================================================
// Replace special characters
// ================================================================================
function replaceSpecialCharacters(str) {
    if (str != "undefined" && str != "" && str != null) {
        str = str.replace(/\'/gi, "&lsquo;");
        str = str.replace(/\xE9/gi, "&eacute;");
        str = str.replace(/\`/gi, "&lsquo;");
    }
    return str;
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function padZeros(num, size) {
    var s = num+"";
    while (s.length < size) {
        s = "0" + s;
    }
    return s;
}

//================================================================================
// Image Variables
//================================================================================
var typeNormal = "http://cdn.bulbagarden.net/upload/3/39/NormalIC_Big.png";
var typeFire = "http://cdn.bulbagarden.net/upload/2/26/FireIC_Big.png";
var typeWater = "http://cdn.bulbagarden.net/upload/5/56/WaterIC_Big.png";
var typeElectric = "http://cdn.bulbagarden.net/upload/4/4a/ElectricIC_Big.png";
var typeGrass = "http://cdn.bulbagarden.net/upload/7/74/GrassIC_Big.png";
var typeIce = "http://cdn.bulbagarden.net/upload/6/6f/IceIC_Big.png";
var typeFighting = "http://cdn.bulbagarden.net/upload/6/67/FightingIC_Big.png";
var typePoison = "http://cdn.bulbagarden.net/upload/3/3d/PoisonIC_Big.png";
var typeGround = "http://cdn.bulbagarden.net/upload/8/8f/GroundIC_Big.png";
var typeFlying = "http://cdn.bulbagarden.net/upload/c/cb/FlyingIC_Big.png";
var typePsychic = "http://cdn.bulbagarden.net/upload/6/60/PsychicIC_Big.png";
var typeBug = "http://cdn.bulbagarden.net/upload/c/c8/BugIC_Big.png";
var typeRock = "http://cdn.bulbagarden.net/upload/c/ce/RockIC_Big.png";
var typeGhost = "http://cdn.bulbagarden.net/upload/7/73/GhostIC_Big.png";
var typeDragon = "http://cdn.bulbagarden.net/upload/4/48/DragonIC_Big.png";
var typeDark = "http://cdn.bulbagarden.net/upload/5/56/DarkIC_Big.png";
var typeSteel = "http://cdn.bulbagarden.net/upload/d/d4/SteelIC_Big.png";
var typeFairy = "http://cdn.bulbagarden.net/upload/7/73/FairyIC_Big.png";

var catPhysical = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/physical.png";
var catSpecial = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/special.png";
var catOther = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/other.png";

function parseType (name) {
    if (name == "Normal") {
        return typeNormal;
    } else if (name == "Fire") {
        return typeFire;
    } else if (name == "Water") {
        return typeWater;
    } else if (name == "Electric") {
        return typeElectric;
    } else if (name == "Grass") {
        return typeGrass;
    } else if (name == "Ice") {
        return typeIce;
    } else if (name == "Fighting") {
        return typeFighting;
    } else if (name == "Poison") {
        return typePoison;
    } else if (name == "Ground") {
        return typeGround;
    } else if (name == "Flying") {
        return typeFlying;
    } else if (name == "Psychic") {
        return typePsychic;
    } else if (name == "Bug") {
        return typeBug;
    } else if (name == "Rock") {
        return typeRock;
    } else if (name == "Ghost") {
        return typeGhost;
    } else if (name == "Dragon") {
        return typeDragon;
    } else if (name == "Dark") {
        return typeDark;
    } else if (name == "Steel") {
        return typeSteel;
    } else if (name == "Fairy") {
        return typeFairy;
    } else {
        return typeNormal;
    }
}

//================================================================================
// Dictionary Begin
//================================================================================
var TrainerList = [];

function Trainer () {
    
    // base statistics
    this.name = "";
    this.pokemon = [];
    this.items = [];
    this.pokedollars = 0;
    
    // profile stats
    this.fullName = "";
    this.emote = "Serious";
    this.quote = "";
    this.images = [];
    this.age = "";
    this.gender = "";
    this.personality = "";
    this.preferredPokemon = "";
    this.dislikedPokemon = "";
    this.skills = "";
    
};

function Pokemon () {
    this.nickname = "";
    this.species = "";
    this.speciesNumber = "";
    this.party = false;
    this.level = 0;
    this.gender = "";
    this.image = "";
    this.abilityName = "Undefined";
    this.abilityDesc = "";
    this.holdItemName = "None";
    this.holdItemDesc = "";
    this.notes = "";
    this.uniqueMoves = [];
    
    this.url = "http://www.serebii.net/pokedex-xy/" + this.speciesNumber + ".shtml";
};

function PokemonMove () {
    this.simple = false;
    this.name = "";
    this.type = typeNormal;
    this.category = catPhysical;
    this.power = "";
    this.accuracy = "";
    this.target = "";
    this.effect = "";
    this.description = "";
    this.url = "";
};

function Item () {
    this.name = "";
    this.type = "";
    this.quantity = 0;
    this.image = "";
    this.description = "";
};

// ================================================================================
// SHOW MENU ITEM
// ================================================================================
function show_menu_item(menuID, menuClassName, selectedID) {
    // find the menus
    var postText = document.getElementById(menuID).getElementsByTagName('div');
    var incrementer = -1;
    while (incrementer < postText.length) {
        incrementer++;
        if (typeof postText[incrementer] != 'undefined') {
            if (typeof postText[incrementer].className != 'undefined') {
                if (postText[incrementer].className.indexOf(menuClassName) !== -1) {
                    if (postText[incrementer].id == selectedID) {
                        // show the menu
                        $(postText[incrementer]).delay("fast").fadeIn();
                    } else {
                        // hide the menu
                        $(postText[incrementer]).fadeOut("fast");
                    }
                }
            }
        }
    }
};

// ================================================================================
// SET POKEMON STATS
// ================================================================================
function setPokemonStats(pokemonName) {
    var output = "";
    
    // get the pokemon sats
    var pokemonStats = [];
    for (var i = 0; i < pokemonStatDictionary.length; i++) {
        if (pokemonStatDictionary[i][1] == pokemonName) {
            pokemonStats = pokemonStatDictionary[i];
            break;
        }
    }
    
    output += "<b style=\\\"font-size: 16px\\\">" + pokemonStats[1] + "</b><br />";
    output += "<img src=\\\"" + parseType (pokemonStats[8]) + "\\\" />";
    if (pokemonStats[9] != "") {
        output += "<img src=\\\"" + parseType (pokemonStats[9]) + "\\\" />";
    }
    output += "<hr />";
    
    output += "<table><tr><td rowspan=\\\"3\\\"><a href=\\\"http://www.serebii.net/pokedex-xy/";
    output += padZeros(pokemonStats[0], 3) + ".shtml\\\"><img src=\\\"";
    output += "http://play.pokemonshowdown.com/sprites/bw/" + pokemonStats[1] + ".png\\\" /></a></td>";
    output += "<td colspan=\\\"3\\\"><b style=\\\"font-size: 14px\\\">Stats</b></td></tr><tr>";
    
    // check HP stat
    if (pokemonStats[10] == "HP" || pokemonStats[11] == "HP") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    } else if (pokemonStats[12] == "HP") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    }
    // check Atk stat
    if (pokemonStats[10] == "Atk" || pokemonStats[11] == "Atk") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    } else if (pokemonStats[12] == "Atk") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    }
    // check Def stat
    if (pokemonStats[10] == "Def" || pokemonStats[11] == "Def") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    } else if (pokemonStats[12] == "Def") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    }
    output += "</tr><tr>";
    // check SpA stat
    if (pokemonStats[10] == "SpA" || pokemonStats[11] == "SpA") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    } else if (pokemonStats[12] == "SpA") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    }
    // check SpD stat
    if (pokemonStats[10] == "SpD" || pokemonStats[11] == "SpD") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    } else if (pokemonStats[12] == "SpD") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    }
    // check Spe stat
    if (pokemonStats[10] == "Spe" || pokemonStats[11] == "Spe") {
        output += "<td class=\\\"bubble goodStatBubble\\\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    } else if (pokemonStats[12] == "Spe") {
        output += "<td class=\\\"bubble badStatBubble\\\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    } else {
        output += "<td class=\\\"bubble statBubble\\\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    }
    output += "</tr></table>";
    
    return output;
};

// ================================================================================
// SET POKEMON STATS SIMPLE
// ================================================================================
function setPokemonStatsSimple(pokemonName) {
    var output = "";
    
    // get the pokemon sats
    var pokemonStats = [];
    for (var i = 0; i < pokemonStatDictionary.length; i++) {
        if (pokemonStatDictionary[i][1] == pokemonName) {
            pokemonStats = pokemonStatDictionary[i];
            break;
        }
    }
    
    output += "<b style=\"font-size: 16px\">" + pokemonStats[1] + "</b><br />";
    output += "<img src=\"" + parseType (pokemonStats[8]) + "\" />";
    if (pokemonStats[9] != "") {
        output += "<img src=\"" + parseType (pokemonStats[9]) + "\" />";
    }
    output += "<hr />";
    
    output += "<table><tr><td rowspan=\"3\"><a href=\"http://www.serebii.net/pokedex-xy/";
    output += padZeros(pokemonStats[0], 3) + ".shtml\"><img src=\"";
    output += "http://play.pokemonshowdown.com/sprites/bw/" + pokemonStats[1].toLowerCase() + ".png\" /></a></td>";
    output += "<td colspan=\"3\"><b style=\"font-size: 14px\">Stats</b></td></tr><tr>";
    
    // check HP stat
    if (pokemonStats[10] == "HP" || pokemonStats[11] == "HP") {
        output += "<td class=\"bubble goodStatBubble\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    } else if (pokemonStats[12] == "HP") {
        output += "<td class=\"bubble badStatBubble\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>HP</b><br />" + pokemonStats[2] + "</td>";
    }
    // check Atk stat
    if (pokemonStats[10] == "Atk" || pokemonStats[11] == "Atk") {
        output += "<td class=\"bubble goodStatBubble\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    } else if (pokemonStats[12] == "Atk") {
        output += "<td class=\"bubble badStatBubble\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>Atk</b><br />" + pokemonStats[3] + "</td>";
    }
    // check Def stat
    if (pokemonStats[10] == "Def" || pokemonStats[11] == "Def") {
        output += "<td class=\"bubble goodStatBubble\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    } else if (pokemonStats[12] == "Def") {
        output += "<td class=\"bubble badStatBubble\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>Def</b><br />" + pokemonStats[4] + "</td>";
    }
    output += "</tr><tr>";
    // check SpA stat
    if (pokemonStats[10] == "SpA" || pokemonStats[11] == "SpA") {
        output += "<td class=\"bubble goodStatBubble\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    } else if (pokemonStats[12] == "SpA") {
        output += "<td class=\"bubble badStatBubble\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>SpA</b><br />" + pokemonStats[5] + "</td>";
    }
    // check SpD stat
    if (pokemonStats[10] == "SpD" || pokemonStats[11] == "SpD") {
        output += "<td class=\"bubble goodStatBubble\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    } else if (pokemonStats[12] == "SpD") {
        output += "<td class=\"bubble badStatBubble\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>SpD</b><br />" + pokemonStats[6] + "</td>";
    }
    // check Spe stat
    if (pokemonStats[10] == "Spe" || pokemonStats[11] == "Spe") {
        output += "<td class=\"bubble goodStatBubble\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    } else if (pokemonStats[12] == "Spe") {
        output += "<td class=\"bubble badStatBubble\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    } else {
        output += "<td class=\"bubble statBubble\"><b>Spe</b><br />" + pokemonStats[7] + "</td>";
    }
    output += "</tr></table>";
    
    return output;
};

// ================================================================================
// CREATE CONSUMABLE ITEM
// ================================================================================
function createConsumableItem(item) {
    var output = "";

    // create the output
    output += "<div class='characterSheetItemFormatter' style='height:110px'>";
    output += "<div class='characterSheetHeader' style='float:left; width: 95px'>";
    output += "<b>" + item.name + "</b></div><div class='characterSheetHeader' style='float: left; ";
    output += "width: 22px; text-align: right'>" + item.quantity + "</div>";
    output += "<div class='characterSheetHeader' style='width: 125px; height: 80px; ";
    output += "text-align: center; display: table-cell; vertical-align: middle; margin:auto'>";
    output += "<img src='" + item.image;
    output += "' onmouseover=\'showToolTip(\"";
    output += "<b>" + item.name + "</b><br>" + item.description;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" ";
    output += "style=\"cursor: pointer; \"";
    output += "' /></div></div>";
    
    return output;
}

// ================================================================================
// CREATE BADGE
// ================================================================================
function createBadge(item) {
    var output = "";

    // create the output
    output += "<div class='characterSheetItemFormatter' style='height:110px'>";
    output += "<div class='characterSheetHeader' style='float:left; width: 125px'>";
    output += "<b>" + item.name + "</b></div>";
    output += "<div class='characterSheetHeader' style='width: 125px; height: 80px; ";
    output += "text-align: center; display: table-cell; vertical-align: middle; margin:auto'>";
    output += "<img src='" + item.image;
    output += "' onmouseover=\'showToolTip(\"";
    output += "<b>" + item.name + "</b><br>" + item.description;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" ";
    output += "style=\"cursor: pointer; \"";
    output += "' /></div></div>";
    
    return output;
}

// ================================================================================
// CREATE GENERIC ITEM
// ================================================================================
function createGenericItem(item) {
    var output = "";

    // create the output
    output += "<tr><td style='width: 200px;'><span onmouseover=\'showToolTip(\"";
    output += "<b>" + item.name + "</b><br>" + item.description;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" ";
    output += "style=\"cursor: pointer; width: 200px; display: inline-block; ";
    output += "font-size: 12px; line-height: 160%\">";
    output += item.name + "</span></td>";
    output += "<td style='width: 300px;'>x" + item.quantity + "</td></tr>";
    
    return output;
}

// ================================================================================
// CREATE ITEM TABLE SCRIPTS
// ================================================================================
function createItemTable(arr) {
    var output = "";
    var tableDataCount = 0;
    output += "<table>";
    for (var i = 0; i < arr.length; i++) {
        if (tableDataCount == 0) {
            // create a new row
            output += "<tr>";
        }
        output += "<td style='vertical-align:top'>";
        output += arr[i];
        output += "</td>";
        if (tableDataCount == 3) {
            // end the row
            output += "</tr>";
        }

        // increment the table data
        tableDataCount++;
        if (tableDataCount == 4) {
            tableDataCount = 0;
        }
    }
    // finish the row if it wasn't finished
    if (tableDataCount != 0) {
        for (tableDataCount; tableDataCount < 4; tableDataCount++) {
            if (tableDataCount == 0) {
                // create a new row
                output += "<tr>";
            }
            output += "<td style='vertical-align:top'></td>";
            if (tableDataCount == 3) {
                // end the row
                output += "</tr>";
            }

            // increment the table data
            tableDataCount++;
        }
    }
    output += "</table>";
    return output;
}

// ================================================================================
// Create Pokemon Card
// ================================================================================
function CreatePokemonCard (pkmn) {
    var output = "";

    // create the output string
    if (pkmn.party) {
        output += "<div class='characterSheetPartyFormatter'>";
    } else {
        output += "<div class='characterSheetFormatter'>";
    }
    
    // pokemon name, type, and gender
    output += "<div class='characterSheetHeader' style='cursor: pointer;'>";
    output += "<b style='font-size:16px' ";
    output += "onmouseover=\'showToolTip(\"";
    output += "<b>" + pkmn.nickname + "</b><br />" + pkmn.notes;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" >";
    output += pkmn.nickname + "</b><br>";
    
    output += "<span style='cursor: pointer;' ";
    output += "onmouseover=\'showToolTip(\"";
    output += setPokemonStats(pkmn.species);
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\">";
    if (pkmn.gender != "") {
        output += pkmn.gender + " ";
    }
    output += pkmn.species;
    output += " - Level " + pkmn.level;
    output += "</span><br></div>";

    // create the pokemon image
    output += "<div style='float:left; width: 105px'>";
    output += "<a class='characterSheetImage' href='" + pkmn.url + "' target=\"_blank\">";
    output += "<img style='display: table-cell; vertical-align: middle;margin:auto;' ";
    output += "src='" + pkmn.image + "' alt='" + pkmn.species + "' >";
    output += "</a><br>";

    // create the pokemon ability
    output += "</div><div style='float:left; width: ";
    if (pkmn.party) {
        output += "65px; ";
    } else {
        output += "85px; ";
    }
    output += "padding-top: 10px'>";
    output += "<b style=\"width: 50px; display: inline-block\">Ability</b> " + "<span onmouseover=\'showToolTip(\"";
    output += "<b>" + pkmn.abilityName + "</b><br>" + pkmn.abilityDesc;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" ";
    output += "style=\"cursor: pointer; width: 65px; display: inline-block\">" + pkmn.abilityName + "</span><br /><br />";

    // add the item
    output += "<b style=\"width: 50px; display: inline-block\">Item</b> ";
    output += "<span onmouseover=\'showToolTip(\"";
    output += "<b>" + pkmn.holdItemName + "</b><br>" + pkmn.holdItemDesc;
    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" ";
    output += "style=\"cursor: pointer; width: 65px; display: inline-block\">" + pkmn.holdItemName;
    output += "</span><br></div><div style='float:left; padding-top: 10px; width: ";
    if (pkmn.party) {
        output += "170";
    } else {
        output += "360";
    }
    output += "px'>";
    
    if (pkmn.party) {
        output += "<div class='spoiler-title' onclick='show_spoil(this, event)' ";
        output += "style='background-image: url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)' ";
        output += "onmouseover=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background_onclick.png)'\" ";
        output += "onmouseout=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)'\" ";
        output += ">Attacks</div><div style='display:none' class='spoiler'>";
    } else {
        output += "<b>Attacks</b><div style='display:block' class='spoiler'>";
    }

    // ------------------------------
    // Unique Moves Section
    // ------------------------------
    output += "<b>Unique Moves</b><br>";
    if (pkmn.uniqueMoves.length > 0) {

        for (var j = 0; j < pkmn.uniqueMoves.length; j++) {
            if (typeof pkmn.uniqueMoves[j] != 'undefined') {

                // create the attack description
                var attackDescription = "";
                attackDescription += "<b style=\\\"font-size: 16px\\\">" + pkmn.uniqueMoves[j].name + "</b><br>";
                if (!pkmn.uniqueMoves[j].simple) {
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Type</b>";
                    attackDescription += "<span style=\\\"width: 60px; display: inline-block\\\">";
                    attackDescription += "<img src=\\\"" + pkmn.uniqueMoves[j].type;
                    attackDescription += "\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" ></span>";
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Power</b>";
                    attackDescription += "<span style=\\\"width: 60px; display: inline-block\\\">";
                    attackDescription += pkmn.uniqueMoves[j].power + "</span><br>";
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Category</b>";
                    attackDescription += "<span style=\\\"width: 60px; display: inline-block\\\">";
                    attackDescription += "<img src=\\\"" + pkmn.uniqueMoves[j].category;
                    attackDescription += "\\\" alt=\\\"Other\\\" style=\\\" margin-left: auto; margin-right: auto;\\\" ></span>";
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Accuracy</b>";
                    attackDescription += "<span style=\\\"width: 60px; display: inline-block\\\">";
                    attackDescription += pkmn.uniqueMoves[j].accuracy + "</span><br>";
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Target</b>";
                    attackDescription += "<span style=\\\"width: 240px; display: inline-block\\\">";
                    attackDescription += pkmn.uniqueMoves[j].target + "</span><br><br>";
                    attackDescription += "<b style=\\\"width: 65px; display: inline-block\\\">Effect</b>";
                    attackDescription += "<br><span style=\\\"display: inline-block\\\">";
                    attackDescription += pkmn.uniqueMoves[j].effect + "</span><br><br>";
                    attackDescription += "<b style=\\\"width: 100px; display: inline-block\\\">Description</b><br>";
                    attackDescription += "<span style=\\\"display: inline-block\\\">";
                    attackDescription += pkmn.uniqueMoves[j].description + "</span>";
                    
                    // now create the listing
                    output += "<span style=\"cursor: pointer; width: 170px; display: inline-block\"";
                    output += " onmouseover='showToolTip(\"" + attackDescription + "\");\'";
                    output += "onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" >";
                    output += "<img src='";
                    output += pkmn.uniqueMoves[j].type;
                    output += "' style=' margin-left: auto; margin-right: auto;' > ";
                    output += pkmn.uniqueMoves[j].name;
                    output += "</span>"
                    
                } else {
                    
                    // if the attack has no description, then add the attack's URL and make its name a link
                    output += "<a target=\"_blank\" style=\"text-decoration:none\" ";
                    output += "href=\"" + pkmn.uniqueMoves[j].url + "\">";
                    output += "<span style=\"cursor: pointer; width: 170px; display: inline-block\"";
                    output += " onmouseover='showToolTip(\"No description available.\");\'";
                    output += "onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\" >";
                    output += "<img src='" + pkmn.uniqueMoves[j].type;
                    output += "' style=' margin-left: auto; margin-right: auto;' > ";
                    output += pkmn.uniqueMoves[j].name;
                    output += "</span></a>"
                } 
            }
        }

    } else {
        // if there are no unique moves, state there are none
        output += "None";
    }
    output += "</div></div><div style='clear:both'></div></div>";

    return output;
}

// ================================================================================
// Create Trainer Card
// ================================================================================
function CreateTrainerCard (trainer) {
    var output = "";
    
    //                                              Trainer Pokemon Arrays
    // -------------------------------------------------------------------
    var partyPokemon = [];
    var boxedPokemon = [];
    
    // loop through all of the trainer's pokemon and add them to 
    // the party list or the boxed list
    for (var i = 0; i < trainer.pokemon.length; i++) {

        // add to the party or the box
        if (trainer.pokemon[i].party) {
            partyPokemon.push (CreatePokemonCard (trainer.pokemon[i]));
        } else {
            boxedPokemon.push (CreatePokemonCard (trainer.pokemon[i]));
        }
    }
    
    
    //                                                Trainer Item Arrays
    // -------------------------------------------------------------------
    var medicine = [];
    var TMs = [];
    var badges = [];
    var genericItems = []; // this is a multi-tiered array
    var genericItemCategories = [];
    
    // loop through all of the trainer's items and add them to their 
    // appropriate item category
    for (var i = 0; i < trainer.items.length; i++) {
        if (trainer.items[i].type == "Medicine") {
            medicine.push (createConsumableItem (trainer.items[i]));
            
        } else if (trainer.items[i].type == "TM") {
            TMs.push (createConsumableItem (trainer.items[i]));
            
        } else if (trainer.items[i].type == "Badge") {
            badges.push (createBadge (trainer.items[i]));
            
        } else {
            // This is a generic item. Determine if it has a category
            if (genericItemCategories.indexOf (trainer.items[i].type) == -1) {
                // add the category
                genericItemCategories.push (trainer.items[i].type);
                genericItems[trainer.items[i].type] = [];
            }
            
            // add the item to the generic items list
            genericItems[trainer.items[i].type].push (createGenericItem (trainer.items[i]));
        }
    }
    
    
    //                                                  Menu Items Buttons
    // -------------------------------------------------------------------
    var menuButtonImages = [];
    var menuButtonOnClicks = [];
    var menuItemIds = [];

    // set the menu button ids
    var menuClass = "PokemonMenu";
    var menuID = trainer.name + "PokemonMenu" + Math.floor(Math.random () * 100000);

    // set the menu item ids
    menuItemIds[0] = trainer.name + "MenuPokemon" + Math.floor(Math.random () * 100000);
    menuItemIds[1] = trainer.name + "MenuBox" + Math.floor(Math.random () * 100000);
    menuItemIds[2] = trainer.name + "MenuBag" + Math.floor(Math.random () * 100000);
    menuItemIds[3] = trainer.name + "MenuTrainer" + Math.floor(Math.random () * 100000);

    // set the images
    menuButtonImages[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/PokemonMenu.png";
    menuButtonOnClicks[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/PokemonMenuOnClick-1.png";
    menuButtonImages[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/PokeboxMenu.png";
    menuButtonOnClicks[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/PokeboxMenuOnClick-1.png";
    menuButtonImages[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BagMenu.png";
    menuButtonOnClicks[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BagMenuOnClick-1.png";
    menuButtonImages[3] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/TrainerCardMenu.png";
    menuButtonOnClicks[3] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/TrainerCardMenuOnClick-1.png";
    
    
    //                                               Create Trainer Header
    // -------------------------------------------------------------------
    
    output += "<b style='font-size:20px'>" + trainer.name + "</b>";
    output += "<table><tr><td width='60px' style='height: 150px; vertical-align: bottom;'>";
    output += "<img src='" + trainer.emote + "'></td>";

    // menu buttons
    output += "<td style='height: 120px; width: 450px; display:inline-block'>";
    for (var i = 0; i < 4; i++) {
        output += "<div style='height: 50px; width: 200px; display:inline-block;'>";
        output += "<img onclick=\"show_menu_item('" + menuID + "', '" + menuClass + "', '" + menuItemIds[i] + "')\" ";
        output += "src='" + menuButtonImages[i] + "' ";
        output += "style='height: 40px; width: 118px; margin-left: 20px; margin-right: 30px;' ";
        output += "onmouseover=\"this.src='" + menuButtonOnClicks[i] + "'\" ";
        output += "onmouseout=\"this.src='" + menuButtonImages[i] + "'\" /></div>";
    }
    output += "</td></tr></table><hr /><div id='" + menuID + "'>";
    
    
    //                                        Create Party Pokemon Section
    // -------------------------------------------------------------------
    
    var pokemonTableColumnIndex = 0;
    
    // create the party pokemon header and table
    output += "<div id='" + menuItemIds[0] + "' class='" + menuClass + "' style='display:block;' >";
    output += "<b style='font-size:20px'>Party Pokemon</b><hr />";
    output += "<table>";
    
    if (partyPokemon != null) {
        
        // add the party pokemon
        for (var i = 0; i < partyPokemon.length; i++) {
            
            // if we're starting a new row, add a row
            if (pokemonTableColumnIndex == 0) {
                output += "<tr>";
            }
            
            // add the pokemon
            output += "<td style='vertical-align:top'>";
            output += partyPokemon[i];
            output += "</td>";
            
            // finish the row if we're at the end of the row
            if (pokemonTableColumnIndex == 2) {
                output += "</tr>";
                pokemonTableColumnIndex = 0;
            } else {
                pokemonTableColumnIndex++;
            }
        }
        
        // if the row of party pokemon isn't finished, add data until the table completes
        if (pokemonTableColumnIndex != 0) {
            for (pokemonTableColumnIndex; pokemonTableColumnIndex < 3; pokemonTableColumnIndex++) {
                if (pokemonTableColumnIndex == 0) {
                    output += "<tr>";
                }
                output += "<td style='vertical-align:top'></td>";
                if (pokemonTableColumnIndex == 2) {
                    output += "</tr>";
                }
            }
        }
    }
    
    // finish the party pokemon section
    output += "</table></div>";
    

    //                                        Create Boxed Pokemon Section
    // -------------------------------------------------------------------
    
    // create the boxed pokemon header and table
    output += "<div id='" + menuItemIds[1] + "' class='" + menuClass + "' style='display:none;' id='";
    output += menuItemIds[1] + "'><b style='font-size:20px'>Boxed Pokemon</b><hr />";
    if (boxedPokemon.length > 0) {
        for (var i = 0; i < boxedPokemon.length; i++) {
            output += boxedPokemon[i] + "<hr />";
        }
    } else {
        output += "None";
    }
    
    // finish the boxes pokemon section
    output += "</div>";

    
    //                                                Create Items Section
    // -------------------------------------------------------------------

    // create IDs
    var itemClass = "PokemonItemClass";
    var menuBagIDs = [];
    menuBagIDs[0] = trainer.name + "PokemonMedicine" + Math.floor(Math.random () * 100000);
    menuBagIDs[1] = trainer.name + "PokemonTMs" + Math.floor(Math.random () * 100000);
    menuBagIDs[2] = trainer.name + "PokemonBadges" + Math.floor(Math.random () * 100000);
    menuBagIDs[3] = trainer.name + "PokemonKeyItems" + Math.floor(Math.random () * 100000);

    // buttons
    var itemButtons = [];
    var itemButtonOnClicks = [];
    itemButtons[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/MedicineItemN-1.png";
    itemButtonOnClicks[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/MedicineItemN-1.png";
    itemButtons[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemN-1.png";
    itemButtonOnClicks[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemN-1.png";
    itemButtons[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BadgeItemN-1.png";
    itemButtonOnClicks[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BadgeItemN-1.png";
    itemButtons[3] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/KeyItem-1.png";
    itemButtonOnClicks[3] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/KeyItemO-1.png";
    
    // holds the sub menus
    var menuDivs = "";
    
    // create header section
    output += "<div id='" + menuItemIds[2] + "' class='" + menuClass + "' style='display:none; id='";
    output += menuItemIds[2] + "'><b style='font-size:20px'>Bag</b><br />";
    output += "<i><img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/PokeRed.png' ";
    output += "border='0' alt='$' />" + trainer.pokedollars + "</i><hr />";

    // add medicine
    if (medicine.length > 0) {
        // make the medicine section clickable
        itemButtons[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/MedicineItem-1.png";
        itemButtonOnClicks[0] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/MedicineItemO-1.png";
        
        // add the item table
        menuDivs += "<div class='" + itemClass + "' style='display:none;' ";
        menuDivs += "id= '" + menuBagIDs[0] + "'><b style='font-size:20px'>Medicine</b><hr />";
        menuDivs += createItemTable(medicine);
        menuDivs += "</div>";
    }

    // add tms
    if (TMs.length > 0) {
        // make the medicine section clickable
        itemButtons[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItem-1.png";
        itemButtonOnClicks[1] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/tmItemO-1.png";
        
        // add the item table
        menuDivs += "<div class='" + itemClass + "' style='display:none;' ";
        menuDivs += "id='" + menuBagIDs[1] + "'><b style='font-size:20px'>Technical Machines</b><hr />";
        menuDivs += createItemTable(TMs);
        menuDivs += "</div>";
    }

    // add badges
    if (badges.length > 0) {
        // make the badges section clickable
        itemButtons[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BadgeItem-1.png";
        itemButtonOnClicks[2] = "http://i231.photobucket.com/albums/ee290/Gelatos/gui/BadgeItemO-1.png";
        
        // add the item table
        menuDivs += "<div class='" + itemClass + "' style='display:none;' ";
        menuDivs += "id='" + menuBagIDs[2] + "'><b style='font-size:20px'>Badges</b><hr />";
        menuDivs += createItemTable(badges);
        menuDivs += "</div>";
    }

    // add generic items table
    menuDivs += "<div class='" + itemClass + "' style='display:block;' ";
    menuDivs += "id='" + menuBagIDs[3] + "'><b style='font-size:20px'>Key Items</b><hr />";
    
    // add generic items
    if (genericItemCategories.length >0) {
        menuDivs += "<table>";
        
        // loop through each generic item category
        for (var i = 0; i < genericItemCategories.length; i++) {
            // add the category title
            menuDivs += "<tr><td colspan='2'><b style='font-size: 12px; line-height: 160%' >";
            menuDivs += genericItemCategories[i] + "</b></td></tr>";
            
            // add the items in the category
            for (var j = 0; j < genericItems[genericItemCategories[i]].length; j++) {
                menuDivs += genericItems[genericItemCategories[i]][j];
            }
            
            // finish the category
            menuDivs += "<tr><td colspan='2'><hr /></td></tr>";
        }
        menuDivs += "</table>";
        
    } else {
        menuDivs += "None";
    }
    
    // finish generic items table
    menuDivs += "</div>";

    // create the buttons
    for (var buttonIndex = 0; buttonIndex < 4; buttonIndex++) {
        if (itemButtons[buttonIndex] == itemButtonOnClicks[buttonIndex]) {
            output += "<img src='" + itemButtons[buttonIndex] + "' />";
        } else {
            output += "<img onclick=\"show_menu_item('" + menuItemIds[2] + "', ";
            output += "'PokemonItemClass', '" + menuBagIDs[buttonIndex] + "')\" ";
            output += "src='" + itemButtons[buttonIndex] + "' ";
            output += "onmouseover=\"this.src='" + itemButtonOnClicks[buttonIndex] + "'\" ";
            output += "onmouseout=\"this.src='" + itemButtons[buttonIndex] + "'\" />";
        }
    }
    
    // finish the items section
    output += "<br /><br />" + menuDivs + "</div>";

    
    //                                         Create Trainer Info Section
    // -------------------------------------------------------------------
    
    // create header section
    output += "<div id='" + menuItemIds[3] + "' class='" + menuClass + "' style='display:none; id='";
    output += menuItemIds[3] + "'><b style='font-size:20px'>" + trainer.fullName + "</b><br />";
    output += "<i>" + trainer.quote + "</i><hr />";
    
    // add the trainer sprites
    for (var i = 0; i < trainer.images.length; i++) {
        output += "<img src='" + trainer.images[i] + "' />";
    }
    output += "<br />";
    
    // profile section
    output += "<b>Age</b><br />" + trainer.age + "<br /><br />";
    output += "<b>Gender</b><br />" + trainer.gender + "<br /><br />";
    output += "<b>Personality</b><br />" + trainer.personality + "<br /><br />";
    output += "<b>Preferred Pokemon</b><br />" + trainer.preferredPokemon + "<br /><br />";
    output += "<b>Disliked Pokemon</b><br />" + trainer.dislikedPokemon + "<br /><br />";
    output += "<b>Skills</b><br />" + trainer.skills + "<br />";
    
    // finish the trainer info section
    output += "</div>";
    
    //                                                 Finish Trainer Card
    // -------------------------------------------------------------------
    
    output += "</div>";
    return output;
}