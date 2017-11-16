const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise')

const fetchHeaders = require('./')

test('returns headers', async t => {
    // setup mock site to use the `fetch-headers` service on:
    const mockSite = micro(async (req, res) => {
        res.setHeader('mocking', 'bird')
        micro.send(res, 200, {})
    })
    const mockSiteUrl = await listen(mockSite)

    // use `fetch-headers` service on mock site:
    const service = micro(fetchHeaders)
    const url = await listen(service)
    const body = await request(`${url}/?url=${mockSiteUrl}`)

    // assert service return headers:
    t.deepEqual(JSON.parse(body).headers['mocking'], 'bird')

    // clean up:
    mockSite.close()
    service.close()
})

test('returns `400` `MISSING_PARAMETER` if request has no `url` parameter', async t => {
    // use service on mock site:
    const service = micro(fetchHeaders)
    const url = await listen(service)
    const response = await request({
        method: 'GET',
        uri: `${url}/`,
        resolveWithFullResponse: true,
        simple: false,
    })
    const { errors } = JSON.parse(response.body)

    // assert service response:
    t.deepEqual(response.statusCode, 400)
    t.deepEqual(errors[0].code, 'MISSING_PARAMETER')

    // clean up:
    service.close()
})

test('returns `500` `FETCH_ERROR` if web page is not found', async t => {
    // setup mock site to use the service on:
    const mockSite = micro(async (req, res) => micro.send(res, 404, {}))
    const mockSiteUrl = await listen(mockSite)

    // use service on mock site:
    const service = micro(fetchHeaders)
    const url = await listen(service)
    const response = await request({
        method: 'GET',
        uri: `${url}/?url=${mockSiteUrl}`,
        resolveWithFullResponse: true,
        simple: false,
    })
    const { errors } = JSON.parse(response.body)

    // assert service response:
    t.deepEqual(response.statusCode, 500)
    t.deepEqual(errors[0].code, 'FETCH_ERROR')

    // clean up:
    mockSite.close()
    service.close()
})
