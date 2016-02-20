# logify-console

console.log() etc replacement with timestamp, loglevel and module output


## Installation

```shell
npm install logify-console --save
```

## Usage
```js

var console = require('logify-console')(module.id);

console.log('A Test');	//: 2016-02-19T21:45:58.302Z [DEBUG] index.js - A Test

console.info('An event');	//: 2016-02-19T21:45:58.502Z [INFO] index.js - An event

```

