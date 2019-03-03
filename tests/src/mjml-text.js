import React from 'react';

export default class MjmlText extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text>
								<h1>Hey Title!</h1>
							</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
