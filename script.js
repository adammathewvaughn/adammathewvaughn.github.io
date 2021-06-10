//document.addEventListener("DOMContentLoaded", (e) => {
   

    var FRIEND_NAME = ["Bob", "John", "Bill", "Tom", "Frank"];
    var WEAPON_NAME = [
        "raygun",
        "pistol",
        "sword",
        "club",
        "poison",
        "axe",
        "candlestick",
        "flamethrower",
        "knife",
        "throwing-star",
        "grenade",
        "lightsaber",
        "big rock",
        "flying elbow from the top rope",
        "laser-beam",
        "nunchucks",
        "sais",
        "bo staff",
        "potato-peeler",
        "poison-dart",
        "machine gun",
        "telekinetic powers",
        "hatchet",
        "brick",
    ];
  var LOCATION_NAME = [
    "stairway",
    "hallway",
    "breezeway",
    "causeway",
    "spillway",
    "alleyway",
    "highway",
    "byway",
    "freeway",
    "lobby-way",
    "foyer-way",
    "kitchen-way",
];
for (var i = 100; i >=1; i--)  {
    var h3 = document.createElement("h3");
    var accusationtext = document.createTextNode(`Accusation ${i}:`);
    var whodunnitdiv = document.createElement("div");
    var peekaboo = document.createTextNode("&#128064;");
    // var whodunnittext = document.createTextNode("Whodunnit?");
    var peekaboopara = document.createElement("p");
    h3.className = "theaccusationh3";
    h3.appendChild(accusationtext);
    document.body.appendChild(h3);
    h3.appendChild(whodunnitdiv);
    whodunnitdiv.appendChild(peekaboopara)
   // h3.prepend(whodunnitdiv);
//    whodunnitdiv.prepend(peekaboopara)
     peekaboopara.innerHTML = "&#128064; Whodunnit? &#128064;";
    //  peekaboopara.innerHTML = `&#128064;${Whodunnit}&#128064;`; 
    accusationAlert(i);
}
function accusationAlert(i) {
h3.addEventListener("click", ()=> {
   alert(`I accuse ${FRIEND_NAME[i % FRIEND_NAME.length]}, with the ${WEAPON_NAME[i % WEAPON_NAME.length]} in the ${LOCATION_NAME[i % LOCATION_NAME.length]}!`);
   console.log("click");
   });  
    };

//});