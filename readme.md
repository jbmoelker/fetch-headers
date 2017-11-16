# Fetch headers

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
