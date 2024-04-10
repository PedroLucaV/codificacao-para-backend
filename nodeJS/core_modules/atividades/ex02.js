// Escreva um programa em Node.js que construa uma URL com base nas seguintes informações:
// Protocolo: http
// Host: api.example.com
// Caminho: /data
// Parâmetros de consulta: {param1: 'value1', param2: 'value2'}
const url = require('node:url')

const protocol =  'http'
const host =  'api.example.com'
const path =  '/data'
const param1 = 'value1'
const param2 = 'value2'

const adress = 'https://example.com.br'
const parseUrl = new url.URL(adress)
parseUrl.protocol = protocol
parseUrl.host = host
parseUrl.pathname = path
parseUrl.searchParams = 
console.log(parseUrl.href)