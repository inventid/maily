import React from 'react';

export default class MjmlHeadPreview extends React.Component {
	render() {
		return (
			<mjml>
				<mj-head>
					<mj-preview>Hello MJML</mj-preview>
				</mj-head>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text>
								{'Hello World!'}
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>

		);
	}
}
