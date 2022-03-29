import { logGAEvent } from "../utils/firebase-front";

export default function Home() {
  
  logGAEvent("index page");

  return (
    <div>Hello CI!</div>
  );
}
