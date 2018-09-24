const PropTypes = require('prop-types');
const React = require('react');

module.exports = class extends React.Component {
    static propTypes = {
		name : PropTypes.string.isRequired
	};

    render() {
		return <div>
			Hello, {this.props.name}
			<br />
		</div>;
	}
};
