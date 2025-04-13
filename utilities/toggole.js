document.getElementById("cashOut").style.display="none";

document.getElementById("add-money-card").addEventListener("click", function (){
    handleToggle("addMoney", "block")
    handleToggle("cashOut","none")
    handleToggle("transaction-his","none");

});
document.getElementById("cash-out-card").addEventListener("click", function (){
    handleToggle("addMoney", "none")
    handleToggle("transaction-his","none");
    handleToggle("cashOut","block")

});

// transaction-history-card
document.getElementById("transaction-card").addEventListener("click",function(){
    handleToggle("addMoney", "none");
    handleToggle("cashOut","none");
    handleToggle("transaction-his", "block");
})

function handleToggle(id,status){
    document.getElementById(id).style.display=status;

};