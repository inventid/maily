import React from 'react';

export default class MjmlSpacer extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text>A first line of text</mj-text>
							<mj-spacer height="50px" />
							<mj-text>A second line of text</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
