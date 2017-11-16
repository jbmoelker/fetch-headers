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