import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

// const jumboStyle = {
//     backgroundImage: "url('/battery.png')",
//     backgroundSize: 'cover',
//     height: 500,
//     textAlign: 'right',
//     color: 'white'
// };


const WorkBanner = ({ imageURL, role, position, color, padd }) => {
    return (
        <div>
            <Jumbotron fluid style={{
                backgroundImage: `url(${imageURL})`,
                backgroundSize: 'cover',
                height: 300,
                textAlign: `${position}`,
                color: `${color}`
            }} >
                <Container fluid >
                    <h1 style={{ paddingTop: `${padd}`}} >{role}</h1>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default WorkBanner;