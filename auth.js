
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBOntPAXoiaohWEBIhDIqPwMIrb_Yc4PXw",
    authDomain: "myproj-auth.firebaseapp.com",
    databaseURL: "https://myproj-auth-default-rtdb.firebaseio.com",
    projectId: "myproj-auth",
    storageBucket: "myproj-auth.appspot.com",
    messagingSenderId: "276881009769",
    appId: "1:276881009769:web:638154cb5ef4f8743cc6f8",
    lang: "pt-br"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


let cadName = document.querySelector("#nameCadas");
let cadEmail = document.querySelector("#emailCads");
let cadPass = document.querySelector("#passCads");
let cadDone = document.querySelector("#logiTest")

cadDone.addEventListener('click', () => 
 
 firebase.auth().signInWithEmailAndPassword(cadEmail.value, cadPass.value)
 .then((userCredential) => {
   // Signed in
   var user = userCredential.user;
   window.location.href = "index.html"
   // ...
 })
 .catch((error) => {
   var errorCode = error.code;
   var errorMessage = error.message;
   alert(errorMessage);
   }));