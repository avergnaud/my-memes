import { getAnalytics, logEvent } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// SSG... frontend...
const firebaseConfig = {
  apiKey: "AIzaSyAbkz_M9LnbHk2kbHopcMHbs0R8sy66c1o",
  authDomain: "my-memes-284eb.firebaseapp.com",
  projectId: "my-memes-284eb",
  storageBucket: "my-memes-284eb.appspot.com",
  messagingSenderId: "169165251824",
  appId: "1:169165251824:web:68c306d4787db3442c0e35",
  measurementId: "G-VVM57X1B3T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home() {

  logEvent(analytics, 'notification_received');

  return (
    <div>Hello CI!</div>
  )
}
