
let name = document.getElementById('name')
let password = document.getElementById('password')
let demo = document.getElementById('demo')
 function passwordValidate(){
  //  var pswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!]{8,15}$/;
    var lwr=/[a-z]/g;
    if(password.value.match(lwr)){
        return true;
    }
    var upr=/[A-Z]/g;
  if(password.value.match(upr)){
           return true;
    }
    var nm=/[0-9]/g;
    if(password.value.match(nm)){
        return true;
    }
    if(password.value.length>=8){
        return true;
    }
    var sp=/[!@#$%^&*]/g;
    if(password.value.match(sp)){
        return true;
    }
    return passwordValidate;
 }







function signIn() {
    if (passwordValidate()==true)
        demo.innerHTML = "Sign In successful!!! Welcome " + name.value + " Learn More with Bigstorm"
    else
        demo.innerHTML = "Please enter a valid password(password should be of minimum 8 characters having atleast 1 small letter(a-z),1 capital letter(A-Z),1 digit(0-9),1 special character)"
}