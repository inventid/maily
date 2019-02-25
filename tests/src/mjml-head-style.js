import React from 'react';

export default class MjmlHeadStyle extends React.Component {
	render() {
		return (
			<mjml>
				<mj-head>
					<mj-attributes>
						<mj-class name="mjclass" color="green" font-size="30px"/>
					</mj-attributes>
					<mj-style inline="inline">
						{`.blue-text div {
						color: blue !important;
					}`}
					</mj-style>
					<mj-style>
						{`.red-text div {
						color: red !important;
						text-decoration: underline !important;
					}`}
					</mj-style>
				</mj-head>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-text css-class="red-text">I'm red and underlined</mj-text>
							<mj-text css-class="blue-text">I'm blue because of inline</mj-text>
							<mj-text mj-class="mjclass">I'm green</mj-text>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
