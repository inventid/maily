import React from 'react';

export default class MjmlHeadStyle extends React.Component {
	render() {
		return (
			<mjml>
				<mj-head>
					<mj-title>Hello MJML</mj-title>
				</mj-head>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text>
								Hello World!
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
