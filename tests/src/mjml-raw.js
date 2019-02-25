import React from 'react';

export default class MjmlRaw extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-raw>
						This is my raw content
					</mj-raw>
				</mj-body>
			</mjml>
		);
	}
}
