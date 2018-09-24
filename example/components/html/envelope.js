const PropTypes = require('prop-types');
const React = require('react');

const style = require('../../style');

const Header = require('./header');
const Social = require('./social');
const Contact = require('./contact');

class Envelope extends React.Component {
    static propTypes = {
		children: PropTypes.node.isRequired,
		showHeaderDivider: PropTypes.bool,
		name: PropTypes.string,
	};

    static defaultProps = {
        showHeaderDivider: true
    };

    render() {
		return (
			<mjml>
				<mj-body background-color={style.colors.tertiary}
				                         width="500px">
						<Header name={this.props.name} />
						{this.props.children}
						<Contact />
						<Social />
				</mj-body>
			</mjml>
		);
	}
}

module.exports = Envelope;
