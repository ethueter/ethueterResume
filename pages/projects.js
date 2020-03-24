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
              <Card className="project-card">
                <CardImg
                  top
                  width="100%"
                  src="/react-redux.png"
                  alt="react js logo"
                />
                <CardBody>
                  <CardTitle className="card-head">The Analyst</CardTitle>
                  <CardSubtitle className="card-subhead">Client Side</CardSubtitle>
                  <CardText>
                    How do we rate bias in our news when we don't know where it is coming from? The sourse of a news article is only reveled after a user applies their own bias rating. How does your favorite news site rate?
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
                  <a href="https://github.com/ethueter/the-analyst">
                    <Button outline color="primary">Repo</Button>
                  </a>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/react1.png"
                  alt="React Native logo"
                />
                <CardBody>
                  <CardTitle>Task List</CardTitle>
                  <CardSubtitle>Mobile ToDo List</CardSubtitle>
                  <CardText>
                    Description of the React Native app.
                  </CardText>
                <a href="https://github.com/ethueter/blog-task-list">
                    <Button outline color="primary">Repo</Button>
                </a>
                </CardBody>
              </Card>
              <Card>
                <CardImg
                  top
                  width="50%"
                  src="/mysite.png"
                  alt="Card image cap"
                />
                <CardBody>
                                <CardTitle className="text-center"><strong>This Site</strong></CardTitle>
                  <CardSubtitle>Client Side</CardSubtitle>
                  <CardText>
                    Game logic and graphic design.
                  </CardText>
                    <a href="https://github.com/ethueter/ethueterResume">
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