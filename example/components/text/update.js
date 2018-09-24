const PropTypes = require('prop-types');
const React = require('react');

const Header = require('./header');
const Footer = require('./footer');

class UpdateMail extends React.Component {
    static propTypes = {
		name : PropTypes.string.isRequired,
		body : PropTypes.string.isRequired
	};

    render() {
		return (
			<div>
				<Header name={this.props.name}/>
				{this.props.body}
				<Footer />
			</div>
		);
	}
}

module.exports = UpdateMail;
