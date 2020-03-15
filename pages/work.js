import Layout from '../components/Layout';
import WorkBanner from '../components/WorkBanner';

const Work = () => {

    return (
        <Layout>
            <h1>My future work page.</h1>
            <WorkBanner imageURL="/taxi2.jpeg" />
            <WorkBanner imageURL="/ketner1.jpeg"/>
            <WorkBanner imageURL="/orchestra1.jpg" />
        </Layout>
    )
}

export default Work;