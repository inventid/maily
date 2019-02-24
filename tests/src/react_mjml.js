import React from 'react';

class Section1 extends React.Component {
	render() {
		return (
			<mj-section background-color="#000000" background-repeat="no-repeat" text-align="center"
			            vertical-align="top">
				<mj-column>
					<mj-image align="center" border="none" padding-bottom="30px" padding="10px 25px"
					          src="http://5vph.mj.am/img/5vph/b/1g86w/0g67t.png" target="_blank" title=""
					          width="180px"/>
					<mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px"
					         line-height="22px" padding-bottom="0px" padding-top="0px" padding="10px 25px">
						<p style={{
							lineHeight : '18px',
							margin : ['10px', '0'],
							textAlign : 'center',
							fontSize : '14px',
							color : '#fff',
							fontFamily : "'Times New Roman',Helvetica,Arial,sans-serif"
						}}>WOMEN&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; MEN&nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; KIDS</p>
					</mj-text>
				</mj-column>
			</mj-section>
		);
	}
}

class Section2 extends React.Component {
	render() {
		return (
			<mj-section background-color="#000000" background-repeat="no-repeat" text-align="center"
			            vertical-align="top" padding="0 0 0 0">
				<mj-column>
					<mj-image align="center" border="none" padding-bottom="0px" padding-left="0px" padding-right="0px"
					          padding="0px 25px" src="http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg" target="_blank"
					          title="" width="780px"/>
				</mj-column>
			</mj-section>
		);
	}
}

class Section3 extends React.Component {
	render() {
		return (
			<mj-section background-color="#000000" background-repeat="no-repeat" text-align="center"
			            vertical-align="top" padding="0 0 0 0">
				<mj-column>
					<mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px"
					         line-height="22px" padding-bottom="5px" padding-top="25px" padding="10px 25px">
						<p style={{
							lineHeight : '60px',
							textAlign : 'center',
							margin : ['10px', '0'],
							fontSize : '55px',
							color : '#fcfcfc',
							fontFamily : "'Times New Roman',Helvetica,Arial,sans-serif"
						}}><b>Black Friday</b></p>
					</mj-text>
					<mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px"
					         line-height="22px" padding-bottom="20px" padding-top="0px" padding="10px 25px">
						<p style={{
							lineHeight : '30px',
							textAlign : 'center',
							margin : ['10px', '0'],
							color : '#f5f5f5',
							fontSize : '25px',
							fontFamily : "'Times New Roman',Helvetica,Arial,sans-serif"
						}}><b>Take an&nbsp; extra 50% off</b><br/><span>Use code SALEONSALE* at checkout</span></p>
					</mj-text>
				</mj-column>
			</mj-section>
		);
	}
}

class Section4 extends React.Component {
	render() {
		return (
			<mj-section background-color="#000000" background-repeat="no-repeat" text-align="center"
			            vertical-align="top" padding-bottom="40px" padding="0 0 0 0">
				<mj-column>
					<mj-button background-color="#ffffff" border-radius="3px"
					           font-family="Times New Roman, Helvetica, Arial, sans-serif" font-size="18px"
					           font-weight="normal" inner-padding="10px 25px" padding-bottom="30px" padding="10px 25px">
						<span style={{color : "#212020"}}>Shop Now</span></mj-button>
					<mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px"
					         line-height="22px" padding-bottom="0px" padding-top="5px" padding="10px 25px">
						<p>* Offer valid on Allura purchases on 17/29/11 at 11:59 pm. No price adjustments on
							previous&nbsp;<br/><span>purchases, offer limited to stock. Cannot be combined with any offer or promotion other than free.</span>
						</p>
					</mj-text>
				</mj-column>
			</mj-section>
		);
	}
}

export default class ReactMjml extends React.Component {
	render() {
		return (<mjml>
			<mj-body background-color="#F4F4F4">
				<Section1/>
				<Section2/>
				<Section3/>
				<Section4/>
			</mj-body>
		</mjml>);
	}
}
