'use strict';

const server = require('./src/server');
const { PORT } = require('./src/utils/constants');

server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
