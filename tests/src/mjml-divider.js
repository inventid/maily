import React from 'react';

export default class MjmlDivider extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-divider border-width="1px" border-style="dashed" border-color="lightgrey"/>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
