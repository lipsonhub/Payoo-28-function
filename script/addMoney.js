document.getElementById("cashOut").style.display="none";

document.getElementById("cash-out-card").addEventListener("click", function (){
    document.getElementById("addMoney").style.display="none";
    document.getElementById("cashOut").style.display="block";

});

document.getElementById("addMoney-btn").addEventListener("click", function (event){
    event.preventDefault();
    const accountNumber=document.getElementById("accountNumber").value;
    const pinNumber=document.getElementById("addPin").value;
    const convertedPin=parseInt(pinNumber);
    const amount=document.getElementById("amount").value;
    // console.log(accountNumber,convertedPin)
    const mainBalance=document.getElementById("main-balance").innerText;
    const convertedMainAmount=parseFloat(mainBalance);
    const convertedAmount=parseFloat(amount);

    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            const sum=convertedAmount + convertedMainAmount;
            document.getElementById("main-balance").innerText=sum; 
        }
        else{
            console.log("pin not correct")
        }

    }
    else{
        alert("number is not valid")
    }

});