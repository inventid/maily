const React = require('react');

const Header = require('./header');
const Footer = require('./footer');

const UpdateMail = React.createClass({
	propTypes : {
		name : React.PropTypes.string.isRequired,
		body : React.PropTypes.string.isRequired
	},

	render() {
		return (
			<div>
				<Header name={this.props.name}/>
				{this.props.body}
				<Footer />
			</div>
		);
	}
});

module.exports = UpdateMail;
