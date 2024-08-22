const cheerio = require('cheerio');

const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());

// const $ = await cheerio.fromURL(
//   'https://www.bing.com/search?q=postman',
// );

// /**
//  * This will extract the href attribute of all <a> elements and return a string in the form links=href_value for each element, where href_value is the value of the href attribute. The returned object will have a links property whose value is an array of these strings.
//  */
// const data = $.extract({
//   links: [
//     {
//       selector: 'a',
//       value: (el, key) => {
//         const href = $(el).attr('href');
//         return `${key}=${href}`;
//       },
//     },
//   ],
// });

// pm.environment.set("links", data.links);

const $ = cheerio.load(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Links</title>
  </head>
  <body>
      <div class="b_results">
          <h1>Test Links</h1>
          
          <h2>Valid URLs</h2>
          <ul>
              <li><a href="https://www.postman.com/">Postman Home</a></li>
              <li><a href="https://www.postman.com/downloads/">Download Postman</a></li>
              <li><a href="https://www.postman.com/pricing/">Postman Pricing</a></li>
          </ul>
  
          <h2>JavaScript links</h2>
          <ul>
              <li><a href="javascript:void(0);">Void Link 1</a></li>
              <li><a href="javascript:void(0);">Void Link 2</a></li>
          </ul>
  
          <h2>Internal links</h2>
          <ul>
              <li><a href="/search?q=postman&FORM=HDRSC1">Search Postman</a></li>
              <li><a href="/rewards/dashboard">Rewards Dashboard</a></li>
          </ul>
  
          <h2>Other types of links</h2>
          <ul>
              <li><a href="#">Anchor Link</a></li>
              <li><a href="/?scope=web&FORM=HDRSC1">Scope Link</a></li>
              <li><a href="http://go.microsoft.com/fwlink/?LinkID=617350">Microsoft Link</a></li>
          </ul>
      </div>
  </body>
  </html>`);

const links = $('a').map((index, element) => {
    const href = $(element).attr('href');
    return href ? href : null;
  }).get();

const cheerio = require('cheerio');
const $ = cheerio.load(responseBody);

$('a').each((index, element) => {
    const href = $(element).attr('href');
    console.log(href);
});

// ==============================
const forLoopLinks = [];
const allAElements = $('a');
for (let i = 0; i < allAElements.length; i++) {
    const href = $(allAElements[i]).attr('href');
    if (href) {
        forLoopLinks.push(href);
    }
}
console.log("For Loop Links: " + JSON.stringify(forLoopLinks));

const findLinks = [];

$('body').find('a').each((index, element) => {
    const href = $(element).attr('href');
    if (href) {
        findLinks.push(href);
    }
});

console.log("Find Links: " + JSON.stringify(findLinks));

const forOfLinks = [];
// Using a for...of loop:
// convert the Cheerio wrapper object to an array using toArray() and then use a for...of loop:
const anchors = $('a').toArray();
for (let element of anchors) {
    const href = $(element).attr('href');
    if (href) {
        forOfLinks.push(href);
    }
}
console.log("For Of Links: " + JSON.stringify(forOfLinks));

const forEachLinks = [];

$('a').toArray().forEach(element => {
    const href = $(element).attr('href');
    if (href) {
        forEachLinks.push(href);
    }
});