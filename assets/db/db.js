var firebaseConfig = {
  apiKey: "AIzaSyA_2_DrjTzs1cIOY9_5mloWYcdLxpsFq5c",
  authDomain: "koraa-id.firebaseapp.com",
  projectId: "koraa-id",
  storageBucket: "koraa-id.appspot.com",
  messagingSenderId: "360256061577",
  appId: "1:360256061577:web:5d9dbb92ff3313c7b48658",
  measurementId: "G-VJT00SD3NT"
};

// Inisialisasi aplikasi Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make firebase auth and reference
const auth = firebase.auth();
const db = firebase.firestore();
//firestore ssettings
// db.settings({ timestampsInSnapshots: true });

document.addEventListener("DOMContentLoaded", function () {
  var toolTip = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(toolTip);
});