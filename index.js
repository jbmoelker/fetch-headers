const request = require('request-promise')
const { parse: parseUrl, URL } = require('url')

module.exports = async (req, res) => {
    const siteUrl = parseUrl(req.url, true).query.url
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (!siteUrl) {
        return { error: '`url` search query parameter is required.' }
    }

    try {
        // even though we only need the headers, we still use `GET` instead of `HEAD`
        // as some servers simply don't reply to a `HEAD` request.
        response = await request({
            method: 'GET',
            uri: siteUrl,
            resolveWithFullResponse: true 
        })
        return { 
            headers: response.headers 
        }
    } catch (err) {
        return { error: `Unable to fetch webpage from '${siteUrl}'` }
    }
}
