import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

export default class UpdateMail extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	};

	render() {
		const { name, body } = this.props;
		return (
			<div>
				<Header name={name} />
				{body}
				<Footer />
			</div>
		);
	}
}
