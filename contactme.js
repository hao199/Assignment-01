// contactme alert
function submitContact(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    alert("Hi " + name.value + ". I will get back to you at " + email.value);
}

function validCheck(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    if(name.value === "" || name.value == null){
        alert("Name has not been entered!");
        return;
    }
    if(email.value === "" || email.value == null){
        alert("Email has not been entered!");
        return;
    }
    if(!validateEmail(email.value)){
        alert("Please enter a valid email!");
        return;
    }
    if(message.value === "" || message.value == null){
        alert("Message has not been entered!");
        return;
    }

    submitContact();
}
