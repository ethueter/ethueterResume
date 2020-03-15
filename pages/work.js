import React, { useState } from 'react';
import Layout from '../components/Layout';
import WorkBanner from '../components/WorkBanner';
import Head from 'next/head';
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';

const Work = () => {
    const [ isOpen, setIsOpen ] = useState(0)

    const toggle = (num) => setIsOpen(num)
    return (
      <div>
        <Head>
          <title>Tyler's Resume Site</title>
        </Head>
        <Layout>
          <WorkBanner
            imageURL="/cgt1.png"
            role="Partner/General Manager"
            position="left"
            color="white"
          />
          <div>
              <h5>2009-2018</h5>
            <h3>
              Managed daily operations for metropolitan transportation service
              with 50+ drivers and 25 vehicles serving Greater Charleston.
              Complied with local and state regulations set by SCORS and the
              City of Charleston.
            </h3>
            <Button
              color="primary"
              onClick={()=> toggle(1)}
              style={{ marginBottom: "20px" }}
            >
              View Details
            </Button>
            <Collapse isOpen={isOpen === 1}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>
                      Hired and trained all drivers and dispatchers, growing
                      from team of 8 in 2009 to 50+ within five years.
                    </ListGroupItem>
                    <ListGroupItem>
                      Implemented and maintained the TaxiCaller dispatch system,
                      enabling company to utilize multiple fare types, process
                      payments, input and dispatch reservations, and track all
                      ride data.
                    </ListGroupItem>
                    <ListGroupItem>
                      Strategized use of multiple no-cost technical applications
                      prior to the advent of dispatching software.
                    </ListGroupItem>
                    <ListGroupItem>
                      Supported asset purchasing and disposal, procuring 25
                      vehicles, 100 cell phones and equipment.
                    </ListGroupItem>
                    <ListGroupItem>
                      Built business still in operation today, reaching $2M in
                      annual revenues by 2014.
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <WorkBanner
            imageURL="/ketner1.jpeg"
            role="Director of Operations"
            position="right"
            color="green"
          />
          <div>
                    <h5>March 2008 - December 2008</h5>
            <h3>
              Planned and managed day-to-day operations of 15 paid staff and 50+
              volunteers across two campaign offices. Oversaw field, intern, and
              phone banking programs by setting outreach goals, developing
              scripts, conducting training and providing necessary networks
              (phone, IT, transportation).
            </h3>
            <Button
              color="primary"
              onClick={() => toggle(2)}
              style={{ marginBottom: "20px" }}
            >
              View Details
            </Button>
            <Collapse isOpen={isOpen === 2}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>
                     Started as Scheduler and assumed Director-level responsibilities within three months on the job.
                   
                    </ListGroupItem>
                    <ListGroupItem>
                      Liaised with local and national government, party officials and donors to establish candidate schedule.
                  
                    </ListGroupItem>
                    <ListGroupItem>
                      Purchased and distributed campaign assets for branding and communications.
                  
                    </ListGroupItem>
                    <ListGroupItem>
                      Set up and maintained office LAN, including email accounts and firewall security.
                  
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </div>
          <WorkBanner
            imageURL="/orchestra1.jpg"
            role="Box Office Manager"
            color="white"
          />
          <div>
                    <h5>1998-2006</h5>
            <h3>
              Oversaw all aspects of ticket sales and customer service for 17 day performing arts festival. Festival hosted 140+ performances across 12+ venues annually with sales revenue exceeding $2M.
            </h3>
            <Button
              color="primary"
              onClick={() => toggle(3)}
              style={{ marginBottom: "20px" }}
            >
              View Details
            </Button>
            <Collapse isOpen={isOpen === 3}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>
                      Hired and trained seasonal staff of 2 assistant managers and up to 25 ticketing apprentices.
                    </ListGroupItem>
                    <ListGroupItem>
                      Consistantly met or exceeded annual sales goals.
                    </ListGroupItem>
                    <ListGroupItem>
                      Set up and maintained ticketing system. Oversaw online, by phone and in person sales platforms.
                    </ListGroupItem>
                    <ListGroupItem>
                      Coordinated front of house usher program for 400 volunteers.
                    </ListGroupItem>
                    <ListGroupItem>
                      Understood teamwork...at 3am, helping out in other departments to prevent catastrophe, laughing with everyone around because we all knew there would be time to sleep when we were dead.
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Layout>
      </div>
    );
}

export default Work;