import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";

export default function ScoobyDooUnmasking() {
  
  logGAEvent("scooby-doo-unmasking page");

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>"Scooby-Doo unmasking" meme</h1>
          <h2>template</h2>
          <a target="_blank" href="https://imgflip.com/memegenerator/158375076/Scooby-Doo-Unmasking">On imgflip</a>
          <h2>Exemple</h2>
          <img src="/img/scooby-doo-unmasking.jpg" />
        </div>
      </div>
    </Layout>
  );
}
