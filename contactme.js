// contactme alert
function submitContact(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    alert("Hi " + name.value + ". I will get back to you at " + email.value);
}