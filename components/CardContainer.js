import React from 'react';
import { CardGroup, Card } from 'reactstrap';
import IndexCard from './IndexCard';

const CardContainer = (props) => {
    
    return (
      <CardGroup>
        <Card>
          <IndexCard
            dest="/work"
            title="Work History"
            pic="/cistern1.jpg"
            desc="Arts, Politics, Transportation...take your pick!"
          />
        </Card>
        <Card>
          <IndexCard 
            dest="/projects" 
            title="Projects"
            pic="/ashley-259.jpg"
            desc="Take a tour of my latest projects." />
        </Card>
        <Card>
          <IndexCard 
            dest="/hobbies" 
            title="Hobbies"
            pic="/follykayak.jpg"
            desc="Spare time...Yes Please!" />
        </Card>
      </CardGroup>
    );
};

export default CardContainer;