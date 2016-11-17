const React = require('react');

module.exports = React.createClass({
	propTypes : {
		name : React.PropTypes.string.isRequired
	},

	render() {
		return <div>
			Hello, {this.props.name}
			<br />
		</div>;
	}
});
