import React from 'react';
import { CardGroup, Card } from 'reactstrap';
import IndexCard from './IndexCard';

const CardContainer = (props) => {
    
    return (
      <CardGroup>
        <Card>
          <IndexCard />
        </Card>
        <Card>
          <IndexCard />
        </Card>
        <Card>
          <IndexCard />
        </Card>
      </CardGroup>
    );
};

export default CardContainer;