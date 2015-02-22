// ================================================================================
// Face Set Dictionary
// ================================================================================
var emoteFaceSet = function (imgTag, altTags, costume, emotions) {
    this.characterName = imgTag;
    this.emotes = emotions;
    this.altNames = altTags;
    this.baseImageURL = "http://i231.photobucket.com/albums/ee290/Gelatos/Basson%20Facesets/";

    // ser the emotes

    this.getEmote = function (emotion, imageExtension) {
        if (emotion == "Serious") {
            return this.baseImageURL + this.characterName + imageExtension + "-" + emotion + ".png";
        }
        for (var i = 0; i < this.emotes.length; i++) {
            if (this.emotes[i].search (emotion) >= 0) {
                return this.baseImageURL + this.characterName + imageExtension + "-" + emotion + ".png";
            }
        }
        return "";
    }
};

var emoteGeneric = new emoteFaceSet("Generic", [""], "", [""]);

var setEmotes = [];

setEmotes.push(new emoteFaceSet("Absinthe", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Agrona", [""], "", [
    "Angry", "Battle", "Bored", "Grin", "Happy", "Irate", "Rage", "Sad", "Sneer",
    "Surprised", "Thinking", "Flattered", "Confident", "Embarrassed", "Scheme", "Shocked"]));

setEmotes.push(new emoteFaceSet("AgronaNoire", ["AgronaN"], "", [
    "Angry", "Grin", "Irate", "Sad", "Sneer", "Confident", "Embarrassed", "Shocked"]));

