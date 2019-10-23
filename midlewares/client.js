const redis = require('redis');
const Promise = require('bluebird');
Promise.promisifyAll(redis);
const client = redis.createClient(6379);
//const client = redis.createClient(6379, 'greenredis.3j3itc.0001.use2.cache.amazonaws.com');
//const client = redis.createClient({ host:'redis', port: '6379' });
module.exports = client;
