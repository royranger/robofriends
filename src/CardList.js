import React from 'react';
import Card from './Card';
import {robots} from './robots';

class CardList extends React.Component {

  render() {
    return(
      <div>
      {
          robots.map(robot => {
          return <Card username={robot.username} name={robot.name} email={robot.email}/>;
        })
      }
      </div>
    );
  }
}

export default CardList;
