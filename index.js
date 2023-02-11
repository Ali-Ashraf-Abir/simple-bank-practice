const username="Abir"
const password="01731292533"

document.getElementById("login-btn").addEventListener('click',function(){

    const usernameField=document.getElementById("username")
    const passwordField=document.getElementById("password")
    const usernameText=usernameField.value 
    const passwordText=passwordField.value

    if(usernameText==username && passwordText==password){
       location.href="bank.html"
    }
    else{
        alert("wrong pass or username")
    }

})