import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Link from 'next/link';

const IndexCard = ({ dest, title }) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="url('chiefshelmet.jpeg')" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Link href={dest}>
                        <Button>Button</Button>
                    </Link>
                    
                </CardBody>
            </Card>
        </div>
    );
};

export default IndexCard;