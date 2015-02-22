// ================================================================================
// SHOW MENU ITEM
// ================================================================================
function slide_menu(menuID) {
	// toggle the slide
	newID = "#" + menuID;
	$(newID).slideToggle("slow");
};

// ================================================================================
// CREATE ITEM TABLE SCRIPTS
// ================================================================================
function createShadowrunTable(arr, rows) {
	var newOutput = "";
	var tableDataCount = 0;
	newOutput += "<table>";
	for (var i = 0; i < arr.length; i++) {
		if (tableDataCount == 0) {
			// create a new row
			newOutput += "<tr>";
		}
		newOutput += "<td style='vertical-align:top'>";
		newOutput += arr[i];
		newOutput += "</td>";
		if (tableDataCount == (rows - 1)) {
			// end the row
			newOutput += "</tr>";
		}

		// increment the table data
		tableDataCount++;
		if (tableDataCount == rows) {
			tableDataCount = 0;
		}
	}
	// finish the row if it wasn't finished
	if (tableDataCount != 0) {
		for (tableDataCount; tableDataCount < rows; tableDataCount++) {
			if (tableDataCount == 0) {
				// create a new row
				newOutput += "<tr>";
			}
			newOutput += "<td style='vertical-align:top'></td>";
			if (tableDataCount == (rows - 1)) {
				// end the row
				newOutput += "</tr>";
			}

			// increment the table data
			tableDataCount++;
		}
	}
	newOutput += "</table>";
	return newOutput;
}

