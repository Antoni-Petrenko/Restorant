import app  from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB_z-EIayvytbgF-MwqaXWH1aPO1D9LJas",
    authDomain: "pizzaloft-f7d07.firebaseapp.com",
    databaseURL: "https://pizzaloft-f7d07.firebaseio.com",
    projectId: "pizzaloft-f7d07",
    storageBucket: "pizzaloft-f7d07.appspot.com",
    messagingSenderId: "137331341419",
    appId: "1:137331341419:web:ffb97401f162c60b76592e",
    measurementId: "G-W2XF0P5BW0"
  };
  


export class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig);
    this.dataBase=app.firestore();
    this.auth=app.auth();
  }
}

