import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

export default class FullWidthSection extends React.Component {
	static propTypes = {
		children : PropTypes.node.isRequired,
		paddingTop : PropTypes.string,
		paddingBottom : PropTypes.string
	};

	static defaultProps = {
		paddingTop : '0px',
		paddingBottom : '0px',
		backgroundColor : style.colors.white
	};

	render() {
		return (
			<mj-section padding-top={this.props.paddingTop}
			            padding-bottom={this.props.paddingBottom}
			            background-color={this.props.backgroundColor}>
				<mj-column width="100%"
				           vertical-align="top">
					{this.props.children}
				</mj-column>
			</mj-section>
		);
	}
}
