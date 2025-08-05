const url = require('url')

const myUrl = new URL('http://mywebsite.com')

//serialized URL
console.log(myUrl.href)
console.log(myUrl.tostring())

//host root
console.log(myUrl.host)

//hostname(without port)
console.log(myUrl.hostname)