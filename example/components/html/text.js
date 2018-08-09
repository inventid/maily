const React = require('react');

const style = require('../../style');

const Text = React.createClass({
	propTypes : {
		size : React.PropTypes.string,
		style : React.PropTypes.string,
		align : React.PropTypes.string,
		paddingTop : React.PropTypes.string,
		color : React.PropTypes.string
	},

	getDefaultProps() {
		return {
			size : 'medium',
			style : 'normal',
			align : 'left',
			paddingTop : `${style.distance}px`,
			color : style.colors.black
		}
	},

	render() {
		return (
			<mj-text padding-top={this.props.paddingTop}
			         padding-bottom={`${style.distance}px`}
			         color={this.props.color}
			         line-height={1.4}
			         align={this.props.align}>
				{this.props.children}
			</mj-text>);
	}
});

module.exports = Text;
