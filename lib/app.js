'use strict';

var React = require('react'),
    App = React.createFactory(require('./components/MainComponent.jsx')),
    Actions = require('./actions/ActionCreators');

window.React = React;

React.render(
  App(),
  document.getElementById('content'),
  function(err) {
    if (err) {
      console.error(err);
    }
    Actions.initialize('../../statics/paradigms.json');
  }
);
