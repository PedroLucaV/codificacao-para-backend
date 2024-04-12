const path = require('path')

const paths = [
    "/usr/local/../local/bin",
    "C:\\Users\\Alice\\..\\Documents\\..\\Downloads",
    "C:/Program Files/./Node.js",
    "/home/user/././././workspace/../project",
]

const normalize = (caminhoRequirido) => {
    return path.win32.normalize(caminhoRequirido)
}

paths.map((caminho) => {
    const caminhoNormalizado = normalize(caminho)
    console.log(caminhoNormalizado)
})