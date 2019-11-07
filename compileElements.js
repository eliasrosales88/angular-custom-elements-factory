const fs = require('fs');
const {execSync} = require('child_process');

const components = fs.readdirSync(`src/app/components`);

console.log(components);

components.forEach((component, index) => {

        console.log(`\nCompiling  "${component}" - ${index + 1} of ${components.length} \n`);
    
        compileComponent(component);
});

function compileComponent(component) {

    const buildJsFiles = `ng build --prod --output-hashing=none --aot --main='src/app/components/${component}/compile.ts'`;
    const bundleIntoSingleFile = `cat dist/ace-factory/runtime-es2015.js dist/ace-factory/main-es2015.js > dist/ace-factory/ue-${component}.js`;
    const copyBundledComponent = `cp dist/ace-factory/ue-${component}.js dist/components/`;

    execSync(`${buildJsFiles} && ${bundleIntoSingleFile} && ${copyBundledComponent}`);
}
