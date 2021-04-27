{
    "plugins": ["react"],
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "env": {
      "browser": true
    },
    "rules": {
      "react/prop-types": "off",
      "semi": "error"
    }
  }