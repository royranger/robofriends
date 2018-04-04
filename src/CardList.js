import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {

  render() {
    return(
      <div>
      {
          this.props.robots.map(robot =>
           <Card
             key={robot.id}
             username={robot.username}
             name={robot.name}
             email={robot.email}/>
        )
      }
      </div>
    );
  }
}

export default CardList;
