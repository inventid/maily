import React from 'react';

import style from '../../style';

export default class Social extends React.Component {
	render() {
		return (
			<mj-section
				background-color={style.colors.white}
				padding-top={`${style.distance}px`}
				padding-left="0px"
				padding-right="0px"
				padding-bottom={`${style.distance}px`}
			>
				<mj-column>
					<mj-social>
						<mj-social-element
							background-color="#3b5998"
							href="https://www.facebook.com/inventid.nl"
							src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png"
						/>
					</mj-social>
				</mj-column>
			</mj-section>
		);
	}
}
