import React from 'react';

export default class MjmlButton extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-button font-family="Helvetica" background-color="#f45e43" color="white">
								Don't click me!
							</mj-button>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
