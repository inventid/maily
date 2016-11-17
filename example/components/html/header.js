const React = require('react');

const style = require('../../style');

module.exports = React.createClass({
	propTypes : {
		name : React.PropTypes.string.isRequired
	},

	render() {
		return (
			<mj-section>
				<mj-text font-size={style.header.fontSize}
				         color={style.colors.primary}>
					Hello, {this.props.name}
				</mj-text>
			</mj-section>
		);
	}
});
