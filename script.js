function registerUser(event){
   event.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let message = document.getElementById("message")


    if(name ==="" || email ==="" || age ===""){
        message.innerHTML="All Fields Are Required";
        message.style.color="red";
        return;

    }
    if(age<18){
        message.innerHTML="You must be 18 or ABove!";
        message.style.color="orange";
        return;
    }

    else{
        message.innerHTML="Registation Successfull";
        message.style.color="green";
    }
    }