import React from 'react';

export default class MjmlSocial extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-social font-size="15px" icon-size="30px" mode="horizontal">
								<mj-social-element name="facebook" href="https://mjml.io/">
									{'Facebook'}
								</mj-social-element>
								<mj-social-element name="google" href="https://mjml.io/">
									{'Google'}
								</mj-social-element>
								<mj-social-element name="twitter" href="https://mjml.io/">
									{'Twitter'}
								</mj-social-element>
							</mj-social>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
