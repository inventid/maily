const React = require('react');

const style = require('../../style');

const Header = require('./header');
const Footer = require('./footer');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <div>
        <Header name={this.props.name} />
          {this.props.body}
          <br />
          <a href={this.props.href}>Go now!</a> ( {this.props.href} )
        <Footer />
      </div>
    );
  }
});
