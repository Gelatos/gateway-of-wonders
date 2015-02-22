// ================================================================================
// Replace special characters
// ================================================================================
function replaceSpecialCharactersHTML(str) {
	if (str != "undefined" && str != "" && str != null) {
		str = str.replace(/\'/gi, "&lsquo;");
		str = str.replace(/\xE9/gi, "&eacute;");
		str = str.replace(/\`/gi, "&lsquo;");
        str = str.replace(/\"/gi, "\\\"");
	}
	return str;
};

// Tag Control Script 
var show_spoil = function(ele, e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	var j = ele.nextSibling;
    $(j).slideToggle ();
//	if (j.style.display === 'none') {
//	  j.style.display = 'block';
//	} else {
//	  j.style.display = 'none';
//	}
};

var getYoutubeLink = function (url) {
	var output = "";
	
	// determine what the video link is by searching the youtube link for the "v" variable
	var codeStart = url.search("v=");
	codeStart += 2;

	// extract the video code. 
	output = url.substring(codeStart);

	// If there are any other variables in the youtube link
	// (which are deprecated with the ampersand), cut that code from the string. 
	var codeEnd = output.search ("&");
	if (codeEnd != -1) {
		output = output.substring(0, (codeEnd));
	}
	
	return output;
};

var playYoutubeLink = function (ele, e, url, small) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	var j = ele.nextSibling;
	if (j.innerHTML == "") {
		var output = "";
        if (small == "undefined" || small == null) {
            output += "<br><iframe width='560' height='315' src='http://www.youtube.com/embed/";
        } else {
            output += "<br><iframe width='360' height='203' src='http://www.youtube.com/embed/";
        }
		output += url;
		output += "' frameborder='0' allowfullscreen></iframe>";
		j.innerHTML = output;
	} else {
		j.innerHTML = "";
	}
};

// ================================================================================
// 			TAGS SCRIPTS
// ================================================================================
(function() {
	var postText = document.getElementsByClassName('postcolor');
	var incrementer = postText.length;
	while (incrementer--) {
		// determine if the incrementer is accessing the correct type of post
// ================================================================================
// 			SPOILER TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[spoiler') !== -1) {
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[spoiler(?:=(.+?))?\]([\s\S]+?)\[\/spoiler\]/gi, function(total, title, inside) {
					var output = "";
					output += "<div class='spoiler-title' onclick='show_spoil(this, event)' ";
					output += "style='background-image: url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)' ";
					output += "onmouseover=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background_onclick.png)'\" ";
					output += "onmouseout=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)'\" ";
					output += ">" + (title || "Click to Reveal");
					output += "</div><div style='display:none' class='spoiler' >";
					output += inside + "</div>";
					return output;
				});
			}
			if (postText[incrementer].innerHTML.indexOf('[spoilers') !== -1) {
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[spoilers(?:=(.+?))?\]([\s\S]+?)\[\/spoilers\]/gi, function(total, title, inside) {
					var output = "";
					output += "<div class='spoiler-title' onclick='show_spoil(this, event)' ";
					output += "style='background-image: url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)' ";
					output += "onmouseover=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background_onclick.png)'\" ";
					output += "onmouseout=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)'\" ";
					output += ">" + (title || "Click to Reveal");
					output += "</div><div style='display:none' class='spoiler' >";
					output += inside + "</div>";
					return output;
				});
			}
			if (postText[incrementer].innerHTML.indexOf('[spoil') !== -1) {
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[spoil(?:=(.+?))?\]([\s\S]+?)\[\/spoil\]/gi, function(total, title, inside) {
					var output = "";
					output += "<div class='spoiler-title' onclick='show_spoil(this, event)' ";
					output += "style='background-image: url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)' ";
					output += "onmouseover=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background_onclick.png)'\" ";
					output += "onmouseout=\"this.style.backgroundImage='url(http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/spoiler_background.png)'\" ";
					output += ">" + (title || "Click to Reveal");
					output += "</div><div style='display:none' class='spoiler' >";
					output += inside + "</div>";
					return output;
				});
			}
// ================================================================================
// 			YOUTUBE TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[ytls') !== -1) {

				// Find the string that is within either the youtube tags.
				// Anything inside the regular expression is then passed to a function that will
				// create the embed code using the youtube link that is passed inside the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[ytls(?:=(.+?))?\]([\s\S]+?)\[\/ytls\]/gi, function (total, title, inside) {
					// extract the video code. 
					var youtubeCode = getYoutubeLink(title);
					
					// create the output
					var output = "";
					output += "<span class='anchorClone' onclick=\"playYoutubeLink(this, event, '" + youtubeCode + "', 'true')\">";
					output += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/youtubeicon-thumb-512x512-160230.png' />";
                    output += inside;
					output += "</span><span></span>";
					
					return output;
				});
			}
			if (postText[incrementer].innerHTML.indexOf('[ytl') !== -1) {

				// Find the string that is within either the youtube tags.
				// Anything inside the regular expression is then passed to a function that will
				// create the embed code using the youtube link that is passed inside the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[ytl(?:=(.+?))?\]([\s\S]+?)\[\/ytl\]/gi, function (total, title, inside) {
					// extract the video code. 
					var youtubeCode = getYoutubeLink(title);
					
					// create the output
					var output = "";
					output += "<span class='anchorClone' onclick=\"playYoutubeLink(this, event, '" + youtubeCode + "')\">";
					output += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/youtubeicon-thumb-512x512-160230.png' />";
                    output += inside;
					output += "</span><span></span>";
					
					return output;
				});
			}
			if (postText[incrementer].innerHTML.indexOf('[yt') !== -1) {

				// Find the string that is within either the youtube tags.
				// Anything inside the regular expression is then passed to a function that will
				// create the embed code using the youtube link that is passed inside the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[yt(?:=(.+?))?\]([\s\S]+?)\[\/yt\]/gi, function (total, title, inside) {
                    
                    // extract the video code. 
					var youtubeCode = "";
                    var mainText = "";
					
                    if (title != "" && title != null && title != "undefined" && title.search("v=") != -1) {
                        // extract the video code. 
                        youtubeCode = getYoutubeLink(title);
                        
                        if (inside != "" && inside != null && inside != "undefined") {
                            mainText = inside;
                        } else {
                            mainText = "Youtube Link";
                        }
                    } else if (inside != "" && inside != null && inside != "undefined" && inside.search("v=") != -1) {
                        // extract the video code. 
                        youtubeCode = getYoutubeLink(inside);
                        
                        if (title != "" && title != null && title != "undefined") {
                            mainText = title;
                        } else {
                            mainText = "Youtube Link";
                        }
                    }
					
					// create the output
					var output = "";
					output += "<span class='anchorClone' onclick=\"playYoutubeLink(this, event, '" + youtubeCode + "')\">";
					output += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/youtubeicon-thumb-512x512-160230.png' />";
                    output += mainText;
					output += "</span><span></span>";
					
					return output;
				});
			}
			if ((postText[incrementer].innerHTML.indexOf('[y') !== -1 || 
				postText[incrementer].innerHTML.indexOf('[youtube') !== -1 || 
				postText[incrementer].innerHTML.indexOf('[YOUTUBE') !== -1)) {

				// Find the string that is within either the youtube tags.
				// Anything inside the regular expression is then passed to a function that will
				// create the embed code using the youtube link that is passed inside the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[(y|youtube|YOUTUBE)(?:=(.+?))?\]([\s\S]+?)\[\/(y|youtube|YOUTUBE)\]/gi, function (tag, total, title, inside, tag2) {
					// extract the video code. 
					var youtubeCode = getYoutubeLink(inside);
					
					// create the output
					var output = "";
					output += "<iframe width='560' height='315' src='http://www.youtube.com/embed/";
					output += youtubeCode;
					
					// determine if there is a playlist
					if (title != "" && title != "undefined" && title != null) {
						output += "?list=" + title;
					}

					// return the embed code
					output += "' frameborder='0' allowfullscreen></iframe>";
					return output;
				});
			}
// ================================================================================
// 			INCREMENTER TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[inc]') !== -1) {
				// Find the string that is within either the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[inc\]([\s\S]+?)\[\/inc\]/gi, function (total, inner) {
					var num = 0;
					inner = inner.replace (/\[n\]/gi, function (tag, you) {
						num++;
						if (num < 10) {
							return "0" + num;
						} else {
							return num;
						}
					});
					return inner;
				});
			}
// ================================================================================
// 			TABLE TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[tbl') !== -1) {
				// Find the string that is within either the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[tbl(?:=(.+?))?\]([\s\S]+?)\[\/tbl\]/gi, function (total, delimiter, inner) {
					inner = inner.split("<br>");
                    for (var i = 0; i < inner.length; i++) {
                        if (inner[i] == "") {
                            inner[i] = "&nbsp;";
                        }
                    }
                    inner = inner.join("</td></tr><tr><td style='font-size: 12px'>");
                    inner = inner.split(delimiter);
                    inner = inner.join("</td><td style='font-size: 12px'>");
                    inner = "<table><tr><td style='font-size: 12px'>" + inner + "</td></tr></table>";
					return inner;
				});
			}
// ================================================================================
// 			COMMENT TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[comment') !== -1) {
				// Find the string that is within either the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[comment\]([\s\S]+?)\[\/comment\]/gi, function (sym) {
				
					// return the embed code
					return "";
				});
			}
// ================================================================================
// 			REPACE $ WITH POKEDOLLAR
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('$') !== -1) {

				// Find the string that is within either the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\$/gi, function (sym) {
				
					// return the embed code
					return "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Gateway%20Pictures/PokeRed.png' border='0' alt='$' />";
				});
			}
// ================================================================================
// 			HOVER BOX TAGS
// ================================================================================
			if (postText[incrementer].innerHTML.indexOf('[tooltip') !== -1) {
				// Find the string that is within either the youtube tags.
				postText[incrementer].innerHTML = postText[incrementer].innerHTML.replace(/\[tooltip(?:=(.+?))?\]([\s\S]+?)\[\/tooltip\]/gi, function (total, hoverText, inner) {
				    
                    // replace the hovertext
                    hoverText = hoverText.replace(/\<iframe([\s\S]+?)\>\<\/iframe\>/gi, function (all, inside) {
                        // extract the video code. 
                        var youtubeCode = "";
                        inside = inside.replace (/\/embed\/([\s\S]+?)\"/gi, function (anotherAll, link) {
                            youtubeCode = link;
                            return "";
                        });
                        
                        // create the output
                        var output = "";
                        output += "<iframe width=\"300\" height=\"169\" src=\"http://www.youtube.com/embed/";
                        output += youtubeCode;
                        
                        // return the embed code
                        output += "?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>";
                        return output;
                    });
                    hoverText = replaceSpecialCharactersHTML(hoverText);
                    
                    var output = "";
                    output += "<span style='cursor: pointer;' ";
                    output += "onmouseover=\'showToolTip(\"";
                    output += hoverText;
                    output += "\");\' onmouseout=\"hideToolTip()\" onclick=\"removeToolTip();\">";
                    output += inner;
                    output += "</span>";
                    
                    return output;
				});
			}
		}
})();