import React from 'react';
import { CardGroup } from 'reactstrap';
import IndexCard from './IndexCard';

const CardContainer = (props) => {
    
    return (
        <CardGroup>
            <IndexCard />
        </CardGroup>
    )
};

export default CardContainer;