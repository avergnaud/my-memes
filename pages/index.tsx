import { logGAEvent } from "../utils/firebase-front";
import Layout from "../components/Layout";

export default function Home() {
  
  logGAEvent("index page");

  return (
    <Layout>
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Welcome</h1>
          <p className="lead my-3">Hello index.</p>
        </div>
      </div>
    </Layout>
  );
}
