import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";

export default function UntilNextTime() {
  
  logGAEvent("he-man-skeleton-advice page");

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>&quot;He man skeletor advice&quot; meme</h1>
          <h2>template</h2>
          <p>
            Because of Reddit, this meme is mixed up with &quot;until next time&quot; meme!
          </p>
          <a target="_blank" rel="noreferrer" href="https://imgflip.com/meme/338290607/he-man-skeleton-advices">On imgflip</a>
          <h2>Exemple</h2>
          <img src="/img/he-man-skeleton-advice.jpg" />
        </div>
      </div>
    </Layout>
  );
}
