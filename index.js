function validateForm() {
    var Password = document.forms["myForm"]["fPassword"].value;
    var ConfirmPassword = document.forms["myForm"]["fConfirmPassword"].value;
    var Name = document.forms["myForm"]["fName"].value;
    var Surname = document.forms["myForm"]["fSurname"].value;
    var Age = document.forms["myForm"]["fAge"].value;
    var Email = document.forms["myForm"]["fEmail"].value;
  
    
    
    if (ConfirmPassword != Password) {
    alert("password do not match");
    return false;
  }
    else { 
        var details=[Name,Surname,Age,Email,Password,ConfirmPassword];
    
       
            alert("success!");
    
    }
    


}