setEmotes.push(new emoteFaceSet("Alexis", [""], "", [
    "Angry", "Battle", "Charm", "Flattered", "Embarrassed", "Grin", "Happy", "Special", "Irate",
    "Rage", "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident",
    "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("Anise", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Flattered", "Embarrassed", "Grief",
    "Grin", "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Sneer",
    "Shocked", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("Apollo", [""], "", [
    "Angry", "Battle", "Grin"]));

setEmotes.push(new emoteFaceSet("Ardos", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Ashley", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Flattered", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked",
    "Sneer", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Special", "Confused"]));

setEmotes.push(new emoteFaceSet("AshleyLioness", ["AshL"], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Flattered", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked", "Dumbfound", "Sly",
    "Sneer", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("AshleyNoire", ["NAshley", "NAsh", "AshleyN"], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Irate", "Rage", "Sad", "Sneer",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Blair", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Special", "Irate",
    "Rage", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident",
    "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("Carlos", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Shocked", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("CarlosNoire", ["CarlosN"], "", [
    "Angry", "Embarrassed", "Grin", "Happy", "Irate", "Sad", "Shocked", "Sneer", "Surprised"]));

setEmotes.push(new emoteFaceSet("Conall", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Grin", "Happy",
    "Irate", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Grief", "Guilt", "Hurt", "Rage"]));

setEmotes.push(new emoteFaceSet("Cyrus", [""], "", [
    "Angry", "Battle", "Grin", "Happy", "Irate", "Scheme", "Sneer", "Surprised", "Thinking",
    "Bored", "Sad", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("Doodle", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Flattered", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked", "Dumbfound", "Sly",
    "Sneer", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("Douglas", [""], "", [
   "Angry", "Battle", "Grin", "Happy", "Rage", "Sad", "Shocked",
   "Sneer", "Bored", "Confident", "Guilt", "Grief", "Hurt"]));

setEmotes.push(new emoteFaceSet("DouglasNoire", ["DouglasN"], "", [
   "Angry", "Grin", "Happy", "Sad", "Sneer", "Bored", "Confident", "Guilt"]));

setEmotes.push(new emoteFaceSet("EDI", [""], "", [
    "Angry", "Embarrassed", "Grin", "Irate", "Rage", "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("EDILioness", ["EDIL"], "", [
    "Angry", "Embarrassed", "Grin", "Irate", "Rage", "Sad", "Sneer", "Surprised", "Thinking",
    "Confident", "Bored", "Dumbfound"]));

setEmotes.push(new emoteFaceSet("Eden", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Shocked", "Surprised", "Thinking",
    "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("EdenNoire", ["EdenN"], "", [
    "Angry", "Bored", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Sad", 
    "Shocked", "Thinking", "Worry"]));

setEmotes.push(new emoteFaceSet("Elwyn", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Shocked", "Surprised",
    "Thinking", "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("ElwynNoire", ["ElwynN"], "", [
    "Angry", "Bored", "Confident", "Embarrassed", "Grin",
    "Happy", "Irate", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Erebus", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Farran", [""], "", [
    "Angry", "Battle", "Bored", "Confident", "Embarrassed", "Grin", "Irate", "Rage",
    "Sad", "Scheme", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Fluttera", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("FlutteraNoire", ["FlutteraN"], "", [
    "Angry", "Battle", "Bored", "Embarrassed", "Grin", "Irate", "Rage", "Sad", 
    "Sneer", "Surprised"]));

setEmotes.push(new emoteFaceSet("Gabriel", [""], "", [
    "Angry", "Battle", "Charm", "Flattered", "Embarrassed", "Grin", "Happy",
    "Irate", "Rage", "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Special", "Thinking",
    "Bored", "Confident", "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("GabrielNoire", ["NGabriel", "GabrielN"], "", [
    "Angry", "Battle", "Charm", "Confident", "Elated", "Fear", "Flattered", "Grief", 
    "Guilt", "Embarrassed", "Grin", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", 
    "Shocked", "Sneer", "Surprised", "Thinking", "Worry",]));

setEmotes.push(new emoteFaceSet("Garnet", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sneer",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Garren", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Embarrassed", "Grin", "Happy", "Special",
    "Irate", "Rage", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Bored",
    "Confident", "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry", "Flattered"]));

setEmotes.push(new emoteFaceSet("GarrenNoire", ["GarrenN"], "", [
    "Angry", "Battle", "Bored", "Charm", "Grin", "Happy", "Irate", "Rage", "Sneer", 
    "Surprised", "Thinking", "Confident", "Hurt"]));

setEmotes.push(new emoteFaceSet("Gerome", [""], "", [
    "Angry", "Bored", "Battle", "Charm", "Confident", "Embarrassed", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Sneer", "Shocked", 
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("GeromeNoire", ["NGerome", "GeromeN"], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Grief", "Grin", 
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Sneer", "Surprised",
    "Thinking"]));

setEmotes.push(new emoteFaceSet("Gonzalo", [""], "", [
    "Angry", "Battle", "Bored", "Confident", "Embarrassed", "Grin", "Guilt", "Happy", "Irate",
    "Rage", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Fear", "Upset", "Worry",
    "Flattered"]));

setEmotes.push(new emoteFaceSet("Grey", [""], "", [
    "Angry", "Bored", "Battle", "Confident", "Embarrassed", "Grief", "Grin", "Guilt", "Happy",
    "Irate", "Rage", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Elated", "Fear",
    "Upset", "Flattered"]));

setEmotes.push(new emoteFaceSet("Haku", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Flattered", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked", "Dumbfound", "Sly",
    "Sneer", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("Haku2", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Flattered", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked", "Dumbfound", "Sly",
    "Sneer", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("Isaac", [""], "", [
    "Angry", "Mega", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Special", "Irate", "Rage",
    "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Dumbfound", 
    "Sly", "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry", "Flattered", "Confused"]));

setEmotes.push(new emoteFaceSet("Ivan", [""], "", [
    "Angry", "Battle", "Embarrassed", "Happy", "Irate", "Rage", "Sad", "Scheme", "Shocked",
    "Sneer", "Surprised", "Thinking", "Bored", "Fear", "Upset", "Worry", "Confident", "Grief",
    "Guilt", "Hurt"]));

setEmotes.push(new emoteFaceSet("James", [""], "", [
    "Angry", "Bored", "Battle", "Confident", "Charm", "Embarrassed", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Rage", "Sad", "Scheme", "Shocked", "Sneer", "Dumbfound", 
    "Sly", "Surprised", "Thinking", "Elated", "Fear", "Upset", "Worry", "Flattered", "Confused"]));

setEmotes.push(new emoteFaceSet("Jason", [""], "", [
    "Angry", "Battle", "Bored", "Battle", "Confident", "Embarrassed", "Grief", "Grin", "Guilt",
    "Happy", "Sad", "Surprised", "Thinking", "Elated", "Fear", "Flattered", "Special"]));

setEmotes.push(new emoteFaceSet("JasonNoire", ["JasonN"], "", [
    "Angry", "Bored", "Confident", "Embarrassed","Grin", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("JenetteNoire", ["JenetteN"], "", [
    "Angry", "Battle", "Bored", "Happy", "Irate", "Sneer", "Grin", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Jun", [""], "", [
    "Angry", "Battle", "Grin", "Happy", "Irate", "Rage", "Sad", "Scheme", "Shocked",
    "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Justin", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Sad",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("JustinNoire", ["JustinN"], "", [
    "Embarrassed", "Grin", "Happy", "Irate", "Sad", "Surprised"]));

setEmotes.push(new emoteFaceSet("Kai", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad",
    "Shocked", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Karen", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad", "Scheme",
    "Shocked", "Sneer", "Surprised", "Thinking", "Guilt", "Grief", "Hurt", "Fear",
    "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("KarenNoire", ["KarenN"], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Irate", "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Katie", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Shocked", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("KatieNoire", ["KatieN"], "", [
    "Embarrassed", "Grin", "Happy", "Irate", "Sad", "Sneer", "Surprised"]));

setEmotes.push(new emoteFaceSet("Keenan", [""], "", [
    "Battle", "Grin", "Hurt", "Irate", "Sad", "Scheme", "Surprised"]));

setEmotes.push(new emoteFaceSet("LanNoire", ["LanN"], "", [
    "Angry", "Bored", "Grin", "Worry"]));

setEmotes.push(new emoteFaceSet("Laurent", [""], "", [
    "Angry", "Bored", "Battle", "Embarrassed", "Grief", "Grin", "Happy", "Hurt",
    "Irate", "Rage", "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Legion", [""], "", [
    "Angry", "Battle", "Embarrassed", "Irate", "Sad", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Lennon", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident",
    "Guilt", "Hurt", "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("Lia", [""], "", [
    "Angry", "Bored", "Battle", "Confident", "Embarrassed", "Grief", "Grin", "Happy",
    "Rage", "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Fear",
    "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("MaiNoire", ["MaiN"], "", [
    "Angry", "Battle", "Irate", "Grin", "Sneer", "Surprised", "Bored", "Confident", 
    "Happy", "Shocked"]));

setEmotes.push(new emoteFaceSet("Maxus", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad",
    "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt", "Grief",
    "Hurt", "Fear", "Upset", "Worry", "Flattered"]));

setEmotes.push(new emoteFaceSet("MaxusNoire", ["MaxusN"], "", [
    "Angry", "Charm", "Embarrassed", "Happy", "Irate", "Rage", "Special",
    "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt"]));

setEmotes.push(new emoteFaceSet("Meera", ["Mira"], "", [
    "Angry", "Battle", "Bored", "Charm", "Embarrassed", "Grin", "Happy", "Special", "Rage",
    "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Confident", "Grief",
    "Guilt", "Hurt", "Upset"]));

setEmotes.push(new emoteFaceSet("Meir", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad", "Scheme",
    "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt", "Grief",
    "Elated", "Fear", "Upset", "Worry", "Flattered", "Special"]));

setEmotes.push(new emoteFaceSet("Miller", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Miras", [""], "", [
    "Angry", "Battle", "Charm", "Flattered", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident",
    "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry", "Confused"]));

setEmotes.push(new emoteFaceSet("MirasNoire", ["MirasN"], "", [
    "Angry", "Confused", "Flattered", "Irate", "Scheme", "Grin", "Sad",
    "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt", "Grief", "Upset"]));

setEmotes.push(new emoteFaceSet("Mordecai", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad", "Scheme",
    "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Grief"]));

setEmotes.push(new emoteFaceSet("MordecaiNoire", ["MordecaiN", "MordinN", "MordN"], "", [
    "Angry", "Embarrassed", "Grin", "Irate", "Sneer", "Surprised", 
    "Bored", "Confident", "Battle"]));

setEmotes.push(new emoteFaceSet("Naico", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Sad", "Sneer",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Niahm", [""], "", [
    "Angry", "Battle", "Grin", "Happy", "Irate", "Rage", "Sad", "Scheme", "Sneer",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Oren", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Confident", "Embarrassed", "Grief", "Grin",
    "Guilt", "Happy", "Hurt", "Irate", "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Proton", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad", "Sneer",
    "Surprised"]));

setEmotes.push(new emoteFaceSet("ProfAlder", ["Alder"], "", [
    "Angry", "Grin", "Rage", "Surprised"]));

setEmotes.push(new emoteFaceSet("Rayner", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt", "Grief"]));

setEmotes.push(new emoteFaceSet("ReinaNoire", ["ReinaN"], "", [
    "Angry", "Battle", "Grin", "Happy", "Rage", "Sneer", "Surprised"]));

setEmotes.push(new emoteFaceSet("Sandro", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Skipper", [""], "", [
    "Angry", "Battle", "Embarrassed", "Grin", "Happy", "Irate", "Sad", "Shocked", "Sneer",
    "Surprised"]));

setEmotes.push(new emoteFaceSet("SnakeLady", [""], "", [
    "Angry", "Bored", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Special",
    "Irate", "Rage", "Sad", "Scheme", "Shocked", "Sneer", "Surprised", "Thinking",
    "Elated", "Fear", "Upset", "Worry"]));

setEmotes.push(new emoteFaceSet("Teri", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad",
    "Shocked", "Sneer", "Surprised", "Thinking", "Bored", "Confident", "Guilt", "Grief"]));

setEmotes.push(new emoteFaceSet("Tim", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Tony", ["Ton"], "", [
    "Angry", "Battle", "Confused", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Sneer", "Scheme", "Shocked", "Surprised", "Thinking", "Bored", "Flattered", "Dumbfound", 
    "Sly", "Confident", "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry", "Special"]));

setEmotes.push(new emoteFaceSet("TSmokes", ["TonySmokes", "TonyS"], "", [
    "Angry", "Bored", "Confused", "Embarrassed", "Grin", "Happy", "Irate", "Rage", "Sad", 
    "Sneer", "Scheme", "Surprised", "Thinking", "Bored", "Flattered", "Confident", "Guilt"]));

setEmotes.push(new emoteFaceSet("TonyNoire", ["TonyN"], "", [
    "Angry", "Embarrassed", "Grin", "Irate", "Surprised", "Thinking", "Confident", 
    "Worry", "Special"]));

setEmotes.push(new emoteFaceSet("Vanessa", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Wes", [""], "", [
    "Battle"]));

setEmotes.push(new emoteFaceSet("Whitney", [""], "", [
    "Angry", "Battle", "Bored", "Charm", "Embarrassed", "Grin", "Happy", "Irate", "Rage",
    "Sad", "Sneer", "Scheme", "Shocked", "Surprised", "Thinking", "Confident", "Guilt",
    "Grief", "Hurt", "Elated", "Fear", "Worry"]));

setEmotes.push(new emoteFaceSet("Wystan", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Grin", "Happy", "Special", "Irate",
    "Rage", "Sad", "Sneer", "Surprised", "Thinking", "Bored", "Guilt", "Hurt",
    "Elated", "Fear", "Upset", "Flattered"]));

setEmotes.push(new emoteFaceSet("Yuya", [""], "", [
    "Angry", "Battle", "Charm", "Embarrassed", "Flattered", "Grin", "Happy", "Special",
    "Irate", "Scheme", "Rage", "Sad", "Shocked", "Sneer", "Surprised", "Thinking", "Bored",
    "Confident", "Guilt", "Grief", "Hurt", "Elated", "Fear", "Upset", "Worry", "Confused"]));

// ===============================================
// pokemon
// ===============================================

setEmotes.push(new emoteFaceSet("Alakazam", ["Al"], "", [
    "Angry", "Bored", "Elated", "Embarrassed", "Flattered", "Happy", "Sad", "Sneer",
    "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Chain", [""], "", [
    "Angry", "Bored", "Charm", "Confident", "Dumbfound", "Elated", "Embarrassed", 
    "Flattered", "Guilt", "Grin", "Happy", "Irate", "Rage", "Sad", "Shocked", "Sneer", 
    "Surprised", "Thinking", "Upset"]));

setEmotes.push(new emoteFaceSet("Carpet", [""], "", [
    "Angry", "Bored", "Fear", "Grief", "Happy", "Rage", "Sad", "Surprised"]));

setEmotes.push(new emoteFaceSet("Chesnaught", ["Spike"], "", [
    "Angry", "Bored", "Happy", "Rage", "Sad", "Surprised", "Charm", "Confident", "Dumbfound",
    "Elated", "Embarrassed", "Flattered", "Grin", "Irate", "Thinking", "Sneer"]));

setEmotes.push(new emoteFaceSet("Emolga", ["Molga"], "", [
    "Angry", "Bored", "Confident", "Elated", "Embarrassed", "Grief", "Grin", 
    "Happy", "Irate", "Sad", "Sneer", "Surprised", "Thinking", "Sly", "Shocked"]));

setEmotes.push(new emoteFaceSet("Excadrill", ["Snickers"], "", [
    "Angry", "Bored", "Confident", "Elated", "Embarrassed", "Flattered", "Grin", 
    "Guilt", "Happy", "Irate", "Sad", "Sneer", "Surprised", "Thinking", "Worry"]));

setEmotes.push(new emoteFaceSet("Golurk", ["TAl"], "", [
    "Angry", "Sad", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Greninja", ["Dan"], "", [
    "Angry", "Bored", "Elated", "Embarrassed", "Grin", "Guilt", "Happy", "Irate", 
    "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Hera", [""], "", [
    "Hurt"]));

setEmotes.push(new emoteFaceSet("Infernape", ["Angus"], "", [
    "Angry", "Bored", "Elated", "Embarrassed", "Grin", "Guilt", "Happy", "Irate", 
    "Sad", "Sneer", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Larvitar", ["Gobi"], "", ["Grin"
    ]));

setEmotes.push(new emoteFaceSet("Lithe", [""], "", [
    "Angry", "Bored", "Embarrassed", "Flattered", "Grin", "Happy", "Irate", "Sad",
    "Shocked", "Surprised", "Sneer", "Thinking"]));

setEmotes.push(new emoteFaceSet("Lucario", [""], "", [
    "Angry", "Bored", "Confident", "Embarrassed", "Guilt", "Grin", "Happy", "Irate",
    "Sad", "Sneer", "Surprised", "Thinking", "Rage", "Scheme"]));

setEmotes.push(new emoteFaceSet("Noire", [""], "", [
    "Angry", "Bored", "Confident", "Embarrassed", "Grin", "Happy", "Irate",
    "Sneer", "Surprised", "Thinking", "Rage"]));

setEmotes.push(new emoteFaceSet("Pinsir", ["Wrath"], "", [
    "Angry", "Bored", "Happy", "Rage", "Sad", "Surprised", "Thinking"]));

setEmotes.push(new emoteFaceSet("Sableye", ["Devil"], "", [
    "Angry", "Embarrassed", "Happy", "Grin", "Sad", "Surprised", "Embarrassed"]));

setEmotes.push(new emoteFaceSet("Scyther", ["Fury"], "", [
    "Angry", "Bored", "Confident", "Embarrassed", "Flattered", "Happy", "Irate", "Rage",
    "Sad", "Surprised", "Shocked", "Thinking"]));

setEmotes.push(new emoteFaceSet("Tomp", [""], "", [
    "Angry", "Bored", "Confident", "Elated", "Embarrassed", "Flattered", "Grin", "Happy",
    "Sad", "Sneer", "Surprised", "Thinking"]));

function showAllFacesets(emoteSet, extention, showEverything) {
    var output = "<table>";
    var outputCount = 0;
    var row1 = "<tr><td>";
    var row2 = "<tr><td>";
    var emotion = "";
    
    if (emoteSet.getEmote ("Battle") != "" || showEverything == true) {
        row1 += "</td><td colspan='2'><img src='" + emoteSet.getEmote ("Battle", extention) + "' title='Battle' />";
        row2 += "</td><td colspan='2'>Battle<br />";
        outputCount += 2;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote ("Mega") != "" || showEverything == true) {
        row1 += "</td><td colspan='2'><img src='" + emoteSet.getEmote ("Mega", extention) + "' title='Mega' />";
        row2 += "</td><td colspan='2'>Mega<br />";
        outputCount += 2;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Serious") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote ("Serious", extention) + "' title='Serious' />";
        row2 += "</td><td>Serious<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Bored") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote ("Bored", extention) + "' title='Bored' />";
        row2 += "</td><td>Bored<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote ("Grin") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Grin", extention) + "' title='Grin' />";
        row2 += "</td><td>Grin<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Happy") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Happy", extention) + "' title='Happy' />";
        row2 += "</td><td>Happy<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Elated") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Elated", extention) + "' title='Elated' />";
        row2 += "</td><td>Elated<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Flattered") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Flattered", extention) + "' title='Flattered' />";
        row2 += "</td><td>Flattered<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Confident") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Confident", extention) + "' title='Confident' />";
        row2 += "</td><td>Confident<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Irate") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Irate", extention) + "' title='Irate' />";
        row2 += "</td><td>Irate<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Hurt") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Hurt", extention) + "' title='Hurt' />";
        row2 += "</td><td>Hurt<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Sneer") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Sneer", extention) + "' title='Sneer' />";
        row2 += "</td><td>Sneer<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Angry") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Angry", extention) + "' title='Angry' />";
        row2 += "</td><td>Angry<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Rage") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Rage", extention) + "' title='Rage' />";
        row2 += "</td><td>Rage<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Embarrassed") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Embarrassed", extention) + "' title='Embarrassed' />";
        row2 += "</td><td>Embarrassed<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Guilt") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Guilt", extention) + "' title='Guilt' />";
        row2 += "</td><td>Guilt<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Worry") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Worry", extention) + "' title='Worry' />";
        row2 += "</td><td>Worry<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Sad") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Sad", extention) + "' title='Sad' />";
        row2 += "</td><td>Sad<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Upset") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Upset", extention) + "' title='Upset' />";
        row2 += "</td><td>Upset<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Grief") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Grief", extention) + "' title='Grief' />";
        row2 += "</td><td>Grief<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Fear") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Fear", extention) + "' title='Fear' />";
        row2 += "</td><td>Fear<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Thinking") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Thinking", extention) + "' title='Thinking' />";
        row2 += "</td><td>Thinking<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Sly") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Sly", extention) + "' title='Sly' />";
        row2 += "</td><td>Sly<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Scheme") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Scheme", extention) + "' title='Scheme' />";
        row2 += "</td><td>Scheme<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Confused") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Confused", extention) + "' title='Confused' />";
        row2 += "</td><td>Confused<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Dumbfound") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Dumbfound", extention) + "' title='Dumbfound' />";
        row2 += "</td><td>Dumbfound<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Surprised") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Surprised", extention) + "' title='Surprised' />";
        row2 += "</td><td>Surprised<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Shocked") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Shocked", extention) + "' title='Shocked' />";
        row2 += "</td><td>Shocked<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Charm") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Charm", extention) + "' title='Charm' />";
        row2 += "</td><td>Charm<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    if (emoteSet.getEmote("Special") != "" || showEverything == true) {
        row1 += "</td><td><img src='" + emoteSet.getEmote("Special", extention) + "' title='Special' />";
        row2 += "</td><td>Special<br />";
        outputCount++;
        if (outputCount >= 5) {
            outputCount = 0;
            output += row1 + "</td></tr>" + row2 + "</td></tr>";
            row1 = "<tr><td>";
            row2 = "<tr><td>";
        }
    }
    output += row1 + "</td></tr>" + row2 + "</td></tr></table>";
    return output;
};

