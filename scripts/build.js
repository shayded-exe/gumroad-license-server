const fs = require('fs');
const path = require('path');

const env = process.env;

fs.promises.writeFile(
  path.resolve(__dirname, '../env.json'),
  JSON.stringify({
    GUMROAD_API: env.GUMROAD_API,
    GUMROAD_PRODUCT_ID: env.GUMROAD_PRODUCT_ID,
    LICENSE_PRIVATE_KEY: env.LICENSE_PRIVATE_KEY,
  }),
);