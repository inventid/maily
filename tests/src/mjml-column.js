import React from 'react';

export default class MjmlColumn extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							{/* Column #1 */}
						</mj-column>
						<mj-column>
							{/* Column #2 */}
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
