import PropTypes from 'prop-types';
import React from 'react';

import FullWidthSection from './fullWidthSection';
import Text from './text';
import Envelope from './envelope';

export default class UpdateMail extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	};

	render() {
		const { name, body } = this.props;
		return (
			<Envelope name={name}>
				<FullWidthSection>
					<Text>
						{`Hi ${name},`}
					</Text>
					<Text>
						{body}
					</Text>
				</FullWidthSection>
			</Envelope>
		);
	}
}
