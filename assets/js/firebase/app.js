  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBtJjHrfJS6XngTMmbj1eOjjaeXJlrETsI",
    authDomain: "projeto-mundo-invertido-ea041.firebaseapp.com",
    projectId: "projeto-mundo-invertido-ea041",
    storageBucket: "projeto-mundo-invertido-ea041.appspot.com",
    messagingSenderId: "538027894867",
    appId: "1:538027894867:web:c2af761e6acbb9c93bbea6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app