# Maily

![NPM version](https://img.shields.io/npm/v/maily.svg)
![NPM license](https://img.shields.io/npm/l/maily.svg)

In order to build great emails, every developer has the tendency of going crazy.
To mitigate this, we've proposed Maily, a tool which can generate great emails using [React](https://github.com/facebook/react), [MJML](https://github.com/mjmlio/mjml) and [Express](https://github.com/expressjs/express).

Maily runs as a service, to which you can POST data.
It will return the appropriate HTML and text versions of your email respectively, based on the data you send to it.

As an example, you can run `yarn example` (with Node 8+), and request [an HTML email](http://localhost:3000/update.html?name=developer&body=This%20is%20an%20example%20message) or a [text email](http://localhost:3000/update.txt?name=developer&body=This%20is%20an%20example%20message)
 
You'll easily build your emails using reusable components in React, and Maily will transform it to the 1993 HTML required by clients!

This allows you to write re-usable email components in a nice declarative language.
An example!

```jsx
<Envelope registeredUser={true} unsubscribeLink={this.props.unsubscribeLink>
<Greeting name={this.props.name} />
<Text>Thank you for registering. Your account has been activated. Click the button below to start!</Text>
<ActionButton href="https://your.inventid.nl">Visit personal page</ActionButton>
</Envelope>
```

## Getting started

We have written two blogs posts on how you can create your emails using Maily, leveraging React in the process:

- [https://medium.com/@Rogier.Slag/creating-emails-with-the-maily-api-a-how-to-part-1-7f63306a7ad4](Creating emails with the Maily API - How to part 1)
- [https://medium.com/@Rogier.Slag/creating-emails-with-the-maily-api-a-how-to-part-2-a75885941da7](Creating emails with the Maily API - How to part 2)

Or take a look at the [`/example`](https://github.com/inventid/maily/tree/master/example) directory!

## Our usage

Internally, we use a Node.js project which houses our templates.
Maily is added as the render server.
Any service wishing to create an email, send the appropriate JSON in a HTTP POST to the correct template.
The resulting HTML and text are added to the email, and then send.

This allows you to run maily as a simple stateless service in e.g. Docker.
It also allows you to handle email as you wish, for example by adding attachments before sending.


## Install
```zsh
git clone https://github.com/inventid/maily
cd maily
npm install
```
### Start server
`npm start`

## Usage

Open a browser and go to:
`http://localhost:3000/{:template}?{key=value}&{...}`

Data can be passed by using `GET` with query parameters or `POST` with a request body.


