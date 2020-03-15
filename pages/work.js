import React, { useState } from 'react';
import Layout from '../components/Layout';
import WorkBanner from '../components/WorkBanner';
import Head from 'next/head';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Work = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
      <div>
        <Head>
            <title>Tyler's Resume Site</title>
        </Head>
        <Layout>
          <h1>My future work page.</h1>
            <WorkBanner imageURL="/taxi2.jpeg" />
            <div>
                    <h3>Managed daily operations for metropolitan transportation service with 50+ drivers and 25 vehicles serving Greater Charleston. Complied with local and state regulations set by SCORS and the City of Charleston.</h3>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '20px' }}>View Details</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            This is where I will list my job responsibilities.
                        </CardBody>
                    </Card>
                </Collapse>
          </div>
          <WorkBanner imageURL="/ketner1.jpeg" />
          <WorkBanner imageURL="/orchestra1.jpg" />
        </Layout>
      </div>
    );
}

export default Work;