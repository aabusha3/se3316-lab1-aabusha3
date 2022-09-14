class pokeInfoGen{
    constructor(name="", num="", gen=0, parent="", descendant="", candy=0, evolveLvl=0, type="", weather="", atk=0, def=0, sta=0, fastMoves="",chargeMoves="") {
        this.name = name;    
        this.num = num;      
        this.gen = gen;
        this.parent = parent; 
        this.descendant = descendant; 
        this.candy = candy; 
        this.evolveLvl = evolveLvl; 
        this.type = type; 
        this.weather = weather; 
        this.atk = atk; 
        this.def = def; 
        this.sta = sta; 
        this.fastMoves = fastMoves;
        this.chargeMoves = chargeMoves;
    }

    get pName(){
        return this.name;
    }

    get pNum(){
        return this.num;
    }

	get print(){
        return "" + this.name + ":\nThis Pokemon is Num #" + this.num + " From Gen #" + this.gen + " And Has The Type: " + this.type
        + "\nIts Evovlution Stage Is At #" + this.evolveLvl + " And Needs " + this.candy + " Candies To Evolve"
        + "\nWith " + (this.parent=="None" ? "No " : this.parent + " As The ") + "Previous Evolution, And " + (this.descendant=="None" ? "No " : this.descendant + " As The ") 
        + "Next Evolution\nIt Is Found Easiest In " + this.weather + " Weather"
        + "\n\nATK: " + this.atk + " DEF: " + this.def + " STA: " + this.sta 
        + "\nFast Moves: " + this.fastMoves 
        + "\nCharge Moves: " + this.chargeMoves + "\n\n";
    }   
}

function pokeArray(){

    var genNum = 1;
    
    const bulbasaur = new pokeInfoGen("Bulbasaur", ("00"+genNum++), 1, "None", "Ivysaur", 25, 1, "Grass / Poison", "Clear / Cloudy", 118, 118, 90, "Tackle / Vine Whip", "Sludge Bomb / Seed Bomb / Power Whip");
    const ivysaur = new pokeInfoGen("Ivysaur", ("00"+genNum++), 1, "Bulbasaur", "Venusaur", 100, 2, "Grass / Poison", "Clear / Cloudy", 151, 151, 120, "Razor Leaf / Vine Whip", "Sludge Bomb / Solar Beam / Power Whip");
    const venusaur = new pokeInfoGen("Venusaur", ("00"+genNum++), 1, "Ivysaur", "None", 0, 3, "Grass / Poison", "Clear / Cloudy", 198, 198, 160, "Razor Leaf / Vine Whip", "Sludge Bomb / Solar Beam / Petal Blizzard");
    
    const charmander = new pokeInfoGen("Charmander", ("00"+genNum++), 1, "None", "Charmeleon", 25, 1, "Fire", "Clear", 116, 96, 78, "Ember / Scratch", "Flame Burst / Flamethrower / Flame Charge");
    const charmeleon = new pokeInfoGen("Charmeleon", ("00"+genNum++), 1, "Charmander", "Charizard", 100, 2, "Fire", "Clear", 158, 126, 116, "Ember / Fire Fang", "Flame Burst / Flamethrower / Fire Punch");
    const charizard = new pokeInfoGen("Charizard", ("00"+genNum++), 1, "Charmeleon", "None", 0, 3, "Fire / Flying", "Clear / Windy", 223, 176, 156, "Fire Spin / Air Slash", "Fire Blast / Dragon Claw / Overheat");
    
    const squirtle = new pokeInfoGen("Squirtle", ("00"+genNum++), 1, "None", "Wartortle", 25, 1, "Water", "Rain", 94, 122, 88, "Tackle / Bubble", "Aqua Jet / Aqua Tail / Water Pulse");
    const wartortle = new pokeInfoGen("Wartortle", ("00"+genNum++), 1, "Squirtle", "Blastoise", 100, 2, "Water", "Rain", 126, 155, 118, "Bite / Water Gun", "Aqua Jet / Hydro Pump / Ice Beam");
    const blastoise = new pokeInfoGen("Blastoise", ("00"+genNum++), 1, "Wartortle", "None", 0, 3, "Water", "Rain", 171, 210, 158, "Bite / Water Gun", "Ice Beam / Hydro Pump / Flash Cannon");
    
    const caterpie = new pokeInfoGen("Caterpie", ("0"+genNum++), 1, "None", "Metapod", 12, 1, "Bug", "Rain", 55, 62, 90, "Tackle / Bug Bite", "Struggle");
    const metapod = new pokeInfoGen("Metapod", ("0"+genNum++), 1, "Caterpie", "Butterfree", 50, 2, "Bug", "Rain", 45, 94, 100, "Tackle / Bug Bite", "Struggle");
    const butterfree = new pokeInfoGen("Butterfree", ("0"+genNum++), 1, "Metapod", "None", 0, 3, "Bug / Flying", "Rain / Windy", 167, 151, 120, "Struggle Bug / Confusion", "Psychic / Bug Buzz / Signal Beam");
    
    const weedle = new pokeInfoGen("Weedle", ("0"+genNum++), 1, "None", "Kakuna", 12, 1, "Bug / Poison", "Rain / Cloudy", 63, 55, 80, "Bug Bite / Poison Sting", "Struggle");
    const kakuna = new pokeInfoGen("Kakuna", ("0"+genNum++), 1, "Weedle", "Beedrill", 50, 2, "Bug / Poison", "Rain / Cloudy", 46, 86, 90, "Bug Bite / Poison Sting", "Struggle");
    const beedrill = new pokeInfoGen("Beedrill", ("0"+genNum++), 1, "Kakuna", "None", 0, 3, "Bug / Poison", "Rain / Cloudy", 169, 150, 130, "Infestation / Poison Jab", "Aerial Ace / Sludge Bomb / X-Scissor");
    
    const pidgey = new pokeInfoGen("Pidgey", ("0"+genNum++), 1, "None", "Pidgeotto", 12, 1, "Normal / Flying", "Partly Cloudy / Windy", 85, 76, 80, "Tackle / Quick Attack", "Twister / Aerial Ace / Air Cutter");
    const pidgeotto = new pokeInfoGen("Pidgeotto", ("0"+genNum++), 1, "Pidgey", "Pidgeot", 50, 2, "Normal / Flying", "Partly Cloudy / Windy", 117, 108, 126, "Wing Attack / Steel Wing", "Twister / Aerial Ace / Air Cutter");
    const pidgeot = new pokeInfoGen("Pidgeot", ("0"+genNum++), 1, "Pidgeotto", "None", 0, 3, "Normal / Flying", "Partly Cloudy / Windy", 166, 157, 166, "Air Slash / Steel Wing", "Hurricane / Aerial Ace / Brave Bird");
    
    const rattata = new pokeInfoGen("Rattata", ("0"+genNum++), 1, "None", "Raticate", 25, 1, "Normal", "Partly Cloudy", 103, 70, 60, "Tackle / Quick Attack", "Dig / Hyper Fang / Body Slam");
    const raticate = new pokeInfoGen("Raticate", ("0"+genNum), 1, "Rattata", "None", 0, 2, "Normal", "Partly Cloudy", 161, 144, 110, "Bite / Quick Attack", "Dig / Hyper Fang / Hyper Beam");
    
    var pokemonArray = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, 
        weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];
    
    return pokemonArray;
    }