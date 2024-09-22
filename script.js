var firebaseConfig = {
    apiKey: "AIzaSyDnnpKATQ8A4VW8hw3cYtuQgP3_bAcNIEU",
    authDomain: "prototype-control-on-ofd.firebaseapp.com",
    projectId: "prototype-control-on-ofd",
    storageBucket: "prototype-control-on-ofd.appspot.com",
    messagingSenderId: "294472890765",
    appId: "1:294472890765:web:935c6d71c68ffa738ee5c4",
    measurementId: "G-KCN6QT8TF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});