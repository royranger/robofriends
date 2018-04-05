import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users=> this.setState({robots: users}));
  }

  onSearchChange = (event) => {
    this.setState(
      {
        searchfield: event.target.value
      }
    );
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
// In case the robots are taking a long time to load, users have something to look at
    if (this.state.robots.length === 0) {
      return(
        <h1>Loading...</h1>
      )
    } else {
      return(
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <CardList robots={filteredRobots}/>
        </div>
      );
    }
  }
}

export default App;
