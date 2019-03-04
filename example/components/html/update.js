import PropTypes from 'prop-types';
import React from 'react';

import FullWidthSection from './fullWidthSection';
import Text from './text';
import Envelope from './envelope';

export default class UpdateMail extends React.Component {
	static propTypes = {
		name : PropTypes.string.isRequired,
		body : PropTypes.string.isRequired
	};

	render() {
		return (
			<Envelope name={this.props.name}>
				<FullWidthSection>
					<Text>
						Hi {this.props.name},
					</Text>
					<Text>
						{this.props.body}
					</Text>
				</FullWidthSection>
			</Envelope>
		);
	}
}
