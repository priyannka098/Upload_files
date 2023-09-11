import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBLzo6rHzuAYTnXmXpzsixnia5fUw3slu4",
    authDomain: "fileuploader-f0db5.firebaseapp.com",
    projectId: "fileuploader-f0db5",
    storageBucket: "fileuploader-f0db5.appspot.com",
    messagingSenderId: "1045766848817",
    appId: "1:1045766848817:web:c772e15d54fdf32fefb010"
};

const app = initializeApp(firebaseConfig);
const storageService = getStorage(app);

export default storageService;
