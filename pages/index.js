import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/Layout'
import Head from 'next/head';
import Jumbo from "../components/Jumbo";

const Index = () => {

    return (
      <div>
        <Head>
          <title>Tyler's Personal Site</title>
          <meta
            name="resume"
            content="initial-scale-1.0, width=device=width"
            key="resume"
          />
        </Head>
        <Layout>
          <Jumbo />
        </Layout>
      </div>
    );

}

export default Index;