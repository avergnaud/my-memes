import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";

export default function About() {
  
  logGAEvent('page_view', {
    page_location: 'about'
  });

  return (
    <Layout>
      <div className="row my-2">
        <div className="col-12">
          <h1>About Page</h1>
        </div>
      </div>
    </Layout>
  );
}
