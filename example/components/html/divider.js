const React = require('react');

const style = require('../../style');

class Divider extends React.Component {
    render() {
		return (
			<mj-divider
				padding-top="0px"
				padding-bottom="0px"
				padding-left={`${style.distance}px`}
				padding-right={`${style.distance}px`}
				border-width="1px"
				border-color={style.colors.secondary} />
		);
	}
}

module.exports = Divider;
