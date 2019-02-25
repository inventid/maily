import React from 'react';

export default class MjmlHeadBreakpoint extends React.Component {
	render() {
		return (
			<mjml>
				<mj-head>
					<mj-breakpoint width="320px"/>
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
