import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

export default class Text extends React.Component {
	static propTypes = {
		size : PropTypes.string,
		style : PropTypes.string,
		align : PropTypes.string,
		paddingTop : PropTypes.string,
		color : PropTypes.string
	};

	static defaultProps = {
		size : 'medium',
		style : 'normal',
		align : 'left',
		paddingTop : `${style.distance}px`,
		color : style.colors.black
	};

	render() {
		return (
			<mj-text padding-top={this.props.paddingTop}
			         padding-bottom={`${style.distance}px`}
			         color={this.props.color}
			         line-height="21px"
			         align={this.props.align}>
				{this.props.children}
			</mj-text>);
	}
}
