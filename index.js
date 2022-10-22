
const billAmount=document.querySelector("#bill-Amount");
const nextBtn=document.querySelector("#btn-next");
const cashGiven=document.querySelector("#cash-Given");
const btnCheck=document.querySelector("#btn-check");
const Msg=document.querySelector("#Msg");
CashBox= document.querySelector('#CashBox');
const numberOfNotes=document.getElementsByClassName("no.of.notes")


var denominataion=[2000,500,100,20,10,5,1];


function changeCalc(cash){
    CashBox.innerHTML=`<h2>Cash to be returned :${cash}</h2>`;
    for(let i=0;i<denominataion.length;i++){
        var ans=Math.trunc(cash/denominataion[i]);
        cash%=denominataion[i];
        numberOfNotes[i].innerText=ans;
        
       
    }
}

function errorMessage(msg){
    Msg.style.display="block";

    Msg.innerText=msg;
}
function hideMsg(){
   Msg.style.display="none";
}

function check(){
    hideMsg();
    if(billAmount.value===""||cashGiven.value==="")
    {
        errorMessage("All input Field Required");
    }
    else if(Number(billAmount.value)<=0){
        errorMessage("Bill amount is invalid!");
    }
    else if(Number(cashGiven.value)<Number(billAmount.value)){
        errorMessage("Insufficent cash!Pay fulll");
    }
    else if(cashGiven.value==billAmount.value)
    {
        errorMessage("No change required to be given")
    }
    else if(Number(cashGiven.value)>=Number(billAmount.value)){
        const cashToReturn=cashGiven.value-billAmount.value;
        changeCalc(cashToReturn);
        
    }

}
btnCheck.addEventListener("click",check);





  
  