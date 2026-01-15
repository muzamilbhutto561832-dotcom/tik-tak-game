
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#newbtn");

let turno= true;

let winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
     if(turno){
        box.innerText = "O";
        turno=false;
     }
     else{
        box.innerText = "X";
        turno = true;
     }
     box.disabled = true;
     checkwinner();

    });

});
 

   
const checkwinner=() => {
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
         

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                
                showwinner(pos1val);
                   resetgame();
             
            }
        }


    }
};

const disableboxes = () => {

     for(let box of boxes){
         box.disabled=true;

     } };

   const showwinner= (winner)=>{
    alert(`congarchulation, winner is  👏🥰  ${winner}`);
      disableboxes();

  };




 let resetgame=()=>{
     turno = true;
      enableboxes();
      

 };
   let enableboxes = () => {

       for(let box of boxes){
           box.disabled=false;       
           box.innerText="";
          
           
    }
 };

 resetbtn.addEventListener("click",resetgame);
 

