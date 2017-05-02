import React, { Component } from 'react';
import * as actions from 'actions/app';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

@connect(
  (state) => ({
    counter: state.app.get('counter')
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

export default class Main extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className='Main'>
        {this.props.counter}<button onClick={this.props.actions.testAction.bind(this, 3)}>+</button>
      </div>
    );
  }
}
