import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

export default class Text extends React.Component {
	static propTypes = {
		align: PropTypes.string,
		paddingTop: PropTypes.string,
		color: PropTypes.string,
		children: PropTypes.node.isRequired,
	};

	static defaultProps = {
		align: 'left',
		paddingTop: `${style.distance}px`,
		color: style.colors.black,
	};

	render() {
		const {
			paddingTop, color, align, children,
		} = this.props;
		return (
			<mj-text
				padding-top={paddingTop}
				padding-bottom={`${style.distance}px`}
				color={color}
				line-height="21px"
				align={align}
			>
				{children}
			</mj-text>
		);
	}
}
