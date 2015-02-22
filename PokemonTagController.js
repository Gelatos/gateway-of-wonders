var pokemonTopicIDs = [];
pokemonTopicIDs.push("2359"); // gel's testing topic
pokemonTopicIDs.push("2093"); // adventure log
pokemonTopicIDs.push("2145"); // leitmotifs
pokemonTopicIDs.push("2338"); // chapter 3
pokemonTopicIDs.push("2580"); // Faceset Topic
pokemonTopicIDs.push("2695"); // Plot Synopsis
pokemonTopicIDs.push("2747"); // symphony of roses
pokemonTopicIDs.push("2966"); // chapter 4

// ================================================================================
// --------------------------------------------------------------------------------
// TAGS SCRIPTS
// --------------------------------------------------------------------------------
// ================================================================================
(function () {
    var postText = document.getElementsByClassName('postcolor');
    var incrementer = -1;
    var randomIncrementer = 0;
    var previousIncrementerNumber = 0;
    var battleBGIDs = [];

    // determine if this is a pokemon topic
    var pokemonTopic = false;
    var topicID = getUrlVars()["showtopic"];
    for (var i = 0; i < pokemonTopicIDs.length; i++) {
        if (topicID == pokemonTopicIDs[i]) {
            pokemonTopic = true;
            break;
        }
    }

    while (incrementer < postText.length) {
        incrementer++;
        
        // ================================================================================
        // FACE SET
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[e') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[(emote|e)(?:=(.+?))?\]([\s\S]+?)\[\/(emote|e)\]/gi, function (total, t, title, inner) {
                    
                    // replace the emotes
                    if (title.search (",") >= 0) {
                        var split = title.split (",");
                        inner = replaceEmotes(split[0], split[1], inner);
                    } else {
                        inner = replaceEmotes(title, "", inner);
                    }
                    
                    // replace speech bubbles
                    inner = addSpeechBubbles (inner);

                    // return the finished table
                    return "<table>" + inner + "</td></tr></table>";
                });
        }
        
        // ================================================================================
        // Display pokemon
        // ================================================================================
        if (pokemonTopic &&
            postText[incrementer].innerHTML.indexOf('[pk') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[pk(?:=(.+?))?\]/gi, function (total, data) {

                    // Split the dictionary
                    var data = data.split(",");

                    // create the output string
                    var output = "<table><tr>";
                    var rowCount = 0;
                    for (var i = 0; i < data.length; i++) {
                        rowCount++;
                        output += "<td>" + setPokemonStatsSimple(data[i]) + "</td>";
                        if (rowCount >= 3) {
                            output += "</tr><tr>";
                            rowCount = 0;
                        }
                    }
                    if (rowCount == 2) {
                        output += "<td>&nbsp;</td>";
                    }
                    else if (rowCount == 1) {
                        output += "<td>&nbsp;</td>";
                        output += "<td>&nbsp;</td>";
                    }
                    output += "</tr></table>";
                    return output;
                }
            );
        }

        // ================================================================================
        // REPLACE POKEMON STAT DICTIONARY
        // ================================================================================
        for (var i = 0; i < pokemonStatDictionary.length; i++) {
                if (pokemonTopic &&
                    postText[incrementer].innerHTML.indexOf(pokemonStatDictionary[i][1]) !== -1) {
                postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                    new RegExp('(^|\\s|\\(|\\-|\\]\\)|\\r|\\t|\\<br\\>)' + pokemonStatDictionary[i][1].toLowerCase(), "gi"),
                    function (inner) {
                        var output = "";
                        output += "<span style='cursor: pointer;' ";
                        output += "onmouseover=\'showToolTip(\"";
                        output += setPokemonStats(pokemonStatDictionary[i][1]);
                        output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\">";
                        output += inner;
                        output += "</span>";
                        return output;
                    }
                );
            }
        }

        // ================================================================================
        // CREATE POKEMON ADVENTURE LOGS
        // ================================================================================
        if (pokemonTopic &&
            postText[incrementer].innerHTML.indexOf("[trainerLog") !== -1) {

            // Find the string that is within either the pokemonFormatter tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[trainerLog(?:=(.+?))?\]([\s\S]+?)\[\/trainerLog\]/gi,
                function (randomNumber, header, innertext) {

                    //                                                          Create IDs
                    // -------------------------------------------------------------------
                    var firstVisibleCharacter = true;
                    var pokemonFormatterID = header + "PokemonFormatter" + Math.floor(Math.random () * 100000);
                    var pokemonFormatterClass = header + "PokemonFormatter" + Math.floor(Math.random () * 100000);
                    var characterButtons = "";
                    var trainerOutput = "";

                    //                                                Create Trainer Cards
                    // -------------------------------------------------------------------
                    if (innertext.indexOf("[trainer") !== -1) {
                        innertext = innertext.replace(
                            /\[trainer(?:=(.+?))?\]/gi, function (count, trainerInfo) {

                                // prune the trainer info
                                trainerInfo = trainerInfo.replace(/\r?\n|\r/, "");
                                trainerInfo = trainerInfo.replace(/<br\s*[\/]?>/gi, "");
                                trainerInfo = replaceSpecialCharacters(trainerInfo);
                                trainerInfo = trainerInfo.replace(/\s/g, '')

                                // Split the dictionary
                                var trainerInfoSplit = trainerInfo.split(",");
                                var characterID = trainerInfoSplit[0] + "Trainer" + Math.floor(Math.random () * 100000);

                                // create the character Button
                                var image = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/" + trainerInfoSplit[1];
                                var imageOnClick = "http://i231.photobucket.com/albums/ee290/Gelatos/DnD%20sprites/" + trainerInfoSplit[2];

                                characterButtons += "<img onclick=\"show_menu_item('" + pokemonFormatterID + "', '" + pokemonFormatterClass + "', '" + characterID + "')\" ";
                                characterButtons += "src='" + image + "' style='height: 28px; width: 128px; margin-top: 3px; margin-bottom: 3px;' ";
                                characterButtons += "onmouseover=\"this.src='" + imageOnClick + "'\" ";
                                characterButtons += "onmouseout=\"this.src='" + image + "'\" />";

                                // create the header
                                trainerOutput += "<div id='" + characterID + "' class='" + pokemonFormatterClass + "' ";
                                    if (firstVisibleCharacter == true) {
                                        firstVisibleCharacter = false;
                                        trainerOutput += "style='display:block;'>";
                                    } else {
                                        trainerOutput += "style='display:none;'>";
                                    }
                                trainerOutput += CreateTrainerCard (TrainerList[trainerInfoSplit[0]]);
                                trainerOutput += "</div>";

                                return "";
                            }
                        );
                    }

                    // return the new output
                    return characterButtons + "<br />" + trainerOutput;
                }
            );
        }
        
        // ================================================================================
        // Show All Facesets
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[showAll') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[showAll(?:=(.+?))?\]/gi, function (total, title) {
                    // determine the emote set
                    var emoteSet;
                    var extention = "";
                    // replace the emotes
                    if (title.search (",") >= 0) {
                        var split = title.split (",");
                        emoteSet = getEmoteSet(split[0]);
                        extention = split[1];
                    } else {
                        emoteSet = getEmoteSet(title);
                    }

                    return showAllFacesets(emoteSet, extention) + "<table></td></tr></table>";
                });
        }
        
        // ================================================================================
        // Show Everything Faceset
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[showEverything') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[showEverything(?:=(.+?))?\]/gi, function (total, title) {
                    
                    // determine the emote set
                    var emoteSet;
                    var extention = "";
                    // replace the emotes
                    if (title.search (",") >= 0) {
                        var split = title.split (",");
                        emoteSet = getEmoteSet(split[0]);
                        extention = split[1];
                    } else {
                        emoteSet = getEmoteSet(title);
                    }

                    return showAllFacesets(emoteSet, extention, true) + "<table></td></tr></table>";
                });
        }
        
        // ================================================================================
        // Versus Battle Image
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[battleEmote') !== -1) {
            // Find the string that is within either the pokemon tags.
            var innerText = [];
            var innerID = [];
            var idIncrementer = 0;

            // replace with canvases
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[battleEmote(?:=(.+?))?\]([\s\S]+?)\[\/battleEmote\]/gi, function (total, title, inner) {
                    innerText[idIncrementer] = inner;
                    innerID[idIncrementer] = Math.ceil(Math.random() * 1000);
                    battleBGIDs.push(innerID[idIncrementer]);

                    var output = "<canvas id='battleBG-" + innerID[idIncrementer] + "' height='165px' width='580' style='position:absolute; z-index: 1;'></canvas>" +
                        "<canvas id='battleLayer0-" + innerID[idIncrementer] + "' height='165px' width='580' style='position:absolute; z-index: 2;'></canvas>" +
                        "<canvas id='battleLayer1-" + innerID[idIncrementer] + "' height='165px' width='580' style='position:absolute; z-index: 3;'></canvas>" +
                        "<canvas id='battleLayer2-" + innerID[idIncrementer] + "' height='165px' width='580' style='position:absolute; z-index: 4;'></canvas>" +
                        "<canvas id='battler" + innerID[idIncrementer] + "' height='165px' width='580' style='z-index: 0;'></canvas>";

                    idIncrementer++;
                    return output;
                });

            // draw the characters
            for (j = 0; j < innerText.length; j++) {
                if (innerText[j] != "") {
                    var imageID;
                    var alignAdjustment;

                    // get the left images
                    var leftImages = [];
                    var leftImageArray = [];
                    innerText[j] = innerText[j].replace(/\[L(?:=(.+?))?\]/i, function (all, val) {
                        leftImages = val.split(", ");
                        return "";
                    });

                    // get the right images
                    var rightImages = [];
                    var rightImageArray = [];
                    innerText[j] = innerText[j].replace(/\[R(?:=(.+?))?\]/i, function (all, val) {
                        rightImages = val.split(", ");
                        return "";
                    });

                    alignAdjustment = 250 / leftImages.length;
                    for (var i = 0; i < leftImages.length; i++) {
                        var battleID = 'battleLayer' + i + "-" + innerID[j];
                        var battleCanvas = document.getElementById(battleID);
                        leftImageArray[i] = new emoteBattleImage(battleCanvas, getEmoteSet(leftImages[i]).getEmote("Battle",""), i, alignAdjustment, false);
                    }
                    alignAdjustment = 250 / rightImages.length;
                    for (var i = 0; i < rightImages.length; i++) {
                        var battleID = 'battleLayer' + i + "-" + innerID[j];
                        var battleCanvas = document.getElementById(battleID);
                        rightImageArray[i] = new emoteBattleImage(battleCanvas, getEmoteSet(rightImages[i]).getEmote("Battle",""), i, alignAdjustment, true);
                    }
                }
            }
        }
        
        // ================================================================================
        // SLOTS FORMULA
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[slots') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[slots(?:=(.+?))?\]([\s\S]+?)\[\/slots\]/gi, function (total, multiplier, value) {

                    // determine the post number which determines the seed for the random number generator
                    var sourceSeed = postText[incrementer - 2].innerHTML;
                    var seed = "";
                    sourceSeed = sourceSeed.replace(
                        /link\_to\_post\(([\s\S]+?)\)/gi, function (wholePost, postNumber, count) {
                            seed = postNumber;
                            return postNumber;
                        });
                    seed = Number(seed);

                    // determine if the incrementer is the same number as the previous incrementer which will determine if we're in the same post
                    if (previousIncrementerNumber == incrementer) {
                        randomIncrementer += 1000;
                        seed += randomIncrementer;
                    } else {
                        previousIncrementerNumber = incrementer;
                        randomIncrementer = 0;
                    }

                    // set the random seed
                    Math.seedrandom(seed);

                    var TwentyFiveWin = 0;
                    var SevenWin = 0;
                    var FiveWin = 0;
                    var FourWin = 0;
                    var ThreeWin = 0;
                    var TwoWin = 0;
                    var OneWin = 0;
                    var HalfWin = 0;
                    var ZeroWin = 0;

                    var winnings = 0;
                    var rng = 0;
                    var value = Number(value);
                    var startingVal = value * Number(multiplier);

                    for (var i = 0; i < Number(multiplier); i++) {
                        rng = Math.ceil(Math.random() * 100);
                        if (rng < 50) {
                            ZeroWin++;
                            winnings += 0;
                        } else if (rng >= 50 && rng < 65) {
                            HalfWin++;
                            winnings += value * 0.5;
                        } else if (rng >= 65 && rng < 75) {
                            OneWin++;
                            winnings += value * 1;
                        } else if (rng >= 75 && rng < 86) {
                            TwoWin++;
                            winnings += value * 2;
                        } else if (rng >= 86 && rng < 91) {
                            ThreeWin++;
                            winnings += value * 3;
                        } else if (rng >= 91 && rng < 95) {
                            FourWin++;
                            winnings += value * 4;
                        } else if (rng >= 95 && rng < 98) {
                            FiveWin++;
                            winnings += value * 5;
                        } else if (rng >= 98 && rng < 100) {
                            SevenWin++;
                            winnings += value * 7;
                        } else if (rng == 100) {
                            TwentyFiveWin++;
                            winnings += value * 25;
                        }
                    }

                    // create the output string
                    var output = "Slots Results";
                    if (ZeroWin != 0) {
                        output += "<br />Zero wins: " + ZeroWin;
                    }
                    if (HalfWin != 0) {
                        output += "<br />Half wins: " + HalfWin;
                    }
                    if (OneWin != 0) {
                        output += "<br />Even wins: " + OneWin;
                    }
                    if (TwoWin != 0) {
                        output += "<br />Double wins: " + TwoWin;
                    }
                    if (ThreeWin != 0) {
                        output += "<br />Triple wins: " + ThreeWin;
                    }
                    if (FourWin != 0) {
                        output += "<br />Quadruple wins: " + FourWin;
                    }
                    if (FiveWin != 0) {
                        output += "<br />Quintuple wins: " + FiveWin;
                    }
                    if (SevenWin != 0) {
                        output += "<br />Septuple wins: " + SevenWin;
                    }
                    if (TwentyFiveWin != 0) {
                        output += "<br />Jackpot wins: " + TwentyFiveWin;
                    }
                    output += "<br />Total winnings: ";
                    output += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/PokeRed.png' border='0' alt='$' />";
                    output += (winnings - startingVal);
                    return output;
                });
        }
        
        // ================================================================================
        // REPLACE DIE FORMULA
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[d') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[d(?:=(.+?))?\]([\s\S]+?)\[\/d\]/gi, function (total, title, inner) {

                    // determine the post number which determines the seed for the random number generator
                    var sourceSeed = postText[incrementer - 2].innerHTML;
                    var seed = "";
                    sourceSeed = sourceSeed.replace(
                        /link\_to\_post\(([\s\S]+?)\)/gi, function (wholePost, postNumber, count) {
                            seed = postNumber;
                            return postNumber;
                        });
                    seed = Number(seed);

                    // determine if the incrementer is the same number as the previous incrementer which will determine if we're in the same post
                    if (previousIncrementerNumber == incrementer) {
                        randomIncrementer += 1000;
                        seed += randomIncrementer;
                    } else {
                        previousIncrementerNumber = incrementer;
                        randomIncrementer = 0;
                    }

                    // set the random seed
                    Math.seedrandom(seed);

                    // strip all the new lines from inner
                    inner = inner.replace(/\r?\n|\r/, "");
                    inner = inner.replace(/<br\s*[\/]?>/gi, "");
                    inner = inner.replace("'", "`");

                    // set the title
                    if (typeof title == 'undefined') {
                        title = "Untitled Die Roll";
                    }

                    // determine variables of the attack
                    var dieType = 100;
                    var accuracyString = "";

                    // if the user supplied no variables, then they only want to check for accuracy
                    if (inner.length >= 1) {
                        // generate a random number using the seed
                        dieType = Number(inner);
                        // if the user supplied variables, then we've got a more complex attack on our hands
                    } else {
                        // determine the die type
                        dieType = Array2DSearch(inner, "acc");
                        if (dieType == "") {
                            dieType = "100";
                        }
                    }

                    // choose a random number
                    var dieValue = Math.floor((Math.random() * dieType) + 1);

                    // create the output string
                    var output = "<b>" + title + ": " + dieValue + " /" + dieType + "</b>";
                    return output;
                });
        }
        
        // ================================================================================
        // GET DAMAGE FORMULA
        // ================================================================================
        if (postText[incrementer].innerHTML.indexOf('[z') !== -1) {
            // Find the string that is within either the pokemon tags.
            postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
                /\[z(?:=(.+?))?\]/gi, function (total, data) {
                    
                    // Split the dictionary
                    var data = data.split(",");
                    var title = data[0];
                    var healthPercent = Number(data[1]);
                    var maxhealth = Number(data[2]) * 10;
                    var seed = Number(data[4]);

                    // set the random seed
                    Math.seedrandom(seed);
                    
                    var health = maxhealth * (healthPercent / 100);
                    var damage = Number(data[3]) * (0.7 + (Math.random() * 0.6));
                    health -= damage;
                    
                    // create the output string
                    var output = "";
                    if (health < 1) {
                        output = title + " has fainted.";
                    } else {
                        healthPercent = Math.floor (health * 100 / maxhealth);
                        output = title + " is at " + healthPercent + "% health.";
                    }
                    
                    return output;
                }
            );
        }
        
    }
    
    // set the bg image
    var bgImage = new Image();
    bgImage.src = "http://i231.photobucket.com/albums/ee290/Gelatos/Basson%20Facesets/VersusBar.png";
    bgImage.onload = function () {
        for (var k = 0; k < battleBGIDs.length; k++) {
            drawImage(document.getElementById('battleBG-' + battleBGIDs[k]), this, false, 0, 0);
        }
    }
})();