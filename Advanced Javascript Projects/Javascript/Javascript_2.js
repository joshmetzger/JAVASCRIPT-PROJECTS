function vForm(){
    let fname = document.forms["contactForm"]["fname"].value;
    let lname = document.forms["contactForm"]["lname"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phone = document.forms["contactForm"]["phone"].value;

    if(fname == ""){
        alert('first name cannot be empty')
        return false
    }else if(lname == ""){
        alert('last name cannot be empty')
        return false
    }else if(email == ""){
        alert('email name cannot be empty')
        return false
    }else if(phone == ""){
        alert('phone numbere name cannot be empty')
        return false
    }
}