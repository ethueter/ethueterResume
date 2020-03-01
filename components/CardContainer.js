import React from 'react';
import { CardGroup, Card } from 'reactstrap';
import IndexCard from './IndexCard';

const CardContainer = (props) => {
    
    return (
      <CardGroup>
        <Card>
          <IndexCard dest="/work" title="Work History" />
        </Card>
        <Card>
                <IndexCard dest="/projects" title="Projects" />
        </Card>
        <Card>
                <IndexCard dest="/hobbies" title="Hobbies" />
        </Card>
      </CardGroup>
    );
};

export default CardContainer;