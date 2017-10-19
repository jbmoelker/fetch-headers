# Fetch headers

**Micro service to fetch response headers of a webpage as JSON.**

The only required parameter is the URL of a webpage. The server fetches the given webpage,
and returns its response headers as JSON.

Demo: [`fetch-headers.now.sh/?url=https://www.voorhoede.nl`](https://fetch-headers.now.sh/?url=https://www.voorhoede.nl).


## Development

This project requires [Node.js](http://nodejs.org/) (>= v8) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available on all exercise branches:

`npm run ...` | Description
---|---
`deploy` | Deploys project to now and aliases latest version to [`https://fetch-headers.now.sh`](https://fetch-headers.now.sh).
`dev` | Starts micro service with hot reloading for development on [`http://localhost:3000`](http://localhost:3000).
`start` | Starts micro service for production on [`http://localhost:3000`](http://localhost:3000).


## License

[MIT licensed](license) © [Jasper Moelker](https://twitter.com/jbmoelker)
