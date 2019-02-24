import PropTypes from 'prop-types';
import React from 'react';

export default class extends React.Component {
	static propTypes = {
		name : PropTypes.string.isRequired
	};

	render() {
		return <div>
			Hello, {this.props.name}
			<br/>
		</div>;
	}
};
