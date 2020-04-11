<img src="https://i.ibb.co/Ltx76n2/8040.jpg" title="nightwatch" alt="nightwatch"/>

# Nightwatch.js tryout playground

> End-to-End testing with Nightwatch.js framework

## Setup Nightwatch.js with first test

```shell
$ npm install nightwatch --save-dev
$ npm install chromedriver --save-dev
$ # 1. Create nightwatch.conf.js with the content from https://nightwatchjs.org/gettingstarted/configuration/
$ # 2. Create `tests` folder with `firstTest.js` file in it (make a simple test)
$ # 3. Add "test": "nightwatch" to scripts @ package.json
$ # 4. For easy debugging, add "debug": "node --inspect-brk node_modules/.bin/nightwatch" to scripts @ package.json
$ # 5. Make sure your Chrome version aligns with "chromedriver": "^xx.0.0" @ package.json
$ npm run test
$ # or: npm run debug
```

---
