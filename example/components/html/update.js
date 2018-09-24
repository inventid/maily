const PropTypes = require('prop-types');
const React = require('react');

const FullWidthSection = require('./fullWidthSection');
const Text = require('./text');
const Envelope = require('./envelope');

class UpdateMail extends React.Component {
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

module.exports = UpdateMail;
