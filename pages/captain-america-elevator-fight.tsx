import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";
import LikeButton from "../components/LikeButton";

export default function CaptainAmerica() {
  
  logGAEvent('page_view', {
    page_location: 'captain-america-elevator-fight'
  });

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>&quot;Captain America elevator fight&quot; meme</h1>
          <h2>
            template <a target="_blank" rel="noreferrer" href="https://imgflip.com/memegenerator/222773570/Captain-america-elevator">on imgflip</a>
          </h2>
          <div>
            <LikeButton memeName="captain-america-elevator-fight" />
          </div>
          <h2>Exemple</h2>
          <img className="widthSet" src="/img/captain-america-elevator-fight.jpg" />
        </div>
      </div>
    </Layout>
  );
}
