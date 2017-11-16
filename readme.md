# Fetch headers [![Build Status](https://travis-ci.org/jbmoelker/fetch-headers.svg?branch=master)](https://travis-ci.org/jbmoelker/fetch-headers) [![Coverage Status](https://coveralls.io/repos/github/jbmoelker/fetch-headers/badge.svg?branch=master)](https://coveralls.io/github/jbmoelker/fetch-headers?branch=master) [![npm fetch-headers package](https://img.shields.io/npm/v/@jbmoelker/fetch-headers.svg)](https://npmjs.org/package/@jbmoelker/fetch-headers)

**Micro service to fetch response headers of a webpage as JSON.**

Demo: [`fetch-headers.now.sh/?url=https://www.voorhoede.nl`](https://fetch-headers.now.sh/?url=https://www.voorhoede.nl).


## Parameters

The service can be configured with the following URL query parameters:

Parameter | Description | Example
--- | --- | ---
`url` (required) | URL of the web page to fetch headers of. | `url=https://www.voorhoede.nl`


## Development

This project requires [Node.js](http://nodejs.org/) (>= v8) and [npm](https://npmjs.org/) (bundled with Node.js).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`deploy` | Deploys project to now and aliases latest version to [`https://fetch-headers.now.sh`](https://fetch-headers.now.sh).
`dev` | Starts micro service with hot reloading for development on [`http://localhost:3000`](http://localhost:3000).
`start` | Starts micro service for production on [`http://localhost:3000`](http://localhost:3000).
`test` | Run all tests in [`test.js`](test.js).
`watch` | Run tests on file changes.


## License

[MIT licensed](license) © [Jasper Moelker](https://twitter.com/jbmoelker)
