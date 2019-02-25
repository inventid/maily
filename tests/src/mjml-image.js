import React from 'react';

export default class MjmlImage extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-image width="300px"
							          src="http://www.online-image-editor.com//styles/2014/images/example_image.png"/>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>

		);
	}
}
