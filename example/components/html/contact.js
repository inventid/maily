const React = require('react');

const style = require('../../style');

const Divider = require('./divider');
const Text = require('./text');

const Contact = React.createClass({
	propTypes : {
		lang : React.PropTypes.string
	},

	getDefaultProps() {
		return {
			lang : 'en'
		};
	},

	render() {
		return (
			<mj-section background-color={style.colors.white}
			            padding-top={`${style.distance}px`}
			            padding-left="0px"
			            padding-right="0px"
			            padding-bottom={`${style.distance}px`}>
				<mj-column vertical-align="top" width={style.width.full}>
					<Divider />
				</mj-column>
				<mj-column vertical-align="top" width={style.width.half}>
					<Text size="small" padding-top={`${style.distance}px`}
					      color={style.colors.primary}
					      align="left">
						inventid<br />
						Schieweg 226b<br />
						3038BP Rotterdam<br />
					</Text>
				</mj-column>
				<mj-column vertical-align="top"
				           width={style.width.half}>
					<Text size="small"
					      padding-top={`${style.distance}`}
					      color={style.colors.primary}
					      align="left">
						<a href="https://www.inventid.nl">www.inventid.nl</a><br />
						<a href="mailto:support@inventid.nl">support@inventid.nl</a><br />
						<a href="https://www.inventid.nl/docs/privacy-statement.pdf">Privacy Statement</a>
					</Text>
				</mj-column>
			</mj-section>
		)
	}
});

module.exports = Contact;
