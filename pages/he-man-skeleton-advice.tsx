import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";
import LikeButton from "../components/LikeButton";

export default function UntilNextTime() {
  
  logGAEvent('page_view', {
    page_location: 'he-man-skeleton-advice'
  });

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>&quot;He man skeletor advice&quot; meme</h1>
          <h2>
            template <a target="_blank" rel="noreferrer" href="https://imgflip.com/meme/338290607/he-man-skeleton-advices">on imgflip</a>
          </h2>
          <div>
            <LikeButton memeName="he-man-skeleton-advice" />
          </div>
          <p>
            Because of Reddit, this meme is mixed up with &quot;until next time&quot; meme!
          </p>
          <h2>Exemple</h2>
          <img className="widthSet" src="/img/he-man-skeleton-advice.jpg" />
        </div>
      </div>
    </Layout>
  );
}
