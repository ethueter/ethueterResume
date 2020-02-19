import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/Layout'
import Head from 'next/head';

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
          <h1>This is my future Resume Site</h1>
        </Layout>
      </div>
    );

}

export default Index;