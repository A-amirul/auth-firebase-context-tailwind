// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCP_6hn6Mo7tJ-MzjUqnEGrbpWlI9ujekE",
	authDomain: "auth-firebase-context-ta-abdfb.firebaseapp.com",
	projectId: "auth-firebase-context-ta-abdfb",
	storageBucket: "auth-firebase-context-ta-abdfb.appspot.com",
	messagingSenderId: "766653457896",
	appId: "1:766653457896:web:18214db9eb8b16d961705d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;