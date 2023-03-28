
function validation(){
    email = document.querySelector('#name').value;
    pass = document.querySelector('#pass').value;
    regexpemail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    regexppass=/^\w{3,7}$/;

    if(!email){
        document.querySelector('#errmail').
        innerText="please fill email address";
        document.querySelector('#name').style.border= "1px solid Red";
        return false;
    }
    else if(!(email.match(regexpemail))){
        document.querySelector('#errmail').
        innerText="please enter the correct email ";
        document.querySelector('#name').style.border= "1px solid Red";
    return false;
    }

    if(!pass){
        document.querySelector('#errpass').
        innerText="please enter password";
        document.querySelector('#pass').style.border= "1px solid Red";
      return false;
    }
    else if(!(pass.match(regexppass))){
        document.querySelector('#errpass').
        innerText="password should be minimum [3-7]letter";
        document.querySelector('#pass').style.border= "1px solid Red";
      return false;
    }

  

}
