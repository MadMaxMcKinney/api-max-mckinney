import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcVXfXBdTMtg8jesEoQwGG7SiSBEO6eXU",
    authDomain: "api-max-mckinney.firebaseapp.com",
    databaseURL: "https://api-max-mckinney-default-rtdb.firebaseio.com",
    projectId: "api-max-mckinney",
    storageBucket: "api-max-mckinney.appspot.com",
    messagingSenderId: "402053188084",
    appId: "1:402053188084:web:80da2c3251d179847ad1a1"
};
  
const firebase = initializeApp(firebaseConfig)

export const db = getFirestore();