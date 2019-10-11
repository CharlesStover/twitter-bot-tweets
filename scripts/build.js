const { execSync } = require('child_process');
const { copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } = require('fs');

execSync('rm -rf ./build');
mkdirSync('./build');

const accounts = readdirSync('./src');
for (const account of accounts) {
  mkdirSync(`./build/${account}`);
  const tweets = require(`../src/${account}/index.js`);
  writeFileSync(
    `./build/${account}/index.json`,
    JSON.stringify(tweets) + '\n',
  );
  for (const metadata of Object.values(tweets)) {
    if (metadata.media) {
      for (const filepath of Object.values(metadata.media)) {
        const sourceDirs = filepath.split('/');
        sourceDirs.pop();
        const destinationDir = `./build/${account}/${sourceDirs.join('/')}`;
        if (!existsSync(destinationDir)) {
          mkdirSync(destinationDir, { recursive: true });
        }
        copyFileSync(
          `./src/${account}/${filepath}`,
          `./build/${account}/${filepath}`,
        );
      }
    }
  }
}
