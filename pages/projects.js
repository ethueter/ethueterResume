import Layout from '../components/Layout';
import Head from 'next/head';
import fetch from 'unfetch';
import useSWR from 'swr';
import {
    Spinner, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';


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
      <div>
        <Head>
          <title>Tyler's Resume Site</title>
        </Head>
        <Layout>
          <h1>Featured Projects</h1>
          <div>
            <CardDeck>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/react-redux.png"
                  alt="react js logo"
                />
                <CardBody>
                  <CardTitle>The Analyst</CardTitle>
                  <CardSubtitle>Client Side</CardSubtitle>
                  <CardText>
                    This will be a description of the frontend of The Analyst Project
                  </CardText>
                  <a href="http://the-analyst.herokuapp.com/">
                    <Button 
                    outline 
                    color='primary'
                    style={{ marginRight: '10px' }}
                    >Site</Button>
                  </a>
                  <a href="https://github.com/ethueter/the-analyst-client">
                    <Button outline color="primary">Repo</Button>
                  </a>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/rubyonrails.png"
                  alt="ruby and rails logos"
                />
                <CardBody>
                  <CardTitle>The Analyst</CardTitle>
                  <CardSubtitle>Server Side</CardSubtitle>
                  <CardText>
                    Description of the backend of The Analyst.
                  </CardText>
                  <a href="">
                    <Button outline color="primary">Repo</Button>
                  </a>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/react.png"
                  alt="React Native logo"
                />
                <CardBody>
                  <CardTitle>Task List</CardTitle>
                  <CardSubtitle>Mobile ToDo List</CardSubtitle>
                  <CardText>
                    Description of the React Native app.
                  </CardText>
                <a href="">
                    <Button outline color="primary">Repo</Button>
                </a>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/javascript.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="text-center">Flatiron, The Game</CardTitle>
                  <CardSubtitle>Client Side</CardSubtitle>
                  <CardText>
                    Game logic and graphic design.
                  </CardText>
                    <a href="">
                        <Button 
                        outline 
                        color="primary"
                        >Repo</Button>
                    </a>
                </CardBody>
              </Card>
            </CardDeck>
          </div>
        </Layout>
      </div>
    );
}

export default Projects;