const React = require('react');

const FullWidthSection = require('./fullWidthSection');
const Text = require('./text');
const Envelope = require('./envelope');

const UpdateMail = React.createClass({
	propTypes : {
		name : React.PropTypes.string.isRequired,
		body : React.PropTypes.string.isRequired
	},

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
});

module.exports = UpdateMail;
