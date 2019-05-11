const { execSync } = require('child_process');
const { mkdirSync, readdirSync, writeFileSync } = require('fs');

execSync('rm -rf ./build');
mkdirSync('./build');

const accounts = readdirSync('./src');
for (const account of accounts) {
  const tweets = require(`../src/${account}/index.js`);
  writeFileSync(
    `./build/${account}.json`,
    JSON.stringify(tweets) + '\n',
  );
}
