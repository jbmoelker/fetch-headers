const pkg = require('./package')
const request = require('request-promise')
const { parse: parseUrl, URL } = require('url')
const { send } = require('micro')

function missingParameterError (parameter, type = 'query') {
    return {
        code: 'MISSING_PARAMETER',
        parameter,
        message: `'${parameter}' ${type} parameter is required.`,
        docs: `${pkg.homepage}#parameters`
    }
}

module.exports = async (req, res) => {
    const siteUrl = parseUrl(req.url, true).query.url
    const errors = []
    let headers

    res.setHeader('Access-Control-Allow-Origin', '*')

    if (!siteUrl) {
        errors.push(missingParameterError('url'))
    }
    if (errors.length > 0) {
        return send(res, 400, { errors })
    }

    try {
        // even though we only need the headers, we still use `GET` instead of `HEAD`
        // as some servers simply don't reply to a `HEAD` request.
        response = await request({
            method: 'GET',
            uri: siteUrl,
            resolveWithFullResponse: true 
        })
        headers = response.headers 
    } catch (err) {
        return send(res, 500, { errors: [
            { code: 'FETCH_ERROR', message: `Unable to fetch headers from '${siteUrl}'` }
        ]})
    }

    send(res, 200, { headers })
}
