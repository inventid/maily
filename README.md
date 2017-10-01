# Maily

![NPM version](https://img.shields.io/npm/v/maily.svg)
![NPM license](https://img.shields.io/npm/l/maily.svg)
[![Dependency Status](https://gemnasium.com/badges/github.com/inventid/maily.svg)](https://gemnasium.com/github.com/inventid/maily)

In order to build great emails, every developer has the tendency of going crazy.
To mitigate this, we've proposed Maily, a tool which can generate great emails using [Express](https://github.com/expressjs/express), [MJML](https://github.com/mjmlio/mjml) and [React](https://github.com/facebook/react).

Maily runs as a service, to which you can POST data.
It will return the appropriate HTML and text versions of your email respectively.

As an example, you can run `npm run example` (with Node 6), and request [an HTML email](http://localhost:3000/update.html?name=developer&body=This%20is%20an%20example%20message) or a [text email](http://localhost:3000/update.txt?name=developer&body=This%20is%20an%20example%20message)
 
You'll easily build your emails using reusable components in React, and maily will transform it to the 1995 HTML required by clients!

Internally, we use a Node.js project which houses our templates.
Maily is added as the render server.
Any service wishing to create an email, send the appropriate JSON in a HTTP POST to the correct template.
The resulting HTML and text are added to the email, and then send.

This allows you to run maily as a simple stateless service in e.g. Docker.
It also allows you to handle email as you wish, for example by adding attachments before sending.

We have written two blogs posts on how you can create your emails using Maily, leveraging React in the process:

- https://medium.com/@Rogier.Slag/creating-emails-with-the-maily-api-a-how-to-part-1-7f63306a7ad4
- https://medium.com/@Rogier.Slag/creating-emails-with-the-maily-api-a-how-to-part-2-a75885941da7

## Install
```zsh
git clone https://github.com/joostverdoorn/maily
cd maily
npm install
```
### Start server
`npm start`

## Usage

Open a browser and go to:
`http://localhost:3000/{:template}?{key=value}&{...}`

Data can be passed by using `GET` with query parameters or `POST` with a request body.

## Adding custom components
Components should render to MJML.
Normal HTML can be used, but has to be escaped using `mj-raw` tags.
We'd recommend to stay within the MJML spec though.

### Reusable components
To make a component reusable, it should return an `mj-section` element.
An example are the `header.js` files in the example directory.

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

Template components are used in rendering the data.
These are the type of component that you specify in the url endpoint.
The create a new Template Components, make sure to render your component within `mjml` and `mj-body` tags.
An example for these are the `update.js` files in the example dir.

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
      <mjml>
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
      </mjml>
    );
  }
});

```
