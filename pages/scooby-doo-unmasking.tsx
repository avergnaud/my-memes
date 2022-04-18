import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";
import LikeButton from "../components/LikeButton";

export default function ScoobyDooUnmasking() {
  
  logGAEvent('page_view', {
    page_location: 'scooby-doo-unmasking'
  });

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>&quot;Scooby-Doo unmasking&quot; meme</h1>
          <h2>
            template <a target="_blank" rel="noreferrer" href="https://imgflip.com/memegenerator/158375076/Scooby-Doo-Unmasking">on imgflip</a>
          </h2>
          <div>
            <LikeButton memeName="scooby-doo-unmasking" />
          </div>
          <h2>Exemple</h2>
          <img className="widthSet" src="/img/scooby-doo-unmasking.jpg" />
        </div>
      </div>
    </Layout>
  );
}
