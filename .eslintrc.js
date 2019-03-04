module.exports = {
  "extends": [
    "airbnb"
  ],
  "parser": "babel-eslint",
  "plugins": [
  ],
  "env": {
    "node": true
  },
  "globals": {
    "process": true,
    "__dirname": true
  },
  "rules": {
    "react/prefer-stateless-function": 0,
    //copied from airbnb styleguide, but changed 2 -> tab
    "indent": [
      'error',
      'tab',
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        }
      }
    ],
    "react/jsx-indent": [
      "error",
      "tab"
    ],
    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [
      'error',
      'tab'
    ],
    "no-tabs": 0,
    // The default rule shipped with the airbnb config forces to add both an `id` to each
    // label element AND to nest the input. There is no reason to force both unless you're
    // planning to support obscure > 10 year old devices, so we relax this to require
    // either of them.
    // Source: https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/51
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [
          'label'
        ],
        required: {
          "some": [
            "nesting",
            "id"
          ]
        }
      }
    ],
    "max-len": [
      "error",
      {
        "code": 160,
        "tabWidth": 2,
        "ignoreUrls": true
      }
    ],
    // The airbnb config comes without code quality rules, it's purely a set of style rules
    // The below are rules to enforce a certain level of code quality
    "max-nested-callbacks": [
      "error",
      3
    ],
    "max-params": [
      "error",
      4
    ],
    "complexity": [
      "error",
      10
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "react/jsx-filename-extension": 0,
    "react/no-multi-comp": 0,
    "no-await-in-loop": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-no-target-blank": 0,
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": true,
    }]
  },
  "overrides": [
    {
      files: [
        "tests/index.js"
      ],
      "rules": {
        "no-console": 0
      }
    }
  ]
};
