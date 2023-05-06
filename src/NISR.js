const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.statistics.gov.rw/')
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const h1Text = $('div.col-md-4 > div.figure-value > h1').text();
    console.log(h1Text); // output: 10,593
  })
  .catch(error => {
    console.log(error);
  });
