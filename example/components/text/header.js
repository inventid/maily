import PropTypes from 'prop-types';
import React from 'react';

export default class extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
	};

	render() {
		const { name } = this.props;
		return (
			<div>
				{'Hello, '}
				{name}
				<br />
			</div>
		);
	}
}
