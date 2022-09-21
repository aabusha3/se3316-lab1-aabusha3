class pokeInfoGen{
    constructor(name="", num="", type="", gen=1, evoStage=0) {
        this.name = name;
        this.num = num;
        this.type = type;
        this.gen = gen;
        this.evoStage = evoStage;
    }

    get pName(){
        return this.name;
    }

    get pNum(){
        return this.num;
    }

	get print(){
        return "" + this.name + ":   #" + this.num + "   Type: " + this.type + "   Gen: " + this.gen + "   Evolution Stage: " + this.evoStage;
    }
}

function pokeArray(){
   
    const bulbasaur = new pokeInfoGen("Bulbasaur", "001", "Grass / Poison",1,1);
    const ivysaur = new pokeInfoGen("Ivysaur", "002", "Grass / Poison",1,2);
    const venusaur = new pokeInfoGen("Venusaur", "003", "Grass / Poison",1,3);
    
    const charmander = new pokeInfoGen("Charmander", "004", "Fire",1,1);
    const charmeleon = new pokeInfoGen("Charmeleon", "005", "Fire",1,2);
    const charizard = new pokeInfoGen("Charizard", "006", "Fire / Flying",1,3);
    
    const squirtle = new pokeInfoGen("Squirtle", "007", "Water",1,1);
    const wartortle = new pokeInfoGen("Wartortle", "008", "Water",1,2);
    const blastoise = new pokeInfoGen("Blastoise", "009", "Water",1,3);
    
    const caterpie = new pokeInfoGen("Caterpie", "010", "Bug",1,1);
    const metapod = new pokeInfoGen("Metapod", "011", "Bug",1,2);
    const butterfree = new pokeInfoGen("Butterfree", "012", "Bug / Flying",1,3);
    
    const weedle = new pokeInfoGen("Weedle", "013", "Bug / Poison",1,1);
    const kakuna = new pokeInfoGen("Kakuna", "014", "Bug / Poison",1,2);
    const beedrill = new pokeInfoGen("Beedrill", "015", "Bug / Poison",1,3);
    
    const pidgey = new pokeInfoGen("Pidgey", "016", "Normal / Flying",1,1);
    const pidgeotto = new pokeInfoGen("Pidgeotto", "017", "Normal / Flying",1,2);
    const pidgeot = new pokeInfoGen("Pidgeot", "018", "Normal / Flying",1,3);
    
    const rattata = new pokeInfoGen("Rattata", "019", "Normal",1,1);
    const raticate = new pokeInfoGen("Raticate", "020", "Normal",1,2);
    
    return [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, 
        weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];
}


var result = "";
var resultArrayIndex = 0;
var pokemonArray = new pokeArray();

function nameSearch(){
    var searchName = document.getElementById("nameSearch").value;

    if(/[^a-zA-Z]/.test(searchName)) {
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

    if(/[^0-9]/g.test(searchNum) || (parseInt(searchNum)  > 20 || parseInt(searchNum) < 1)){
        window.alert("Please Only Search Integers Between 1 And 20");
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