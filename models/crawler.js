const request = require('request');
const cheerio = require('cheerio');

module.exports = {
  title: (url) => {
    return new Promise((resolve, reject) => {
      request(url, (err, res, body) => {
        if (err){
          reject(err);
        }
        else{
          const $ = cheerio.load(body);
          const webpageTitle = $("title").text();
          resolve(webpageTitle);
        }
      });
    });
  }
};