// ================================================================================
// --------------------------------------------------------------------------------
// TAGS SCRIPTS
// --------------------------------------------------------------------------------
// ================================================================================
(function () {
	var postText = document.getElementsByTagName('div');
	var incrementer = -1;
	var randomIncrementer = 0;
	var previousIncrementerNumber = 0;
	while (incrementer < postText.length) {
		incrementer++;
		// ================================================================================
		// CREATE THE POKEMON FORMATTER
		// ================================================================================
		if (typeof postText[incrementer] != 'undefined' &&
			typeof postText[incrementer].className != 'undefined' &&
			postText[incrementer].className.indexOf('postcolor') !== -1 &&
			postText[incrementer].innerHTML.indexOf("[shadowrunFormatter") !== -1) {
			
			// Find the string that is within either the pokemonFormatter tags.
			postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(
				/\[shadowrunFormatter(?:=(.+?))?\]([\s\S]+?)\[\/shadowrunFormatter\]/gi, 
				function (count, heading, inside) {
					var characterName = "";
					var quote = "";
					var charURL = "";
					var money = "";
					var background = "";
					var skills = [];
					var items = [];
					var dodgePoints = "";
					
					// contacts
					var contactsCounter = 0;
					var contacts = [];
					
					// qualities
					var qualitiesCounter = 0;
					var qualities = [];
					
					// cyber/bio
					var cyberCounter = 0;
					var cyber = [];
					var essence = "";
					
					// biotics
					var initiateGrade = 0;
					var bioticsCounter = 0;
					var biotics = [];
					
					// tech
					var techCounter = 0;
					var tech = [];
					var omnitool = "";
					
					// weapon
					var weaponCounter = 0;
					var weapons = [];
					var heldWeapon = "";
					
					// armor
					var armorCounter = 0;
					var armor = [];
					var outfitName = "";
					var currentOutfitBal = 0;
					var currentOutfitImp = 0;
					
					// attributes
					var BOD = 0;
					var AGI = 0;
					var REA = 0;
					var STR = 0;
					var CHA = 0;
					var INT = 0;
					var LOG = 0;
					var WIL = 0;
					var EDG = 0;
					var INI = 0;
					var INP = 0;
					var BIO = 0;
					
					// Get the stats for the formatter
					characterName = GetCharacterName (inside);
					charURL = GetCharacterImageURL (inside);
					money = GetPokedollars (inside);
					background = GetTrainerInfo(inside);
					
					if (inside.indexOf("[charQuote]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[charQuote(?:=(.+?))?\]([\s\S]+?)\[\/charQuote\]/gi, function (total, title, inner) {
								quote = inner;
							}
						);
					}
					
					// Get Attributes
					if (inside.indexOf("[attributes]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[attributes(?:=(.+?))?\]([\s\S]+?)\[\/attributes\]/gi, function (total, title, inner) {
								BOD = inner.match(/\bBOD\d+\b/i);
								if (BOD != null) {
									BOD = BOD[0].trim();
									BOD = BOD.substring(3);
								} else {
									BOD = 0;
								}
								AGI = inner.match(/\bAGI\d+\b/i);
								if (AGI != null) {
									AGI = AGI[0].trim();
									AGI = AGI.substring(3);
								} else {
									AGI = 0;
								}
								REA = inner.match(/\bREA\d+\b/i);
								if (REA != null) {
									REA = REA[0].trim();
									REA = REA.substring(3);
								} else {
									REA = 0;
								}
								STR = inner.match(/\bSTR\d+\b/i);
								if (STR != null) {
									STR = STR[0].trim();
									STR = STR.substring(3);
								} else {
									STR = 0;
								}
								CHA = inner.match(/\bCHA\d+\b/i);
								if (CHA != null) {
									CHA = CHA[0].trim();
									CHA = CHA.substring(3);
								} else {
									CHA = 0;
								}
								INT = inner.match(/\bINT\d+\b/i);
								if (INT != null) {
									INT = INT[0].trim();
									INT = INT.substring(3);
								} else {
									INT = 0;
								}
								LOG = inner.match(/\bLOG\d+\b/i);
								if (LOG != null) {
									LOG = LOG[0].trim();
									LOG = LOG.substring(3);
								} else {
									LOG = 0;
								}
								WIL = inner.match(/\bWIL\d+\b/i);
								if (WIL != null) {
									WIL = WIL[0].trim();
									WIL = WIL.substring(3);
								} else {
									WIL = 0;
								}
								INI = inner.match(/\bINI\d+\b/i);
								if (INI != null) {
									INI = INI[0].trim();
									INI = INI.substring(3);
								} else {
									INI = 0;
								}
								INP = inner.match(/\bINP\d+\b/i);
								if (INP != null) {
									INP = INP[0].trim();
									INP = INP.substring(3);
								} else {
									INP = 0;
								}
								EDG = inner.match(/\bEDG\d+\b/i);
								if (EDG != null) {
									EDG = EDG[0].trim();
									EDG = EDG.substring(3);
								} else {
									EDG = 0;
								}
								BIO = inner.match(/\bBIO\d+\b/i);
								if (BIO != null) {
									BIO = BIO[0].trim();
									BIO = BIO.substring(3);
								} else {
									BIO = 0;
								}
								
							}
						);
					} 
					
					// Get Items
					if (inside.indexOf("[items]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[items(?:=(.+?))?\]([\s\S]+?)\[\/items\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split('@');
								var counter = 0;
								for (var i = 0; i < innerSplit.length; i++) {
									if (innerSplit[i] != "") {
										// determine the number of items
										var count = innerSplit[i].match(/\bx\d+\b/i);
										if (count != null) {
											count = count[0];
											count = count.trim();
											innerSplit[i] = innerSplit[i].replace(/\bx\d+\b/i, "");
											
											innerSplit[i] = innerSplit[i].split("*");
											var hoverText = "";
											var type = "";
											if (innerSplit[i].length == 3) {
												type = innerSplit[i][1];
												type = type.trim();
												hoverText = innerSplit[i][2];
												hoverText = hoverText.trim();
											}
											innerSplit[i] = innerSplit[i][0];

											// determine the name
											var name = innerSplit[i];
											name = name.replace(/\r?\n|\r/, "");
											name = name.replace(/<br\s*[\/]?>/gi, "");
											var name =name.trim();
											
											var description = "<b style=\\\"font-size:12px; color:black\\\">" + name + "</b><hr />";
											description += hoverText;
								
											// create the output
											var output = "";
											output += "<table class='characterSheetHeader' ";
											if (hoverText != "") {
												output += "onmouseover='showToolTip(\"" + description + "\");\' ";
												output += "onmouseout=\"hideToolTip()\"";
											}
											output += "><tr>";
											output += "<td  style='width: 150px; font-size:12px; color:black; font-weight:bold'>" + name + "</td>";
											output += "<td style='width: 30px; text-align: right'>" + count + "</td>";
											if (type != "") {
												output += "</tr><tr><td colspan='3' style='width: 180px'>";
												output += "<i>" + type + "</i></td>";
											}
											output += "</tr></table>";
											items[counter] = output;
											counter++;
										}

									}
								}
							}
						);
					}
					
					// Get Weapons
					if (inside.indexOf("[weapon") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[weapon(?:=(.+?))?\]([\s\S]+?)\[\/weapon\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("@");
								for (var i = 0; i < innerSplit.length; i++) {
									innerSplit[i] = innerSplit[i].split("*");
								}
								// create the output
								var Damage = Array2DSearch(innerSplit, "Damage");
								if (Damage == "") {
									Damage = "0S";
								} else {
									Damage = Damage.replace(/\r?\n|\r/, "");
									Damage = Damage.replace(/<br\s*[\/]?>/gi, "");
								}
								var Type = Array2DSearch(innerSplit, "Type");
								Type = Type.replace(/\r?\n|\r/, "");
								Type = Type.replace(/<br\s*[\/]?>/gi, "");
								var AP = Array2DSearch(innerSplit, "AP");
								AP = AP.replace(/\r?\n|\r/, "");
								AP = AP.replace(/<br\s*[\/]?>/gi, "");
								var Recoil = Array2DSearch(innerSplit, "Recoil");
								Recoil = Recoil.replace(/\r?\n|\r/, "");
								Recoil = Recoil.replace(/<br\s*[\/]?>/gi, "");
								var Mode = Array2DSearch(innerSplit, "Mode");
								Mode = Mode.replace(/\r?\n|\r/, "");
								Mode = Mode.replace(/<br\s*[\/]?>/gi, "");
								var Dice = Array2DSearch(innerSplit, "Dice");
								Dice = Dice.replace(/\r?\n|\r/, "");
								Dice = Dice.replace(/<br\s*[\/]?>/gi, "");
								var Qualities = Array2DSearch(innerSplit, "Qualities");
								var description = "<b style=\\\"font-size:12px; color:black\\\">" + title + "</b><hr />" + Qualities;
								
								var output = "";
								output += "<table class='characterSheetHeader' style='width: 190px' ";
								output += "onmouseover='showToolTip(\"" + description + "\");\' ";
								output += "onmouseout=\"hideToolTip()\"><tr>";
								output += "<td colspan='3' style='width: 180px; font-size:12px; color:black'><b>" + title + "</b>";
								if (Type != "") {
									output += "</td></tr><tr><td colspan='3' style='width: 180px'>";
									output += "<i>" + Type + "</i>";
								}
								output += "<hr /></td></tr><tr style='font-weight:bold; text-align:center'>";
								output += "<td style='width: 55px'>Dmg</td>";
								output += "<td style='width: 55px'>AP</td>";
								output += "<td style='width: 55px'>Dice</td>";
								output += "</tr><tr style='text-align:center'>";
								output += "<td style='width: 55px'>" + Damage.trim() + "</td>";
								output += "<td style='width: 55px'>" + AP.trim() + "</td>";
								output += "<td style='width: 55px'>" + Dice.trim() + "</td>";
								output += "</tr><tr>";
								if (Recoil != "") {
									output += "<td colspan='2' style='width: 120px'><b>Mode:</b> " + Mode.trim() + "</td>";
									output += "<td style='width: 60px'><b>Recoil:</b> " + Recoil.trim() + "</td>";
								} else {
									output += "<td colspan='3' style='width: 180px'>&nbsp;</td>";
								}
								output += "</tr></table>";
								
								// determine if weapon is current weapon
								if (Array2DSearchKey(innerSplit, "currentWeapon")) {
									heldWeapon = "";
									heldWeapon += "<b>" + title + "</b> (Dmg: " + Damage.trim() + " |AP: " + AP.trim() + " |";
									if (Recoil != "") {
										heldWeapon += "Rc: " + Recoil.trim() + " |Md: " + Mode.trim() + " |";
									}
									heldWeapon += "Dice: " + Dice.trim() + ")";
								}
								
								weapons[weaponCounter] = output;
								weaponCounter++;
								return "";
							}
						);
					}
					
					// Get Armor
					if (inside.indexOf("[currentOutfit") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[currentOutfit(?:=(.+?))?\]/gi, function (total, title) {
								outfitName = title;
								return "";
							}
						)
					}
					if (inside.indexOf("[armor") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[armor(?:=(.+?))?\]([\s\S]+?)\[\/armor\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("@");
								for (var i = 0; i < innerSplit.length; i++) {
									innerSplit[i] = innerSplit[i].split("*");
								}
								// create the output
								var Balistics = Array2DSearch(innerSplit, "Bal");
								Balistics = Balistics.replace(/\r?\n|\r/, "");
								Balistics = Balistics.replace(/<br\s*[\/]?>/gi, "");
								var Impact = Array2DSearch(innerSplit, "Imp");
								Impact = Impact.replace(/\r?\n|\r/, "");
								Impact = Impact.replace(/<br\s*[\/]?>/gi, "");
								var Outfit = Array2DSearch(innerSplit, "Outfit");
								Outfit = Outfit.replace(/\r?\n|\r/, "");
								Outfit = Outfit.replace(/<br\s*[\/]?>/gi, "");
								var Qualities = Array2DSearch(innerSplit, "Qualities");
								var description = "<b style=\\\"font-size:12px; color:black\\\">" + title + "</b><hr />" + Qualities;
								
								var output = "";
								output += "<table class='characterSheetHeader' style='width: 190px' ";
								output += "onmouseover='showToolTip(\"" + description + "\");\' ";
								output += "onmouseout=\"hideToolTip()\"><tr>";
								output += "<td colspan='2' style='width: 180px; font-size:12px; color:black'><b>" + title + "</b>";
								if (Outfit != "") {
									output += "</td></tr><tr><td colspan='2' style='width: 180px'>";
									output += "<i>" + Outfit + "</i>";
								}
								output += "<hr /></td></tr><tr style='font-weight:bold; text-align:center'>";
								output += "<td style='width: 90px'>Balistics</td>";
								output += "<td style='width: 90px'>Impact</td>";
								output += "</tr><tr style='text-align:center'>";
								output += "<td style='width: 90px'>" + Balistics.trim() + "</td>";
								output += "<td style='width: 90px'>" + Impact.trim() + "</td>";
								
								output += "</tr></table>";
								
								// determine if weapon is current weapon
								if (Outfit != "" && Outfit == outfitName) {
									currentOutfitBal += Number(Balistics);
									currentOutfitImp += Number(Impact);
								}
								
								armor[armorCounter] = output;
								armorCounter++;
								return "";
							}
						);
					}
					
					// Get Qualities
					if (inside.indexOf("[qualities") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[qualities(?:=(.+?))?\]([\s\S]+?)\[\/qualities\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("*");
								if (innerSplit.length == 2) {
									// determine the name
									var name = title;
									var type = innerSplit[0].trim();
									var description = "<b style=\\\"font-size:12px; color:black\\\">";
									description += name + "</b><hr />" + innerSplit[1].trim();

									// create the output
									if (name != "" && name != " ") {
										var output = "";
										output += "<div class='characterSheetHeader' style='width: 180px' ";
										output += "onmouseover='showToolTip(\"" + description + "\");\' ";
										output += "onmouseout=\"hideToolTip()\">";
										output += "<b style='font-size:12px; color:black'>" + name + "</b>";
										output += "<br /><i>" + type + "</i></div>";
										qualities[qualitiesCounter] = output;
										qualitiesCounter++;
									}
								}
							}
						);
					}
					
					// Get Contacts
					if (inside.indexOf("[contacts") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[contacts(?:=(.+?))?\]([\s\S]+?)\[\/contacts\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								
								// grab loyalty
								var loyalty = "";
								inner = inner.replace(/\bLOYALTY: \d+\b/i, function (val) {
									loyalty += Number(val.substring(9));
									return "";
								});
								
								// grab connection
								var connection = "";
								inner = inner.replace(/\bCONNECTION: \d+\b/i, function (val) {
									connection += Number(val.substring(12));
									return "";
								});
								
								// determine the name
								var name = title;
								
								var description = "<b style=\\\"font-size:12px; color:black\\\">";
								description += name + "</b><hr />" + inner;

								// create the output
								if (name != "" && name != " ") {
									var output = "";
									output += "<table class='characterSheetHeader' style='width: 180px' ";
									output += "onmouseover='showToolTip(\"" + description + "\");\' ";
									output += "onmouseout=\"hideToolTip()\"><tr>";
									output += "<td colspan='2' style='width: 180px; font-size:12px; color:black'><b>" + title + "</b>";
									output += "<hr /></td></tr><tr style='font-weight:bold; text-align:center'>";
									output += "<td style='width: 90px'>Connection</td>";
									output += "<td style='width: 90px'>Loyalty</td>";
									output += "</tr><tr style='text-align:center'>";
									output += "<td style='width: 90px'>" + connection.trim() + "</td>";
									output += "<td style='width: 90px'>" + loyalty.trim() + "</td>";
									output += "</tr></table>";
									contacts[contactsCounter] = output;
									contactsCounter++;
								}
							}
						);
					}
					
					// Get Cyber
					if (inside.indexOf("[essence") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[essence(?:=(.+?))?\]/gi, function (total, title) {
								essence = title;
								return "";
							}
						)
					}
					if (inside.indexOf("[cyber") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[cyber(?:=(.+?))?\]([\s\S]+?)\[\/cyber\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("*");
								if (innerSplit.length == 2) {
									// determine the name
									var name = title;
									var type = innerSplit[0].trim();
									var description = "<b style=\\\"font-size:12px; color:black\\\">";
									description += name + "</b><hr />" + innerSplit[1].trim();

									// create the output
									if (name != "" && name != " ") {
										var output = "";
										output += "<div class='characterSheetHeader' style='width: 180px' ";
										output += "onmouseover='showToolTip(\"" + description + "\");\' ";
										output += "onmouseout=\"hideToolTip()\">";
										output += "<b style='font-size:12px; color:black'>" + name + "</b>";
										output += "<br /><i>" + type + "</i></div>";
										cyber[cyberCounter] = output;
										cyberCounter++;
									}
								}
							}
						);
					}
					
					// Get Biotics
					if (inside.indexOf("[initiate") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[initiate(?:=(.+?))?\]/gi, function (total, title) {
								initiateGrade = Number(title);
								return "";
							}
						)
					}
					if (inside.indexOf("[biotics") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[biotics(?:=(.+?))?\]([\s\S]+?)\[\/biotics\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("*");
								if (innerSplit.length == 2) {
									// determine the name
									var name = title;
									var type = innerSplit[0].trim();
									var description = "<b style=\\\"font-size:12px; color:black\\\">";
									description += name + "</b><hr />" + innerSplit[1].trim();

									// create the output
									if (name != "" && name != " ") {
										var output = "";
										output += "<div class='characterSheetHeader' style='width: 180px' ";
										output += "onmouseover='showToolTip(\"" + description + "\");\' ";
										output += "onmouseout=\"hideToolTip()\">";
										output += "<b style='font-size:12px; color:black'>" + name + "</b>";
										output += "<br /><i>" + type + "</i></div>";
										biotics[bioticsCounter] = output;
										bioticsCounter++;
									}
								}
							}
						);
					}
					
					// Get Tech
					if (inside.indexOf("[omnitool]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[omnitool(?:=(.+?))?\]([\s\S]+?)\[\/omnitool\]/gi, function (total, title, inner) {
								inner = inner.replace(/\r?\n|\r/, "");
								inner = inner.replace(/<br\s*[\/]?>/gi, "");
								omnitool = inner;
							}
						);
					}
					if (inside.indexOf("[tech") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[tech(?:=(.+?))?\]([\s\S]+?)\[\/tech\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split("*");
								if (innerSplit.length == 2) {
									// determine the name
									var name = title;
									var type = innerSplit[0].trim();
									var description = "<b style=\\\"font-size:12px; color:black\\\">";
									description += name + "</b><hr />" + innerSplit[1].trim();

									// create the output
									if (name != "" && name != " ") {
										var output = "";
										output += "<div class='characterSheetHeader' style='width: 180px' ";
										output += "onmouseover='showToolTip(\"" + description + "\");\' ";
										output += "onmouseout=\"hideToolTip()\">";
										output += "<b style='font-size:12px; color:black'>" + name + "</b>";
										output += "<br /><i>" + type + "</i></div>";
										tech[techCounter] = output;
										techCounter++;
									}
								}
							}
						);
					}
					
					// Get Skills
					if (inside.indexOf("[dodge") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[dodge(?:=(.+?))?\]/gi, function (total, title) {
								dodgePoints = Number(title) + Number(REA) + Number(INT);
								dodgePoints = Math.ceil (dodgePoints / 3);
								return "";
							}
						)
					}
					if (inside.indexOf("[skills]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[skills(?:=(.+?))?\]([\s\S]+?)\[\/skills\]/gi, function (total, title, inner) {
								// Split the dictionary
								inner = inner.replace(/\'/gi, "`");
								var innerSplit = inner.split(/<br\s*[\/]?>/gi);
								var counter = 0;
								for (var i = 0; i < innerSplit.length; i++) {
									if (innerSplit[i] != "") {
										// determine the rank
										var rank = innerSplit[i].match(/\br\d+\b/i);
										if (rank != null) {
											rank = rank[0].split('r')[1];
											rank = rank.trim();
											rank = new Number(rank);
											innerSplit[i] = innerSplit[i].replace(/\br\d+\b/i, "");
											
										 	// determine the mod
											var mod;
											mod = innerSplit[i].match(/\bm\d+\b/i, "");
											if (mod != null) {
												mod = mod[0].split('m')[1];
												mod = mod.trim();
												mod = new Number(mod);
												innerSplit[i] = innerSplit[i].replace(/\bm\d+\b/i, "");
											} else {
												mod = 0;
											}
											
											// determine the mod
											var attr = "";
											var tot = 0;
											attr = innerSplit[i].match(/\[([\s\S]+?)\]/gi, "");
											if (attr != null) {
												attr = attr[0];
												attr = attr.trim();
												
												switch (attr) {
												case "[BOD]":
													tot = new Number (BOD);
													break;
												case "[AGI]":
													tot = new Number (AGI);
													break;
												case "[REA]":
													tot = new Number (REA);
													break;
												case "[STR]":
													tot = new Number (STR);
													break;
												case "[CHA]":
													tot = new Number (CHA);
													break;
												case "[INT]":
													tot = new Number (INT);
													break;
												case "[LOG]":
													tot = new Number (LOG);
													break;
												case "[WIL]":
													tot = new Number (WIL);
													break;
												case "[BIO]":
													tot = new Number (BIO);
													break;
												default:
													tot = 0;
													break;
												}
												if (rank != 0) {
													tot = Number(tot) + Number(mod) + Number (rank);
												} else {
													tot = Number(tot) + Number(mod) - 1;
												}
												innerSplit[i] = innerSplit[i].replace(/\[([\s\S]+?)\]/gi, "");
												name = name + " " + attr;
												attr = tot;
											} else {
												attr = 0;
											}
											
											// determine the name
											var name = innerSplit[i].trim();

											// create the output
											var output = new Object (); 
											output.name = name;
											output.rank = rank;
											output.mod = mod;
											output.total = attr;
											//output += "<table><tr><td style='width: 95px'>" + name + "</td>";
											//output += "<td class='characterSheetHeader' style='";
											//output += "width: 22px; text-align: right'>" + rank + "</td></tr></table>";
											skills[counter] = output;
											counter++;
										}

									}
								}
							}
						);
					}
					
					// conditions
					var shields = 0;
					var health = 8 + Math.ceil(Number(BOD) / 2);
					var healthPermanentWounds = 0;
					var healthWounds = 0;
					var stun = 8 + Math.ceil(Number(WIL) / 2);
					var stunPermanentWounds = 0;
					var stunWounds = 0;
					var edge = Number(EDG);
					var currentEdge = 0;
					var initiative = Number(INI);
					var extraActions = 2;
					var dodgesUsed = 0;
					var karma = 0;
					
					// Get Initiative Value
					initiative = Number(INI);
					if (Number(INP) == 4) {
						initiative = initiative + initiative;
						extraActions = 3;
					} else if (Number(INP) == 3) {
						initiative = Math.floor(initiative + (initiative / 2));
						extraActions = 3;
					}  else if (Number(INP) == 2) {
						initiative = Math.floor(initiative + (initiative / 2));
					} 
					var currentInitiative = 0;
					
					// Get Conditions
					if (inside.indexOf("[conditions]") !== -1) {
						// Find the string that is within either the items tags.
						inside.innerHTML = inside.replace(
							/\[conditions(?:=(.+?))?\]([\s\S]+?)\[\/conditions\]/gi, function (total, title, inner) {
								// find wounds
								inner = inner.replace(/\bShields: \d+\b/gi, function (val) {
									shields += Number(val.substring(9));
									return "";
								});
								inner = inner.replace(/\bHealthWoundPerma: \d+\b/gi, function (val) {
									healthPermanentWounds += Number(val.substring(18));
									return "";
								});
								inner = inner.replace(/\bHealthWound: \d+\b/gi, function (val) {
									healthWounds += Number(val.substring(13));
									return "";
								});
								inner = inner.replace(/\bStunWoundPerma: \d+\b/gi, function (val) {
									stunPermanentWounds += Number(val.substring(16));
									return "";
								});
								inner = inner.replace(/\bStunWound: \d+\b/gi, function (val) {
									stunWounds += Number(val.substring(11));
									return "";
								});
								inner = inner.replace(/\bEdge: \d+\b/gi, function (val) {
									currentEdge += Number(val.substring(6));
									return "";
								});
								inner = inner.replace(/\bActions: \d+\b/gi, function (val) {
									currentInitiative += Number(val.substring(9));
									return "";
								});
								inner = inner.replace(/\bDodge: \d+\b/gi, function (val) {
									dodgesUsed += Number(val.substring(7));
									return "";
								});
								inner = inner.replace(/\bKarma: \d+\b/gi, function (val) {
									karma += Number(val.substring(7));
									return "";
								});
								
							}
						);
					} 

					// ================================================================================
					// NEW LAYOUT CREATION
					// ================================================================================
					// create the menu arrays
					var menuButtonImages = [];
					var menuButtonOnClicks = [];
					var menuItems = [];

					// set the menu button ids
					var menuID = heading + "ShadowrunMenu";
					
					var newOutput = "";
					var tableDataCount = 0;

					// create the header
					newOutput += "";
					newOutput += "<b style='font-size:20px'>" + characterName + "</b><br />";
					newOutput += "<br /><i>" + quote + "</i><br /><br />";
					newOutput += "<table><tr><td style='width:100px; text-align:center'><img src='" + charURL + "'></td>";
					newOutput += "<td style='height: 120px; width: 450px; display:inline-block; vertical-align:text-top'>";

					// Attributes
					newOutput += "<table class='characterSheetHeader' style='width:100%; text-align:center'>";
					newOutput += "<tr style='font-weight:bold;'>";
					newOutput += "<td>BOD</td><td>AGI</td><td>REA</td><td>STR</td>";
					newOutput += "<td>CHA</td><td>INT</td><td>LOG</td><td>WIL</td>";
					newOutput += "<td>EDG</td><td>INI</td><td>INP</td><td>BIO</td></tr><tr>";
					newOutput += "<td>" + BOD + "</td><td>" + AGI + "</td><td>" + REA + "</td><td>" + STR + "</td>";
					newOutput += "<td>" + CHA + "</td><td>" + INT + "</td><td>" + LOG + "</td><td>" + WIL + "</td>";
					newOutput += "<td>" + EDG + "</td><td>" + INI + "</td><td>" + INP + "</td><td>" + BIO + "</td>";
					newOutput += "</tr></table><hr />";
					
					// Column 2
					newOutput += "<table style='width:100%'><tr>";
					
					// Skills
					newOutput += "<td style='width:60%'>";
					newOutput += "<table class='characterSheetHeader'><tr style='font-weight:bold;'>";
					newOutput += "<td style='width:180px; padding-right:5px;'>Skills</td>";
					newOutput += "<td style='text-align:center; width: 40px;'>Rank</td>";
					newOutput += "<td style='text-align:center; width: 40px;'>Total</td></tr>";
					
					for (var i = 0; i < skills.length; i++) {
						newOutput += "<tr><td style='padding-right:5px; border-bottom: 1px solid #9a9a9a'>";
						newOutput += skills[i].name;
						newOutput += "</td><td style='text-align:center; border-bottom: 1px solid #9a9a9a'>";
						newOutput += skills[i].rank;
						if (skills[i].mod != 0) {
							newOutput += "[" + skills[i].mod + "]";
						}
						newOutput += "</td><td style='text-align:center; border-bottom: 1px solid #9a9a9a'>";
						newOutput += skills[i].total;
						newOutput += "</td></tr>";
					}
					newOutput += "</table></td>";
					
					// Conditions
					newOutput += "<td style='width:40%; vertical-align:text-top'><table class='characterSheetHeader'>";
					
					
					// Shields
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Shields</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(3); i++) {
						if (i < shields) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// health
					newOutput += "<tr><td style='width:80px; border-bottom: 1px solid #9a9a9a'>";
					newOutput += "<b>Health</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(health); i++) {
						if (i < healthPermanentWounds) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else if (i < (healthPermanentWounds + healthWounds)) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/WoundSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// stun
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Stun</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(stun); i++) {
						if (i < stunPermanentWounds) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else if (i < (stunPermanentWounds + stunWounds)) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/WoundSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// Edge
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Edge</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(edge); i++) {
						if (i < currentEdge) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// Dodges
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Dodges</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(dodgePoints); i++) {
						if (i < dodgesUsed) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// Initiative
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Action Points</b></td><td style='border-bottom: 1px solid #9a9a9a'>";
					for (var i = 0; i < Number(initiative); i++) {
						if (i < currentInitiative) {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/FillSlot.png'>";
						} else {
							newOutput += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/gui/EmptySlot.png'>";
						}
						if (i % 3 == 2) {
							newOutput += " ";
						}
					}
					newOutput += "</td></tr>";
					
					// Extra Actions
					newOutput += "<tr><td style='border-bottom: 1px solid #9a9a9a'><b>Action Limit</b></td>";
					newOutput += "<td style='border-bottom: 1px solid #9a9a9a'>";
					newOutput += extraActions;
					newOutput += "</td></tr>";
					
					// Karma
					newOutput += "<tr><td><b>Karma</b></td><td>";
					newOutput += karma;
					newOutput += "</td></tr>";
					newOutput += "</table></td>";
					
					// end column 2
					newOutput += "</tr></table>";
					newOutput += "</td></tr></table><hr />";
					
					// QUALITIES
					qualitiesID = "qualities" + menuID;
					newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + qualitiesID + "')\">";
					newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Qualities</b></td>";
					newOutput += "<td style='text-align:right'>&nbsp;</td></tr></table></div>";
					newOutput += "<div style='display:none;' id='" + qualitiesID + "'>";
					if (qualities.length != 0) {
						newOutput += createShadowrunTable(qualities, 3);
					} else {
						newOutput += "None";
					}
					newOutput += "<br /></div>";
					
					// BIOTICS
					if (biotics.length != 0) {
						bioticsID = "biotics" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + bioticsID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Biotics</b></td>";
						newOutput += "<td style='text-align:right'><b>Initiate Grade:</b> " + initiateGrade + "</td></tr></table></div>";
						newOutput += "<div style='display:none;' id='" + bioticsID + "'>";
						newOutput += createShadowrunTable(biotics, 3);
						newOutput += "<br /></div>";
					}
					
					// TECH
					if (omnitool != "") {
						techID = "tech" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + techID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Tech</b></td>";
						newOutput += "<td style='text-align:right'>" + omnitool + "</td></tr></table></div>";
						newOutput += "<div style='display:none;' id='" + techID + "'>";
						newOutput += createShadowrunTable(tech, 3);
						newOutput += "<br /></div>";
					}
					
					// WEAPONS
					if (weapons.length != 0) {
						weaponsID = "weapons" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + weaponsID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Weapons</b></td>";
						newOutput += "<td style='text-align:right'>";
						// add held weapon
						if (heldWeapon != "") {
							newOutput += heldWeapon;
						}
						newOutput += "</td></tr></table></div>";
					
						newOutput += "<div style='display:none;' id='" + weaponsID + "'>";
						newOutput += createShadowrunTable(weapons, 3);
						newOutput += "<br /></div>";
					}
					
					// ARMOR
					if (armor.length != 0) {
						armorID = "armor" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + armorID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Armor</b></td>";
						newOutput += "<td style='text-align:right'>";
						// add current outfit
						if (outfitName != "") {
							newOutput += "<b>" + outfitName + " Armor</b> (Bal " + currentOutfitBal + " |Imp " + currentOutfitImp + ")";
						}
						newOutput += "</td></tr></table></div>";
						newOutput += "<div style='display:none;' id='" + armorID + "'>";
						newOutput += createShadowrunTable(armor, 3);
						newOutput += "<br /></div>";
					}
					
					// CYBERWARE/BIOWARE
					if (cyber.length != 0) {
						cyberID = "cyber" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + cyberID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Cyberware/Bioware</b></td>";
						newOutput += "<td style='text-align:right'><b>Essence</b> " + essence + "</td></tr></table></div>";
						newOutput += "<div style='display:none;' id='" + cyberID + "'>";
						newOutput += createShadowrunTable(cyber, 3);
						newOutput += "<br /></div>";
					}
					
					// GEAR
					gearID = "gear" + menuID;
					newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + gearID + "')\">";
					newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Gear</b></td>"
					newOutput += "<td style='text-align:right'><b>Credits:</b> ";
					// add money
					if (money != "") {
						newOutput += money;
					} else {
						newOutput += "$0";
					}
					newOutput += "</td></tr></table></div>";
					newOutput += "<div style='display:none;' id='" + gearID + "'>";
					
					// add items
					if (items.length != 0) {
						newOutput += createShadowrunTable(items, 3);
					}
					newOutput += "<br /></div>";
					
					// BACKGROUND
					backgroundID = "background" + menuID;
					newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + backgroundID + "')\">";
					newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Background</b></td>";
					newOutput += "<td style='text-align:right'>&nbsp;</td></tr></table></div>";
					newOutput += "<div style='display:none;' id='" + backgroundID + "'>";
					if (background != "") {
						newOutput += background;
					} else {
						newOutput += "None";
					}
					newOutput += "<br /></div>";
					
					// CONTACTS
					if (contacts.length != 0) {
						contactsID = "contacts" + menuID;
						newOutput += "<div class='characterSheetHeader' onclick=\"slide_menu('" + contactsID + "')\">";
						newOutput += "<table style='width:100%'><tr><td><b style='font-size:16px'>Contacts</b></td>";
						newOutput += "<td style='text-align:right'>&nbsp;</td></tr></table></div>";
						newOutput += "<div style='display:none;' id='" + contactsID + "'>";
						newOutput += createShadowrunTable(contacts, 3);
						newOutput += "<br /></div>";
					}
					
					return newOutput;
				}
			);
		}
	}
})();