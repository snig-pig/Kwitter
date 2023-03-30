var firebaseConfig = {
      apiKey: "AIzaSyAV0Z186kGu84lA2-72z0oAvW26K4R3zqc",
      authDomain: "kwitter-71578.firebaseapp.com",
      databaseURL: "https://kwitter-71578-default-rtdb.firebaseio.com",
      projectId: "kwitter-71578",
      storageBucket: "kwitter-71578.appspot.com",
      messagingSenderId: "210365821557",
      appId: "1:210365821557:web:29ca8f48aac24bdea97e3c"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose: "adding room name"
      }); 
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onClick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}