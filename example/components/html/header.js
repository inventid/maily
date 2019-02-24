const PropTypes = require('prop-types');
const React = require('react');

const style = require('../../style');

export default class extends React.Component {
	static propTypes = {
		name : PropTypes.string.isRequired
	};

	render() {
		return (
			<mj-section padding={`18px`}>
				<mj-column>
					<mj-text font-size={style.header.fontSize}
					         color={style.colors.primary}>
						Hello, {this.props.name}
					</mj-text>
				</mj-column>
			</mj-section>
		);
	}
};
