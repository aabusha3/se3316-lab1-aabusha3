class pokeInfoGen{
    constructor(name="", num="", parent="", descendant="", type="", atk=0, def=0, sta=0) {
        this.name = name;
        this.num = num;
        this.parent = parent;
        this.descendant = descendant;
        this.type = type;
        this.atk = atk;
        this.def = def;
        this.sta = sta;
    }

    get pName(){
        return this.name;
    }

    get pNum(){
        return this.num;
    }

	get print(){
        return "" + this.name + ":\nNum #" + this.num + " From Gen #1 And Has The Type: " + this.type
        + "\nIt Has " + (this.parent=="None" ? "No " : this.parent + " As The ") + "Previous Evolution, And "
        + (this.descendant=="None" ? "No " : this.descendant + " As The ") + "Next Evolution"
        + "\nATK: " + this.atk + " DEF: " + this.def + " STA: " + this.sta;
    }
}

function pokeArray(){

    var genNum = 1;
   
    const bulbasaur = new pokeInfoGen("Bulbasaur", ("00"+genNum++), "None", "Ivysaur", "Grass / Poison", 118, 118, 90);
    const ivysaur = new pokeInfoGen("Ivysaur", ("00"+genNum++), "Bulbasaur", "Venusaur", "Grass / Poison", 151, 151, 120);
    const venusaur = new pokeInfoGen("Venusaur", ("00"+genNum++), "Ivysaur", "None", "Grass / Poison", 198, 198, 160);
    
    const charmander = new pokeInfoGen("Charmander", ("00"+genNum++), "None", "Charmeleon", "Fire", 116, 96, 78);
    const charmeleon = new pokeInfoGen("Charmeleon", ("00"+genNum++), "Charmander", "Charizard", "Fire", 158, 126, 116);
    const charizard = new pokeInfoGen("Charizard", ("00"+genNum++), "Charmeleon", "None", "Fire / Flying", 223, 176, 156);
    
    const squirtle = new pokeInfoGen("Squirtle", ("00"+genNum++), "None", "Wartortle", "Water", 94, 122, 88);
    const wartortle = new pokeInfoGen("Wartortle", ("00"+genNum++), "Squirtle", "Blastoise", "Water", 126, 155, 118);
    const blastoise = new pokeInfoGen("Blastoise", ("00"+genNum++), "Wartortle", "None", "Water", 171, 210, 158);
    
    const caterpie = new pokeInfoGen("Caterpie", ("0"+genNum++), "None", "Metapod", "Bug", 55, 62, 90);
    const metapod = new pokeInfoGen("Metapod", ("0"+genNum++), "Caterpie", "Butterfree", "Bug", 45, 94, 100);
    const butterfree = new pokeInfoGen("Butterfree", ("0"+genNum++), "Metapod", "None", "Bug / Flying", 167, 151, 120);
    
    const weedle = new pokeInfoGen("Weedle", ("0"+genNum++), "None", "Kakuna", "Bug / Poison", 63, 55, 80);
    const kakuna = new pokeInfoGen("Kakuna", ("0"+genNum++), "Weedle", "Beedrill", "Bug / Poison", 46, 86, 90);
    const beedrill = new pokeInfoGen("Beedrill", ("0"+genNum++), "Kakuna", "None", "Bug / Poison", 169, 150, 130);
    
    const pidgey = new pokeInfoGen("Pidgey", ("0"+genNum++), "None", "Pidgeotto", "Normal / Flying", 85, 76, 80);
    const pidgeotto = new pokeInfoGen("Pidgeotto", ("0"+genNum++), "Pidgey", "Pidgeot", "Normal / Flying", 117, 108, 126);
    const pidgeot = new pokeInfoGen("Pidgeot", ("0"+genNum++), "Pidgeotto", "None", "Normal / Flying", 166, 157, 166);
    
    const rattata = new pokeInfoGen("Rattata", ("0"+genNum++), "None", "Raticate", "Normal", 103, 70, 60);
    const raticate = new pokeInfoGen("Raticate", ("0"+genNum), "Rattata", "None", "Normal", 161, 144, 110);
    
    return [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, 
        weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];
}


var result = "";
var resultArrayIndex = 0;
var pokemonArray = new pokeArray();

function nameSearch(){
    var searchName = document.getElementById("nameSearch").value;

    const regex = new RegExp('([a-zA-Z])');

    if(!regex.test(searchName)) {
        window.alert("Please Search Only Letters 'A-Z And 'a-z'");
        return;
    }

    for(const pokemon of pokemonArray)
        if(pokemon.pName.toLowerCase().includes(searchName.toLowerCase())){
            result+=pokemon.print + "\n\n";
            resultArrayIndex++;
            if(resultArrayIndex == 5) break;
        };
    
    if(resultArrayIndex == 0) window.alert("Search Turned Empty :(");
    else window.alert(result);

    result = "";
    resultArrayIndex = 0;
}

function nameSearchCheck(e){
    if(window.event) if(e.keyCode == 13) nameSearch();
}


function numSearch(){
    var searchNum = document.getElementById("numSearch").value;

    if(!Number.isInteger(parseFloat(searchNum)) || isNaN(parseInt(searchNum)) || (parseInt(searchNum)  > 20 || parseInt(searchNum) < 1)){
        window.alert("Please Search Only Integers Between 1 And 20");
        return;
    }

    for(const pokemon of pokemonArray)
        if(pokemon.pNum.includes(searchNum)){
            result+=pokemon.print + "\n\n";
            resultArrayIndex++;
            if(resultArrayIndex == 5) break;
        };
    
    if(resultArrayIndex == 0) window.alert("Search Turned Empty :(");
    else window.alert(result);

    result = "";
    resultArrayIndex = 0;
}

function numSearchCheck(e){
    if(window.event) if(e.keyCode == 13) numSearch();
}