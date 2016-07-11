const React = require('react');

const style = require('../../style');

const Header = require('./header');

const Social = React.createClass({
  render() {
    return (
        <mj-section background-color={style.colors.white}
                    padding-top={`${style.distance}px`}
                    padding-left="0px"
                    padding-right="0px"
                    padding-bottom={`${style.distance}px`}>
          <mj-social align="center"
                     facebook-content="inventid" facebook-href="https://www.facebook.com/inventid.nl"
                     display="facebook:url"
                     padding="0px 0px 0px 0px" />
        </mj-section>
    )
  }
});

const Divider = React.createClass({
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
});

const Text = React.createClass({
  propTypes: {
    size: React.PropTypes.string,
    style: React.PropTypes.string,
    align: React.PropTypes.string,
    paddingTop: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      size: 'medium',
      style: 'normal',
      align: 'left',
      paddingTop: `${style.distance}px`,
      color: style.colors.black
    }
  },

  render() {
    return (
        <mj-text padding-top={this.props.paddingTop}
                 padding-bottom={`${style.distance}px`}
                 color={this.props.color}
                 align={this.props.align}>
          {this.props.children}
        </mj-text>);
  }
});

const Contact = React.createClass({
  propTypes: {
    lang: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      lang: 'en'
    };
  },

  render() {
    return (
        <mj-section background-color={style.colors.white}
                    padding-top={`${style.distance}px`}
                    padding-left="0px"
                    padding-right="0px"
                    padding-bottom={`${style.distance}px`}>
          <mj-column vertical-align="top" width={style.width.full}>
            <Divider />
          </mj-column>
          <mj-column vertical-align="top" width={style.width.half}>
            <Text size="small" padding-top={`${style.distance}px`} color={style.colors.primary} align="left">
              inventid<br />
              Burgwal 47<br />
              2611GG Delft<br />
            </Text>
          </mj-column>
          <mj-column vertical-align="top" width={style.width.half}>
            <Text size="small" padding-top={`${style.distance}`} color={style.colors.primary} align="left">
              <a href="https://www.inventid.nl">www.inventid.nl</a><br />
              <a href="mailto:support@inventid.nl">support@inventid.nl</a><br />
              <a href="https://www.inventid.nl/docs/privacy-statement.pdf">Privacy Statement</a>
            </Text>
          </mj-column>
        </mj-section>
    )
  }
});

const Envelope = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired,
    showHeaderDivider: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      showHeaderDivider: true
    };
  },

  render() {
    return (
        <mjml>
          <mj-body>
            <mj-container background-color={style.colors.tertiary} width="500px">
              <Header />
              {this.props.children}
              <Contact />
              <Social />
            </mj-container>
          </mj-body>
        </mjml>
    );
  }
});

const FullWidthSection = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired,
    paddingTop: React.PropTypes.string,
    paddingBottom: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      paddingTop: '0px',
      paddingBottom: '0px',
      backgroundColor: style.colors.white
    };
  },

  render() {
    return (
        <mj-section padding-top={this.props.paddingTop} padding-bottom={this.props.paddingBottom} background-color={this.props.backgroundColor}>
          <mj-column width="100%" vertical-align="top">
            {this.props.children}
          </mj-column>
        </mj-section>
    );
  }
});

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  },

  render() {
    return (
        <Envelope>
          <FullWidthSection>
            <Text>
              Hi {this.props.name},
            </Text>
            <Text>
              {this.props.body}
            </Text>
          </FullWidthSection>
        </Envelope>
    );
  }
});
