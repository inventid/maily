import React from 'react';

export default class MjmlTable extends React.Component {
	render() {
		return (
			<mjml>
				<mj-body>
					<mj-section>
						<mj-column>
							<mj-table>
								<tr style={{
									borderBottom: '1px solid #ecedee',
									textAlign: 'left',
									padding: '15px 0',
								}}
								>
									<th style={{ padding: '0 15px 0 0' }}>Year</th>
									<th style={{ padding: '0 15px' }}>Language</th>
									<th style={{ padding: '0 0 0 15px' }}>Inspired from</th>
								</tr>
								<tr>
									<td style={{ padding: '0 15px 0 0' }}>1995</td>
									<td style={{ padding: '0 15px' }}>PHP</td>
									<td style={{ padding: '0 0 0 15px' }}>C, Shell Unix</td>
								</tr>
								<tr>
									<td style={{ padding: '0 15px 0 0' }}>1995</td>
									<td style={{ padding: '0 15px' }}>JavaScript</td>
									<td style={{ padding: '0 0 0 15px' }}>Scheme, Self</td>
								</tr>
							</mj-table>
						</mj-column>
					</mj-section>
				</mj-body>
			</mjml>
		);
	}
}
