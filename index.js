window.addEventListener("DOMContentLoaded" , function(){



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Defult Figthers ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


let randomType = () => {
    let random = Math.floor(Math.random() * 3 )+ 1;
    let type;
    switch (random) {
        case 1:
            type = "wood";
            break;
        case 2:
            type = "Metal";
            break;
        case 3:
            type = "Plastic";
            break;
        default:
            return `Error there is no type for the Fighter`;
    }
    return type;
};
class DefultFighters {
    constructor(_name , _attack , _defence ) {
        this.called = _name;
        this.attack = _attack;
        this.defence = _defence;
        this.type = randomType();
    }
}
let defaultA = new DefultFighters("babboyyyy" , 60 , 240);
let defaultB = new DefultFighters("CatGirl" , 10 , 700);
let defaultC = new DefultFighters("Thicccccc" , 100 , 1000 );
let defaultD = new DefultFighters("weakMan" , 69 , 420)

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////// Function and Objects building//////////////////////////////////////
/** A  class to creat fighters Objects */
function creatFighter(){
    let enterName = prompt("Enter The Fighter Name");
    if(enterName == undefined){
         return creatFighter()
    }else{
        sessionStorage.setItem("Fighter" , enterName)
    }
}
creatFighter()


class Fighter {
    constructor(_name, _attack, _defence, _type) {
        this.called = _name;
        this.attack = _attack;
        this.defence = _defence;
        this.type = randomType();
    }
    info = function () {
        console.log(`the Fighter Called : ${this.called}\n${this.called} Attack Power is:${this.attack}\n${this.called} Defence is :${this.defence}`);
    };
}




function fight(){

}
})