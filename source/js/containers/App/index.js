import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <ul className="App__header-menu">
          <li><Link to="/">Main</Link></li>
          <li><Link to="/hz">404</Link></li>
        </ul>
        { children }
      </div>
    );
  }
}