function getEmoteSet(title) {
    for (var i = 0; i < setEmotes.length; i++) {
        if (title == setEmotes[i].characterName) {
            return setEmotes[i];
        } else {
            for (var j = 0; j < setEmotes[i].altNames.length; j++) {
                if (title == setEmotes[i].altNames[j]) {
                    return setEmotes[i];
                }
            }
        }
    }

    return emoteGeneric;
};

function generateFacesetOutput(img, tableOpened, title) {
    var output = "";
    if (tableOpened) {
        output += "</td></tr>";
    }
    output += "<tr><td style='vertical-align:bottom'>";
    output += "<img src='" + img + "' title='" + title + "'/>";
    output += "</td><td style='font-size: 12px; line-height: 160%'>";
    return output;
};

function drawImage(canvas, image, inverse, x, y) {
    var ctx = canvas.getContext("2d");
    if (inverse == true) {
        ctx.save();
        var flipAxis = canvas.width / 2;
        ctx.translate(flipAxis, 0);
        ctx.scale(-1, 1);
        ctx.translate(-flipAxis, 0);
        ctx.drawImage(image, x, y);
        ctx.restore();
    } else {
        ctx.drawImage(image, x, y);
    }
};

var emoteBattleImage = function (canvas, imageSrc, index, align, inverse) {
    this.image = new Image();
    this.index = index;
    this.x = align * index + (align / 2);
    this.battleCanvas = canvas;
    this.inverse = inverse;

    this.drawIt = function () {
        var adjustedX = this.x - (this.image.width / 2);
        var y = 165 - this.image.height - 8;
        drawImage(this.battleCanvas, this.image, inverse, adjustedX, y);
    }
    this.image.src = imageSrc;
    this.image.onload = this.drawIt.bind(this);
};

