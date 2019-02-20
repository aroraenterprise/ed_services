'use strict';

const fs = require('fs');
const latestVersion = require('latest-version');
const yargs = require('yargs');

async function getLatestService(dirName, serviceName) {
  let npmModuleFile = fs.readFileSync('./clients/package-ts.json');
  let ngPackage = fs.readFileSync('./clients/ng-package.json');
  let packageJson = JSON.parse(npmModuleFile);
  console.log('Building ' + serviceName);
  packageJson['name'] = serviceName;
  let version = null;
  try {
    version = await latestVersion(serviceName);
    let versionParts = version.split('.');
    version = `${versionParts[0]}.${versionParts[1]}.${parseInt(versionParts[2]) + 1}`;
  } catch (err) {
    version = "1.0.0";
  }

  packageJson['version'] = version;
  fs.writeFileSync(`./ts/${dirName}/package.json`, JSON.stringify(packageJson, null, 4));
  fs.writeFileSync(`./ts/${dirName}/ng-package.json`, ngPackage);
}

yargs
  .command(
    'deploy-store',
    'Deploy the store',
    {},
    () => getLatestService('store', '@edropin/store-ts'),
  )
  .wrap(120)
  .help().argv;
