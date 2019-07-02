const fs = require('fs')
const path = require('path')

const getFileContents = (fileName) => {
    return fs.readFileSync(fileName, 'utf8')
}

const writeFileContents = (fileName, content) => {
    fs.writeFileSync(path.resolve(__dirname, fileName), content, 'utf8')
}

const generate = () => {
    const specFilenames = [
        '../spec/index.yml',
    ]

    let swaggerContainerCode = ''
    let swaggerBundleCode = ''

    for (let i in specFilenames) {
        const specFilename = specFilenames[i]
        let specYaml = getFileContents(specFilename)

        specYaml = specYaml.replace(/\`/g, '')

        swaggerContainerCode += `
            <div id="swagger-ui-${i}"></div>
        `

        swaggerBundleCode += `
            let ui${i} = SwaggerUIBundle({
                spec: {},
                dom_id: '#swagger-ui-${i}',
                deepLinking: true,
                presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
                ],
                plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout"
            });

            ui${i}.specActions.updateSpec(\`${specYaml}\`);
        `
    }

    let html = getFileContents('./template.html')

    html = html.replace('{CONTAINERS}', swaggerContainerCode)
    html = html.replace('{BUNDLES}', swaggerBundleCode)

    writeFileContents('./index.html', html)
}

generate()