'use strict';

const fs = require('fs');
const latestVersion = require('latest-version');
const yargs = require('yargs');

async function getLatestService(dirName, serviceName, majorVersion = 1, minorVersion = 1) {
  let npmModuleFile = fs.readFileSync('./clients/package-ts.json');
  let ngPackage = fs.readFileSync('./clients/ng-package.json');
  let packageJson = JSON.parse(npmModuleFile);
  console.log('Building ' + serviceName);
  packageJson['name'] = serviceName;
  let version = null;
  try {
    version = await latestVersion(serviceName);
    let versionParts = version.split('.');
    version = `${majorVersion}.${minorVersion}.${parseInt(versionParts[1]) === minorVersion ? (parseInt(versionParts[2]) + 1) : 0}`;
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
    () => getLatestService('store', '@edropin/store-ts', 1, 2),
  )
  .command(
    'deploy-events',
    'Deploy the events',
    {},
    () => getLatestService('events', '@edropin/events-ts', 1, 2),
  )
  .command(
    'deploy-accounts',
    'Deploy the accounts',
    {},
    () => getLatestService('accounts', '@edropin/accounts-ts', 1, 2),
  )
  .wrap(120)
  .help().argv;
