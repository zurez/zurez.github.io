
const queryBox = document.querySelectorAll(".inputBox");
let counter = 0;

const inputs = new Array(9);

function checkIfGameEnds(inputType){
    const matches = [[0, 1, 2], [3, 4, 5], 
               [6, 7, 8], [0, 3, 6], 
               [1, 4, 7], [2, 5, 8], 
               [0, 4, 8], [2, 4, 6]] ;
    // console.log(inputs)
    for ( let match of matches){
        // console.log(match)
        try {
            const a  = inputs[match[0]];
            const b  = inputs[match[1]];
            const c  = inputs[match[2]];
            // console.log({a,b,c})
            if( a === inputType 
                && b === inputType
                && c === inputType    
            ){
                return true;
            }
        } catch (error) {
            
        }
        
    };

    return false;
}

function takeInput(e){
    e.stopPropagation();
    this.removeEventListener("click",takeInput);
    this.classList.remove("inputBox");
    let text = "X";
    if (counter%2 != 0){
        text = "0";
    }
    const index = parseInt(this.getAttribute("data-position"));
    this.innerText = text;
    inputs[index] = text;
    
    
    counter += 1;
    let endGame = false;
    if( counter > 2){
        endGame = checkIfGameEnds(text);
        console.log(endGame);
        if(endGame){
            queryBox.forEach( e => e.removeEventListener("click",takeInput));
            const event = new Event("WinEvent");
            document.dispatchEvent(event);
        }
    }
}

queryBox.forEach( e => e.addEventListener("click",takeInput));

function celebrateWin(){
    alert("Someone won something")
}

document.addEventListener("WinEvent", celebrateWin);