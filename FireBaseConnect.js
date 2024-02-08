import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBsXDbQ_bdA3HmEqV_0LwR_6S2yiTorxE4",
    authDomain: "aulasenac-636d3.firebaseapp.com",
    databaseURL: "https://aulasenac-636d3-default-rtdb.firebaseio.com",
    projectId: "aulasenac-636d3",
    storageBucket: "aulasenac-636d3.appspot.com",
    messagingSenderId: "779215749198",
    appId: "1:779215749198:web:bca92bd91078bfd352831f",
    measurementId: "G-56X00466ZZ"
  }
  

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase