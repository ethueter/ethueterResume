import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import Jumbo from "../components/Jumbo";
import CardContainer from '../components/CardContainer';

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
          <CardContainer></CardContainer>
        </Layout>
        
      </div>
    );

}

export default Index;