/* const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.statistics.gov.rw/')
  .then(({ data }) => {
    const $ = cheerio.load(data);
    const h1Text = $('div.col-md-4 > div.figure-value > h1').text();
    const dataObj = { h1Text };
    console.log(JSON.stringify(dataObj)); // output: {"h1Text": "10,593"}
  })
  .catch(error => console.log(`Error fetching data: ${error}`));

 */