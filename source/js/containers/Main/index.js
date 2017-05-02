import React, { Component } from 'react';
import * as ActionTypes from 'actions/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

@connect(
  (state) => ({
    counter: state.app.get('counter'),
    isFetching: state.app.get('isFetching')
  }),
  (dispatch) => ({
    actions: bindActionCreators(ActionTypes, dispatch)
  })
)

export default class Main extends Component {
  static propTypes = {
    counter: PropTypes.number,
    actions: PropTypes.object
  }

  constructor(){
    super();
  }

  render() {
    const { counter, isFetching, actions } = this.props;

    return (
      <div className='Main'>
        {counter}
        <button onClick={ actions.testAction.bind(this, 1) }>add</button>

        <div className="fetching-status">
          {isFetching && 'isFetching!'}
        </div>

        <button onClick={ actions.fetchingStart.bind(this) }>Fetch</button>
      </div>
    );
  }
}
