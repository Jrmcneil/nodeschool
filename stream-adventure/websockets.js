var ws = require('websocket-stream')
var stream = ws('ws://localhost:8000')


// ws.pipe('hello\n')

ws.end('hello\n')