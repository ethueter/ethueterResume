import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbo = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Tyler Hueter</h1>
                    <p className="lead">Welcome to my site. Take it for a spin and learn a bit about me.</p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Jumbo;