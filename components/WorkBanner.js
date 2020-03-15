import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

// const jumboStyle = {
//     backgroundImage: "url('/battery.png')",
//     backgroundSize: 'cover',
//     height: 500,
//     textAlign: 'right',
//     color: 'white'
// };


const WorkBanner = ({ imageURL }) => {
    return (
        <div>
            <Jumbotron fluid style={{
                backgroundImage: `url(${imageURL})`,
                backgroundSize: 'cover',
                height: 300,
                textAlign: 'right',
                color: 'white'
            }} >
                <Container fluid >
                    <h1 className="display-3">Tyler Hueter</h1>
                    <p className="lead">
                        Welcome to my site. Take it for a spin and learn a bit about me.
            </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default WorkBanner;