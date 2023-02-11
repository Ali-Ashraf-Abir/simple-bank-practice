
let Total=1500

let deposit=0

let withdraw=0

document.getElementById("withdraw-btn").addEventListener('click',function(){

    const withdrawField=document.getElementById("withdraw-field")
    const withdrawAmount=withdrawField.value
    let error=0
    const withdrawAmountINt=parseInt(withdrawField.value)

    for(let i=0;i<=withdrawAmount.length;i++){
        if(withdrawAmount[i]!="1" && withdrawAmount[i]!="2" && withdrawAmount[i]!="3" && withdrawAmount[i]!="4" && withdrawAmount[i]!="5" &&
            withdrawAmount[i]!="6" && withdrawAmount[i]!="7" && withdrawAmount[i]!="8" && withdrawAmount[i]!="9" && withdrawAmount[i]!="0") {

                error++
            }


    }
    console.log(error)

    if(error>1){
        alert("please enter a number")
    }
    else{
        const withdrawValue=document.getElementById("withdraw-value")
        const TotalValue=document.getElementById("total-amount")
        const currentTotal=parseInt(TotalValue.innerText)
        console.log(currentTotal)
        withdraw=withdraw+withdrawAmountINt
        withdrawValue.innerText=deposit


        TotalValue.innerText=currentTotal-withdrawAmountINt



    }



})


document.getElementById("deposit-btn").addEventListener('click',function(){

    const depositField=document.getElementById("deposit-field")
    const depositAmount=depositField.value 
    const depositAmountINT=parseInt(depositAmount)
    let error=0

    for(let i=0;i<=depositAmount.length;i++){
        if(depositAmount[i]!="1" && depositAmount[i]!="2" && depositAmount[i]!="3" && depositAmount[i]!="4" && depositAmount[i]!="5" &&
            depositAmount[i]!="6" && depositAmount[i]!="7" && depositAmount[i]!="8" && depositAmount[i]!="9" && depositAmount[i]!="0") {

                error++
            }


    }
    console.log(error)

    if(error>1){
        alert("please enter a number")
    }
    else{
        const depositValue=document.getElementById("deposit-value")
        const TotalValue=document.getElementById("total-amount")
        let TotalValueCurrent=parseInt(TotalValue.innerText)

        deposit=deposit+depositAmountINT
        depositValue.innerText=deposit
        TotalValue.innerText=TotalValueCurrent+depositAmountINT
    }



})


