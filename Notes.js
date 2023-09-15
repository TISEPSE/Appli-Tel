const noteContainer = document.querySelector(".note-container");
const creatBtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function shownote(){
    noteContainer.innerHTML = localStorage.getItem("note");
}

shownote();

function updateStorage(){
    localStorage.setItem("note", noteContainer.innerHTML);
}

creatBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement ("p");
    let img = document.createElement ("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Svg-icons/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img); 
})

noteContainer.addEventListener("click", function(e){
   if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
   } 
   else if (e.target.tagName === "P"){
    note = document.querySelectorAll(".input-box")
    note.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
    })
   }
})

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})