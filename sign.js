let signup = () =>{
   
    let name = document.getElementById("name").value.length;
     if (name === 0 ) {
     alert("Please Enter Your Name:");
     return false;
     }
     else if(name <=7 ){
         alert("Name must have atleast 8 Characters: ");
         return false;

     }

     else if(name >=17){
         alert("Name can contain only upto 16 Characters:")
     } 
     var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";   

     var data = document.getElementById("name").value;

     for (var i = 0; i < data.length; i++)

     {      

          if ( speChar.indexOf(data.charAt(i)) != -1)

         {    

         alert ("Your string has special characters. \nThese are not allowed.");

         return false; 
     }
     }

     var email = document.getElementById('email').value.length;
     if(email === 0){
         alert("Providing an email is mandotory");
         return false;
     }

     
    let password = document.getElementById("password").value.length;
     if (password === 0 ) {
     alert("Please Enter Your Password:");
     return false;
     }

     else if (password <=6 ) {
        alert("Password Should have minimun 8 characters");
        return false;
        }

    else if (password >=17 ) {
        alert("Password can contains only upto 16 characters:");
        return false;
        }
    
    

        //  for (var i = 0; i < radios.length; i++) {
        //  if (radios[i].checked ) {
        //   alert("Selecting a gender is mandotory.");
        //  return false;
        //  }
        //  }
        
        //  alert("Selecting a gender is mandotory.");
        //  return false;
         

        var name1 = document.getElementById('name');
        var email1 = document.getElementById('email');
        var password1 = document.getElementById('password');

        var radios = document.getElementsByName("gender");
        var radios_value;
        for(var i = 0; i < radios.length; i++){
         if(radios[i].checked){
        radios_value = radios[i].value;
         }
        }


         var obj = {
             Name : name1.value,
             Email : email1.value,
             Password : password1.value,
             Gender : radios_value

         }
         var key = Math.random()*10000;
         firebase.database().ref('Signup'+key.toFixed()).push(obj)
        


         firebase.auth().createUserWithEmailAndPassword(email1.value, password1.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    
  window.location.href = 'signin.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Please fill the form Correctly:')
   
  });


}



let signin = ()=>{
     
    var email2 = document.getElementById('email2').value;
    var password2 = document.getElementById('password2').value;

    firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = 'welcome.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Invalid Email or Password:')
  });
}

let fb_login = ()=>{
     
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    window.location.href = 'welcome.html'

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
}