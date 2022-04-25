var firebaseConfig = {
    apiKey: "AIzaSyBObeEi8g9aauFjDT2BvunUDf3kPvi-u1k",
    authDomain: "kwitter-v2-947c0.firebaseapp.com",
    databaseURL: "https://kwitter-v2-947c0-default-rtdb.firebaseio.com",
    projectId: "kwitter-v2-947c0",
    storageBucket: "kwitter-v2-947c0.appspot.com",
    messagingSenderId: "739650478024",
    appId: "1:739650478024:web:6ae06b1693516f428daafd",
    measurementId: "G-V1P85JF8X4"
  };
  

firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}