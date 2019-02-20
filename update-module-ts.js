'use strict';

const fs = require('fs');
const latestVersion = require('latest-version');
require('dotenv').config();

let npmModuleFile = fs.readFileSync('./clients/package-ts.json');  
let ngPackage = fs.readFileSync('./clients/ng-package.json');  
let packageJson = JSON.parse(npmModuleFile); 
packageJson['name'] = process.env.TsServiceName;

async function getLatestService() {
    let version = null;
    try {
        version = await latestVersion(process.env.TsServiceName);
        let versionParts = version.split('.');
        version = `${versionParts[0]}.${versionParts[1]}.${parseInt(versionParts[2]) + 1}`;
    } catch(err) {
        version = "1.0.0";
    }

    packageJson['version'] = version;
    fs.writeFileSync('./clients/typescript/package.json', JSON.stringify(packageJson, null, 4));
    fs.writeFileSync('./clients/typescript/ng-package.json', ngPackage);
}

getLatestService();
