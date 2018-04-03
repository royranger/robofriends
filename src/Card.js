import React from 'react';
import './Card.css';

class Card extends React.Component {

  render() {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robot headshot' src={`https://robohash.org/${this.props.username}?size=200x200`}/>
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
