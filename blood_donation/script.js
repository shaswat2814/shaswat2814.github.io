var some = false;
function validateForm(){
    var name = document.forms["myforms"]["name"].value;
    var city = document.forms["myforms"]["city"].value;
    var phone = document.forms["myforms"]["phone"].value;
    var bloodType = document.forms["myforms"]["blood_type"].value;
    var address = document.forms["myforms"]["address"].value;
    var validate = true;

    if(name=="" || city==="none" || phone=="" || bloodType==="none" || isNaN(phone)){
        alert("Enter the values correctly and completely!");
        validate = false;
        return validate;
    }

    if(!isNaN(phone)){
        if(phone.length!=10){
            alert("Enter a valid phone Number of 10 digits");
            validate = false;
            return validate;
        }
        
    }

    if(address.length>80){
        alert("Enter the address field with less than 80 characters");
        validate=false;
        return validate;
    }

}