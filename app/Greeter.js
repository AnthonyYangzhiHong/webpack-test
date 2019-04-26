//Greeter,js
import React, {Component} from 'react';
import styles from './Greeter.css';
//import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div className="root">
        {"Nice to meet you guys!"}
      </div>
    );
  }
}

export default Greeter