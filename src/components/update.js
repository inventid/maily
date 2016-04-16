const React = require('react');

const style = require('../style');

const Header = require('./header');
const Footer = require('./footer');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <mj-body>
        <Header name={this.props.name} />

        <mj-section>
          <mj-column>

            <mj-divider border-color={style.colors.tertiary}></mj-divider>

            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
              {this.props.body}
            </mj-text>

            <mj-button background-color={style.colors.secondary} href={this.props.href}>Go now!</mj-button>

          </mj-column>
        </mj-section>

        <Footer />
      </mj-body>
    );
  }
});
