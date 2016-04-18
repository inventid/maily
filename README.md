# Mails

Responsive Mails using [Express](https://github.com/expressjs/express), [MJML](https://github.com/mjmlio/mjml) and [React](https://github.com/facebook/react)

## Install
```zsh
git clone https://github.com/joostverdoorn/mails
cd mails
npm install
```
### Start server
`npm start`

## Usage

Open a browser and go to:
`http://localhost:3000/{:template}?{key=value}&{...}`

Data can be passed by using `GET` with query parameters or `POST` with a request body.

## Adding custom components
Components should render to MJML. Normal HTML can be used, but has to be escaped using `mj-raw` tags.

### Reusable components
To make a component reusable, it should return an `mj-section` element.

```javascript
const React = require('react');

const style = require('../style');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <mj-section>
        <mj-text font-size={style.header.fontSize} color={style.colors.primary}>
          Hello, {this.props.name}
        </mj-text>
      </mj-section>
    );
  }
});

```

### Template components

Template components are used in rendering the data. These are the type of component that you specify in the url endpoint. The create a new Template Components, make sure to render your component within `mj-body` tags.

```javascript
const React = require('react');

const style = require('../style');

const Header = require('./header');
const Footer = require('./footer');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
  },

  render() {
    return (
      <mj-body>
        <Header name={this.props.name} />

        <mj-section>
          <mj-column>

            <mj-divider border-color={style.colors.tertiary}></mj-divider>

            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
              {this.props.body}
            </mj-text>

            <mj-button background-color={style.colors.secondary} href={this.props.href}>Go now!</mj-button>

          </mj-column>
        </mj-section>

        <Footer />
      </mj-body>
    );
  }
});

```
