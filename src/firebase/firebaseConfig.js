import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3XpN7j0iLD4VRvlDogzePFfnp8tu110I",
  authDomain: "airbnb-clone-4b3ab.firebaseapp.com",
  projectId: "airbnb-clone-4b3ab",
  storageBucket: "airbnb-clone-4b3ab.appspot.com",
  messagingSenderId: "49776014111",
  appId: "1:49776014111:web:927ac8c05e7ad38aee762a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;