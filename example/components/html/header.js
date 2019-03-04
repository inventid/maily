import React from 'react';
import PropTypes from 'prop-types';

const style = require('../../style');

export default class extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
	};

	render() {
		const { name } = this.props;
		return (
			<mj-section padding="18px">
				<mj-column>
					<mj-text
						font-size={style.header.fontSize}
						color={style.colors.primary}
					>
						{`Hello ${name},`}
					</mj-text>
				</mj-column>
			</mj-section>
		);
	}
}
