const firebaseConfig = {
      apiKey: "AIzaSyDWM_SH362OqXg1-UUzKTOt_kxLQySZVQw",
      authDomain: "thick-thack-toooe.firebaseapp.com",
      databaseURL: "https://thick-thack-toooe-default-rtdb.firebaseio.com",
      projectId: "thick-thack-toooe",
      storageBucket: "thick-thack-toooe.appspot.com",
      messagingSenderId: "1010208714503",
      appId: "1:1010208714503:web:05e4a0fa3b386248e25fa2",
      measurementId: "G-4M2ZXNNZBM"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
//End code
      } });  }); }
getData();
