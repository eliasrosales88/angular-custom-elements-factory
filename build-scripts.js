const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
    const files = [
        "./dist/ace-factory/main-es2015.js",
        "./dist/ace-factory/runtime-es2015.js",
        "./dist/ace-factory/polyfills-es2015.js",
    ]

    await fs.ensureDir("elements")
    await concat(files, "elements/ue-button.js");
})()