const Crawler = require('../models/crawler');
const url = require('url');

module.exports = {
  fetchTitle: (params) => {
    const url_parts = url.parse(params.url, true);
    const query = url_parts.query;

    if (Object.getPrototypeOf(query.address) == String.prototype)
      return Crawler.title(query.address)
        .then(data => [data])
        .catch(err => [err]);
    else{
      return Promise.all(query.address.map( url => Crawler.title(url)))
        .then(data => {
          return data;
        })
        .catch(err => {
          return err;
        });
    }
    return;
  }
};