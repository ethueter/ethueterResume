import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Link from 'next/link';

const IndexCard = ({ dest, title, pic, desc }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" height="200px" src={pic} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h2" >{title}</CardTitle>
                    
                    <CardText>{desc}</CardText>
                    <Link href={dest}>
                        <Button>Take a Look</Button>
                    </Link>
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default IndexCard;