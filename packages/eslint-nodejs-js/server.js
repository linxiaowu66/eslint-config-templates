global.ROOT_DIR = __dirname;
require('@babel/register')


try {
  require('./server/index')
} catch (err) {
  console.log('start error:', err.stack || err);
  // process.exit(0);
}
