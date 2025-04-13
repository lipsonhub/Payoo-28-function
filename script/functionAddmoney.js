
// addMoney

document.getElementById("addMoney-btn").addEventListener("click", function(event){
event.preventDefault();
const amount=getInputValueById("amount");
const pin=getInputValueById("addPin");

const accountNumber=document.getElementById("accountNumber").value;

const mainBalance=getInnerTextByID("main-balance");

const selectBank=document.getElementById("all-bank").value;
console.log(selectBank)

if(amount<0){
    alert("amount is invalid,please add positive number");
    return;
};


if(accountNumber.length === 11){
    if(pin === 1234){
        const sum=mainBalance + amount;
        // document.getElementById("main-balance").innerText=sum;
        setInnerText("main-balance",sum);

        const container=document.getElementById("history");
        const div =document.createElement("div");
        div.classList.add("bg-red-500")
        div.innerHTML=`
        <h1>Added Money from ${selectBank}</h1>
        <h3>${amount}</h3>
        <p>account Number: ${accountNumber}</p>
        `;
        container.appendChild(div);


    }
    else{
        alert("pin is incorrect")
    }

}
else{
    alert("number is not valid")
}

});

// cashOut korar code
document.getElementById("cashOut-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber=document.getElementById("cashOut-number").value;
    const amount=getInputValueById("cashOut-amount");
    const pinNumber=getInputValueById("cashOut-pin");
    const mainBalance=getInnerTextByID("main-balance");

    if(amount>mainBalance){
        alert("number is invalid,please type correct number");
        return;
    }

    if(accountNumber.length===11){
        if(pinNumber===1234){
            const sum=mainBalance - amount;
            setInnerText("main-balance",sum);

            const container =document.getElementById("history");
            const p =document.createElement("p");
            p.innerText=`
            cashOut ${amount} from this ${accountNumber}
            `;
            container.appendChild(p);
           
        }
        else{
            alert("pin is incorrect")
        }

    }
    else {
        alert("number is incorrect")

    }

});


