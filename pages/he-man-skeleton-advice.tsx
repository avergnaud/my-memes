import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";

export default function UntilNextTime() {
  
  logGAEvent("he-man-skeleton-advice page");

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>"He man skeletor advice" meme</h1>
          <h2>template</h2>
          <p>
            mixed up with "until next time" meme?
          </p>
          <a target="_blank" href="https://imgflip.com/meme/338290607/he-man-skeleton-advices">On imgflip</a>
          <h2>Exemple</h2>
          <img src="/img/he-man-skeleton-advice.jpg" />
        </div>
      </div>
    </Layout>
  );
}
