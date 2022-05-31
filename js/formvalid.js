/*eslint-env browser */

var dynamicform = document.getElementById("dynaform");

//Changes the Form element to reflect the users radio button choice
function emailchange(){
 dynamicform.innerHTML = "Email Address";
}

function phonechange(){
  dynamicform.innerHTML = "Phone Number";  
}

//validates the form to ensure it is filled out correctly 
// This is not needed if I just add required into the HTML tags the browser can do it for me.
function validate(){
    var ckflag = true;
    var name = document.forms["Contactme"]["name"].value;
    var con = document.forms["Contactme"]["contact"].value;
    var msg = document.forms["Contactme"]["message"].value;
 
  
    if(name == ""){
        alert("Please fill out your name");
        ckflag = false;
    }
    
     if(con == ""){
        alert("Please give me your contact info");
         ckflag = false;
    }  
    
    if(msg == ""){
        alert("Please fill out a message");
        ckflag = false;
    }
    if(ckflag == true){
        alert("Thanks for your message!  I'll get back to you soon.")
    }
        return ckflag;   
}