'use strict';

var React = require('react'),
    ParadigmStore = require('../stores/ParadigmStore'),
    AppConstants = require('../AppConstants');

var App = React.createClass({

  getInitialState: function() {
    return {
      data: 'InitialState'
    };
  },

  componentDidMount: function() {
    ParadigmStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount: function() {
    ParadigmStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange: function() {
    console.info('updating state in view');
  },

  render: function() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
});

module.exports = App;
