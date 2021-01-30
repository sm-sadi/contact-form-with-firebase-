

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD6cbCg2TUBHQajwuNxkweRrbd1dty4BsM",
    authDomain: "contact-form-1c50b.firebaseapp.com",
    databaseURL: "https://contact-form-1c50b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contact-form-1c50b",
    storageBucket: "contact-form-1c50b.appspot.com",
    messagingSenderId: "130692679589",
    appId: "1:130692679589:web:55c55bd7498eb5a078ca4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.initializeApp(Config);

//   refernce messages collection 
 var messageRef = firebase.database().ref('/messages');
  
//   event listeener from the from 
const contactForm = document.getElementById("contact-form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const message = document.getElementById("message");



contactForm.addEventListener("submit", handelsubmit);

// handlle submit 
function handelsubmit(Event){    
    Event.preventDefault();
    
    document.getElementById("loading").classList.add("showloading")

let userNameValue = userName.value;
let emailValue = email.value
let messageValue = message.value


    console.log(` username : ${userNameValue} ..
    username : ${emailValue} ..
    username : ${messageValue} ..`);
    // save message to database 
    saveMessage(userNameValue, emailValue , messageValue);

//  showing success 

setTimeout(function(){ 
    document.getElementById("loading").classList.remove("showloading");
    document.getElementById("successful").classList.add("showsuccessful");
    setTimeout(function(){ 
        document.getElementById("successful").classList.remove("showsuccessful");  
     }, 1000);
 }, 1000);
 

    // clearing form after input is done 
    clearForm()
    
}

// clear from after input 

function clearForm(){
    userName.value ='';
    email.value ='';
    message.value='';
   
}

// save the message 
function saveMessage( userNameValue , emailValue , messageValue){
//    var newMessageRef = messageRef.push();
    // newMessageRef.set({
    //     name : userNameValue,
    //     email :  emailValue,
    //     message : messageValue
    // }
    // );
    var newMessageRef = {
            name : userNameValue,
            email :  emailValue,
            message : messageValue
        }
        messageRef.push(newMessageRef);
       

}