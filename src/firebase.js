import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUyfJOc803EPp7n-vbkXmJMH9cpKPFgTQ",
  authDomain: "twittwe-clone-c8fc3.firebaseapp.com",
  projectId: "twittwe-clone-c8fc3",
  storageBucket: "twittwe-clone-c8fc3.appspot.com",
  messagingSenderId: "102464845861",
  appId: "1:102464845861:web:ca5d5b74414f7e089727cc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
