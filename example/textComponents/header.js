const React = require('react');

const style = require('../style');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <p>
        Hello {this.props.name}!
        <br />
        <br />
      </p>
    );
  }
});
