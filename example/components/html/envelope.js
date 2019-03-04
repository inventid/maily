import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

import Header from './header';
import Social from './social';
import Contact from './contact';

export default class Envelope extends React.Component {
	static propTypes = {
		children : PropTypes.node.isRequired,
		showHeaderDivider : PropTypes.bool,
		name : PropTypes.string,
	};

	static defaultProps = {
		showHeaderDivider : true
	};

	render() {
		return (
			<mjml>
				<mj-body background-color={style.colors.tertiary}
				         width="500px">
					<Header name={this.props.name}/>
					{this.props.children}
					<Contact/>
					<Social/>
				</mj-body>
			</mjml>
		);
	}
}
