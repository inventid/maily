import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

export default class FullWidthSection extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		paddingTop: PropTypes.string,
		paddingBottom: PropTypes.string,
		backgroundColor: PropTypes.string,
	};

	static defaultProps = {
		paddingTop: '0px',
		paddingBottom: '0px',
		backgroundColor: style.colors.white,
	};

	render() {
		const {
			paddingTop, paddingBottom, backgroundColor, children,
		} = this.props;
		return (
			<mj-section
				padding-top={paddingTop}
				padding-bottom={paddingBottom}
				background-color={backgroundColor}
			>
				<mj-column
					width="100%"
					vertical-align="top"
				>
					{children}
				</mj-column>
			</mj-section>
		);
	}
}
