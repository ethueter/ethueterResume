import Layout from '../components/Layout';
import fetch from 'unfetch';
import useSWR from 'swr';
import { Spinner } from 'reactstrap';

const API_URL = 'https://api.github.com';
async function fetcher(path) {
    const res = await fetch(API_URL + path);
    const json = await res.json();
    return json
}; 

const Projects = () => {
    const { data, error } = useSWR('/users/ethueter/repos', fetcher);

    if (error) return <div>Failed to load.</div>;
    if (!data) return <Spinner color="success" />
    console.log(data)
    return (
        <Layout>
            <h1>My future projects page.</h1>
        </Layout>
    )
}

export default Projects;