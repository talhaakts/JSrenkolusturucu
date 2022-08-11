const colors=[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,"A","B","C","D","E","F"];
const bnt= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click", function(){
     let renkolustur="#";
     for (let i=0; i<6; i++) {
        renkolustur += colors[renkgetir()];
     }
     color.textContent = renkolustur;
     document.body.style.backgroundColor = renkolustur;
});
function renkgetir(){
    return Math.floor(Math.random()* colors.length);

}