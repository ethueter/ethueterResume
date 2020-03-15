import Layout from '../components/Layout';
import WorkBanner from '../components/WorkBanner';
import Head from 'next/head';

const Work = () => {

    return (
      <div>
          <Head>
              <title>Tyler's Resume Site</title>
          </Head>
        <Layout>
          <h1>My future work page.</h1>
          <WorkBanner imageURL="/taxi2.jpeg" />
          <WorkBanner imageURL="/ketner1.jpeg" />
          <WorkBanner imageURL="/orchestra1.jpg" />
        </Layout>
      </div>
    );
}

export default Work;