var firebaseConfig = {
      apiKey: "AIzaSyAqMu6yjdf6UwiLBkj7ABf6XglKtFAdfjw",
      authDomain: "iiiiiiiiiiiiiii-fbc39.firebaseapp.com",
      databaseURL: "https://iiiiiiiiiiiiiii-fbc39-default-rtdb.firebaseio.com",
      projectId: "iiiiiiiiiiiiiii-fbc39",
      storageBucket: "iiiiiiiiiiiiiii-fbc39.appspot.com",
      messagingSenderId: "342703795821",
      appId: "1:342703795821:web:141e408266b66ed5c59964",
      measurementId: "G-629HEMQZ3E"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}
