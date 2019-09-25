
const queryBox = document.querySelectorAll(".inputBox");

function takeInput(e){
    e.stopPropagation();
    console.log(this,e)
}

queryBox.forEach( e => e.addEventListener("click",takeInput));