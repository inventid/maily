const React = require('react');

const style = require('../../style');

const Header = require('./header');
const Social = require('./social');
const Contact = require('./contact');

const Envelope = React.createClass({

	propTypes: {
		children: React.PropTypes.node.isRequired,
		showHeaderDivider: React.PropTypes.bool,
		name: React.PropTypes.string,
	},

	getDefaultProps() {
		return {
			showHeaderDivider: true
		};
	},

	render() {
		return (
			<mjml>
				<mj-body background-color={style.colors.tertiary}
				                         width="500px">
						<Header name={this.props.name} />
						{this.props.children}
						<Contact />
						<Social />
				</mj-body>
			</mjml>
		);
	}
});

module.exports = Envelope;
