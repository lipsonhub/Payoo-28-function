// alert();
document.getElementById("loginBtn").addEventListener("click", function (event){
event.preventDefault();
// console.log("hello")
const accountNumbers =document.getElementById("accountNumber").value;
const pinNumber =document.getElementById("pin").value;
const convertedPin =parseInt(pinNumber);
// console.log(accountNumbers, pinNumber);
if(accountNumbers.length === 11){
    // console.log("number ok");
    if(convertedPin === 1234){
        // console.log("sob ok")
        window.location.href="main.html";

    }
    else{
        alert("pin not ok")
    }
}

    


    else{
        alert("number not ok")
    }


});