module.exports = {
  extends: ["taro/react"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "import/prefer-default-export": 0,
    "react/no-multi-comp": [true,{ ignoreStateless: true }]
  }
};