function replaceEmotes(title, extention, inner) {
    // determine the emote set
    var emoteSet = getEmoteSet(title);

    var tableOpened = false;

    // show all
    inner = inner.replace(/\[(showAll|seeAll)\]/gi, function (val, alignment) {
        var output = showAllFacesets(emoteSet, extention);
        return output;
    });

    // check for anger
    inner = inner.replace(/\[(angry|anger)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Angry", extention), tableOpened, "angry");
        tableOpened = true;
        return output;
    });

    // check for battle
    inner = inner.replace(/\[(battle|versus)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Battle", extention), tableOpened, "battle");
        tableOpened = true;
        return output;
    });

    // check for bored
    inner = inner.replace(/\[bored(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Bored", extention), tableOpened, "bored");
        tableOpened = true;
        return output;
    });

    // check for charm
    inner = inner.replace(/\[(charm|charming)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Charm", extention), tableOpened, "charm");
        tableOpened = true;
        return output;
    });

    // check for confident
    inner = inner.replace(/\[(confident|confidence)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Confident", extention), tableOpened, "confident");
        tableOpened = true;
        return output;
    });

    // check for confused
    inner = inner.replace(/\[(confused|confuse)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Confused", extention), tableOpened, "confused");
        tableOpened = true;
        return output;
    });

    // check for dumbfound
    inner = inner.replace(/\[(dumbfound|stunned)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Dumbfound", extention), tableOpened, "dumbfound");
        tableOpened = true;
        return output;
    });

    // check for flattered
    inner = inner.replace(/\[(flattered|flatter|cute)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Flattered", extention), tableOpened, "flattered");
        tableOpened = true;
        return output;
    });

    // check for embarrassed
    inner = inner.replace(/\[(embarassed|embarrassed|embarass|embarrassment)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Embarrassed", extention), tableOpened, "embarrassed");
        tableOpened = true;
        return output;
    });

    // check for elated
    inner = inner.replace(/\[(elated|elation)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Elated", extention), tableOpened, "elated");
        tableOpened = true;
        return output;
    });

    // check for elated
    inner = inner.replace(/\[(fear|fearful|scared|scare)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Fear", extention), tableOpened, "fear");
        tableOpened = true;
        return output;
    });

    // check for grief
    inner = inner.replace(/\[grief(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Grief", extention), tableOpened, "grief");
        tableOpened = true;
        return output;
    });

    // check for grin
    inner = inner.replace(/\[(grin|smirk)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Grin", extention), tableOpened, "grin");
        tableOpened = true;
        return output;
    });

    // check for guilt
    inner = inner.replace(/\[guilt(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Guilt", extention), tableOpened, "guilt");
        tableOpened = true;
        return output;
    });

    // check for happy
    inner = inner.replace(/\[hurt(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Hurt", extention), tableOpened, "hurt");
        tableOpened = true;
        return output;
    });

    // check for happy
    inner = inner.replace(/\[happy(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Happy", extention), tableOpened, "happy");
        tableOpened = true;
        return output;
    });

    // check for irate
    inner = inner.replace(/\[irate(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Irate", extention), tableOpened, "irate");
        tableOpened = true;
        return output;
    });

    // check for mega
    inner = inner.replace(/\[mega(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Mega", extention), tableOpened, "mega");
        tableOpened = true;
        return output;
    });

    // check for rage
    inner = inner.replace(/\[rage(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Rage", extention), tableOpened, "rage");
        tableOpened = true;
        return output;
    });

    // check for sad
    inner = inner.replace(/\[(sad|sadness)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Sad", extention), tableOpened, "sad");
        tableOpened = true;
        return output;
    });

    // check for scheme
    inner = inner.replace(/\[(scheme|scheming)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Scheme", extention), tableOpened, "scheme");
        tableOpened = true;
        return output;
    });

    // check for serious
    inner = inner.replace(/\[(serious|neutral)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Serious", extention), tableOpened, "serious");
        tableOpened = true;
        return output;
    });

    // check for shock
    inner = inner.replace(/\[(shocked|shock)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Shocked", extention), tableOpened, "shocked");
        tableOpened = true;
        return output;
    });

    // check for sly
    inner = inner.replace(/\[(sly)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Sly", extention), tableOpened, "sly");
        tableOpened = true;
        return output;
    });

    // check for sneer
    inner = inner.replace(/\[sneer(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Sneer", extention), tableOpened, "sneer");
        tableOpened = true;
        return output;
    });

    // check for special
    inner = inner.replace(/\[(special|incognito)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Special", extention), tableOpened, "special");
        tableOpened = true;
        return output;
    });

    // check for surprised
    inner = inner.replace(/\[(surprise|surprised)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Surprised", extention), tableOpened, "surprised");
        tableOpened = true;
        return output;
    });

    // check for thinking
    inner = inner.replace(/\[(think|thinking|thought|thoughtful)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Thinking", extention), tableOpened, "thinking");
        tableOpened = true;
        return output;
    });

    // check for upset
    inner = inner.replace(/\[(upset)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Upset", extention), tableOpened, "upset");
        tableOpened = true;
        return output;
    });

    // check for worry
    inner = inner.replace(/\[(worry|worried)(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = generateFacesetOutput(emoteSet.getEmote("Worry", extention), tableOpened, "worry");
        tableOpened = true;
        return output;
    });

    // check for blank
    inner = inner.replace(/\[(?:=(.+?))?\]/gi, function (val, alignment) {
        var output = "";
        if (tableOpened) {
            output += "</td></tr>";
        }
        output += "<tr><td style='vertical-align:bottom'>";
        output += "<img src='http://i231.photobucket.com/albums/ee290/Gelatos/Basson%20Facesets/BlankFace.png' title='blank'/>";
        output += "</td><td style='font-size: 12px; line-height: 160%'>";
        
        return output;
    });

    return inner;
};

function addSpeechBubbles (textSearch) {
    textSearch = textSearch.replace(/\"(?:\((.+?)\))?([\s\S]+?)\"/gi, function (totes, type, inside) {
        output = "<div class='";
        if (type == "speech" || type == undefined || type == "") {
            output += "bubble speech";
        } else if (type == "thought" || type == "t") {
            output += "bubble thought";
        } else if (type == "whisper" || type == "w") {
            output += "bubble whisper";
        } else if (type == "yell" || type == "y") {
            output += "bubble yell";
        } else if (type == "tech" || type == "e") {
            output += "bubble tech";
        }
        output += "'>" + inside + "</div>";
        return output;
    });
    textSearch = textSearch.replace(/\u201C(?:\((.+?)\))?([\s\S]+?)\u201D/gi, function (totes, type, inside) {
        output = "<div class='";
        if (type == "speech" || type == undefined || type == "") {
            output += "bubble speech";
        } else if (type == "thought" || type == "t") {
            output += "bubble thought";
        } else if (type == "whisper" || type == "w") {
            output += "bubble whisper";
        } else if (type == "yell" || type == "y") {
            output += "bubble yell";
        } else if (type == "tech" || type == "e") {
            output += "bubble tech";
        }
        output += "'>" + inside + "</div>";
        return output;
    });
    return textSearch;
};