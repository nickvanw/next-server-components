import getConfig from 'next/config'
const cfg = getConfig().serverRuntimeConfig

module.exports = cfg.db.pool(cfg.dbPass);
