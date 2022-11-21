const readline = require('readline');
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Array of Types and Assets ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const type = ["Wind" , "Water" , "Fire" , "Plastic"];
/** a Random Dice roll between 0 and 4 */
const fourDiceRoll = Math.floor(Math.random() * 4);
/** a Random Dice roll between 0 and 6 */
const sixDiceRoll = Math.floor(Math.random() * 6) + 1;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Attack Function /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/** A Function to attack the Enemy */
const attack = (basicAttack = 10) =>{  
   
    let attack ;
    switch(sixDiceRoll){
        case 1 :
            attack = basicAttack + `Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
            break;
        case 2 :
            attack = (basicAttack + 5) + `Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
            break;
        case 3 : 
            attack = (basicAttack + 10) + `Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
            break;
        case 4 : 
        attack = (basicAttack + 15)+`Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
        break;
        case 5 :
            attack = (basicAttack + 20)+`Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
            break;
        case 6 :
            attack = (basicAttack + 25 )+`Your dice roll is ${sixDiceRoll} and your attack is ${attack} points`;
            break;
        default:
            return `Ops :( Some Thing Went wrong please try again later`;

    }
    return attack
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Defult Boss ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/** A Function to randomly assign types */
let randomType = () => {
 return type[fourDiceRoll]
};

/** Boss class  */
class DefultFighters {
    constructor(_name ) {
        this.name = _name;
        this.defence = 100;
        this.hp = 100;
        this.type = randomType();
    }
     attack = attack()
    info = ()=>{
        return `Your are Fighting ${this.name} with the type of ${this.type}`
    }
}
 let defaultA = new DefultFighters("babboyyyy");
 let defaultB = new DefultFighters("CatGirl" );
 let defaultC = new DefultFighters("Thicccccc" );
 let defaultD = new DefultFighters("Pill Cospy")

class Fighter {
    constructor() {
        this.defence = 100;
        this.hp = 100;
        this.type = randomType();
    }
    info = function () {
        console.log(`the Fighter name : ${this.name}\n${this.name} Attack Power is:${this.attack}\n${this.name} Defence is :${this.defence}`);
    };
 attack = attack();
}

let newFighter = new Fighter()


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////////////////////// boss random choies //////////////////////////////////////
const bossChoose = ()=>{

    switch(fourDiceRoll){
        case 0 :
          return defaultA;
        case 1 :
            return defaultB;
            
        case 2 :
            return defaultC;
        
        case 3 :
            return    defaultD;
        default:
            return `There is no Boss to Fight`           
    }
}

/**
 * water stronger than fire but weaker than wind
 * fire stronger than plastic but weaker than water
 * plastic stonger than wind but weaker than fire
 * wind stronger than water but weaker than plastic
 */
/** Function to determin witch type is stronger */
const typeBattle =()=>{
    
    if(newFighter.type.toLowerCase() === "water"){
        if((bossChoose().type).toLowerCase() === "fire"){ 
           bossChoose().defence = bossChoose().defence / (100 * 5)
            console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why the boss will recive a 5% lower defence`);
        }
        if((bossChoose().type).toLowerCase() === "wind"){
           newFighter.defence = newFighter.defence / (100 * 5)
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why you will recive a 5% lower defence`);
        }
    }

    if(newFighter.type.toLowerCase() === "fire"){
       if((bossChoose().type).toLowerCase() === "Plastic"){
           bossChoose().defence = bossChoose().defence / (100 * 5)
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why the boss will recive a 5% lower defence`);
       }
       if((bossChoose().type).toLowerCase() === "water"){
           newFighter.defence = newFighter.defence / (100 * 5);
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why you will recive a 5% lower defence`);
       }
    }

    if(newFighter.type.toLowerCase() === "plastic"){
       if((bossChoose().type).toLowerCase() === "wind"){
           bossChoose().defence = bossChoose().defence / (100 * 5)
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why the boss will recive a 5% lower defence`);
       }
       if((bossChoose().type).toLowerCase() === "fire"){
           newFighter.defence = newFighter.defence / (100 * 5);
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why you will recive a 5% lower defence`);
       }
    }

    if(newFighter.type.toLowerCase() === "wind"){
       if((bossChoose().type).toLowerCase() === "wind"){
           bossChoose().defence = bossChoose().defence / (100 * 5);
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why the boss will recive a 5% lower defence`);
       }
       if((bossChoose().type).toLowerCase() === "plastic"){
           newFighter.defence = newFighter.defence / (100 * 5);
           console.log(`Yor are ${newFighter.type} type and the Boss is ${bossChoose().type} thats why you will recive a 5% lower defence`);
       }
    }
}
typeBattle();
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////// Fight Function//////////////////////////////////////
 const fight = (_name)=>{
       newFighter.name = _name;
       console.log(bossChoose().info());
       typeBattle();


 }

 let startFight = readline.createInterface(process.stdin , process.stdout);
 const began = ()=>{
 startFight.question(`Do you want to start Fighting :\n(yes to continue - no to go back to the main menu) `, answer =>{
     if(answer.toLowerCase() === "yes"){
         console.clear()
             startFight.question("Enter your Fighter Name : " , name =>{
                 if(name.length > 0){
                     console.clear()
                     return fight(name)
                 }else{
                     console.log("Please Enter A Valid Name");
                     startFight.close();
                 }
             })
     }else if(answer.toLowerCase() === "no"){
         console.log("see you Next time when your are ready");
         startFight.close()
     }else{
         return began() 
     }
 }) ;
 }

//  began();