import React from 'react';

export default class MjmlSection extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section full-width="full-width" background-color="red">
						{/* Your columns go here */}
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
