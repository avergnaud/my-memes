import { getAnalytics, logEvent } from "firebase/analytics";


export default function Home() {

  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');

  return (
    <div>Hello CI!</div>
  )
}
