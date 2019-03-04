import PropTypes from 'prop-types';
import React from 'react';

import style from '../../style';

import Header from './header';
import Social from './social';
import Contact from './contact';

export default class Envelope extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		name: PropTypes.string,
	};

	static defaultProps = {
		name: 'you',
	};

	render() {
		const { name, children } = this.props;
		return (
			<mjml>
				<mj-body
					background-color={style.colors.tertiary}
					width="500px"
				>
					<Header name={name} />
					{children}
					<Contact />
					<Social />
				</mj-body>
			</mjml>
		);
	}
}
