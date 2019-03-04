import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

export default class UpdateMail extends React.Component {
	static propTypes = {
		name : PropTypes.string.isRequired,
		body : PropTypes.string.isRequired
	};

	render() {
		return (
			<div>
				<Header name={this.props.name}/>
				{this.props.body}
				<Footer/>
			</div>
		);
	}
}
