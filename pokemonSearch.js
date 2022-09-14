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