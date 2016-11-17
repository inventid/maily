const React = require('react');

const style = require('../../style');

const FullWidthSection = React.createClass({

	propTypes: {
		children: React.PropTypes.node.isRequired,
		paddingTop: React.PropTypes.string,
		paddingBottom: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			paddingTop: '0px',
			paddingBottom: '0px',
			backgroundColor: style.colors.white
		};
	},

	render() {
		return (
			<mj-section padding-top={this.props.paddingTop}
			            padding-bottom={this.props.paddingBottom}
			            background-color={this.props.backgroundColor}>
				<mj-column width="100%"
				           vertical-align="top">
					{this.props.children}
				</mj-column>
			</mj-section>
		);
	}
});

module.exports = FullWidthSection;
