# simple-logging-console [![Build Status](https://travis-ci.org/bealearts/simple-logging-console.svg)](https://travis-ci.org/bealearts/simple-logging-console) [![npm version](https://badge.fury.io/js/simple-logging-console-consoletize.svg)](http://badge.fury.io/js/simple-logging-console)

console.log() etc replacement with timestamp, loglevel and module output


## Installation

```shell
npm install simple-logging-console --save
```

## Usage
```js

var console = require('simple-logging-console')(module.id);

console.log('A Test');	//: 2016-02-19T21:45:58.302Z [DEBUG] index.js - A Test

console.info('An event');	//: 2016-02-19T21:45:58.502Z [INFO] index.js - An event

```

