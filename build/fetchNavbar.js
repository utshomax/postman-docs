const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const requestOptions = {
  method: 'GET',
  headers: {
    bff: 'e2e'
  },
  redirect: 'follow'
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const host = process.env.BFF_NAVBAR_URL || ''

function fetchNavbar() {
  if (host) {
    return fetch(host, requestOptions)
    .then(
      (res) => {
        res.text()
          .then((resp) => {
            if (resp) {
              const respData = JSON.parse(resp).data || { error: true };
              if (!respData.error && respData.items) {
                fs.writeFile(path.join(
                  'bff-data',
                  'navbar.json',
                ), JSON.stringify(respData), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render navbar data');
                  /* eslint-enable */
                });
              } else {
                console.log('The navbar endpoint returned unusable data..')
                fs.writeFile(path.join(
                  'bff-data',
                  'navbar.json',
                ), JSON.stringify({
                  "type": "header",
                  "media": "https://voyager.postman.com/logo/postman-logo-white-horiz.svg",
                  "items": [
                    {
                      "title": "POSTMAN",
                      "items": [
                        {
                          "title": "Postman.com",
                          "url": "https://www.postman.com/api-platform/"
                        },
                        {
                          "title": "API Client",
                          "url": "https://www.postman.com/product/api-client/"
                        },
                        {
                          "title": "Design & Mock",
                          "url": "https://www.postman.com/features/mock-api/"
                        },
                        {
                          "title": "API Documentation",
                          "url": "https://www.postman.com/api-documentation-tool/"
                        },
                        {
                          "title": "API Monitoring",
                          "url": "https://www.postman.com/api-monitoring/"
                        },
                        {
                          "title": "API Network",
                          "url": "https://www.postman.com/explore"
                        },
                        {
                          "title": "Automated Testing",
                          "url": "https://www.postman.com/automated-testing/"
                        },
                        {
                          "title": "Version Control",
                          "url": "https://www.postman.com/product/api-versioning/"
                        },
                        {
                          "title": "Workspaces",
                          "url": "https://www.postman.com/product/workspaces/"
                        },
                        {
                          "title": "Interceptor",
                          "url": "https://www.postman.com/product/postman-interceptor/"
                        }
                      ]
                    },
                    {
                      "title": "How Collaboration Works",
                      "url": "https://www.postman.com/how-api-collaboration-works/"
                    },
                    {
                      "title": "Pricing",
                      "url": "https://www.postman.com/pricing/"
                    },
                    {
                      "title": "Enterprise",
                      "url": "https://www.postman.com/postman-enterprise/"
                    },
                    {
                      "title": "Explore",
                      "url": "https://www.postman.com/explore?utm_source=postman-website&utm_medium=referral"
                    },
                    {
                      "title": "Learning Center",
                      "url": "https://learning.postman.com/"
                    },
                    {
                      "title": "Sign In ",
                      "url": "https://identity.getpostman.com/login"
                    }
                  ],
                  "tail": 2
                }), (err) => {
                  if (err) {
                    /* eslint-disable no-console */
                    console.error(err);
                    /* eslint-enable */
                    process.exit(1);
                    throw err;
                  }
                  /* eslint-disable no-console */
                  console.info('Success pre-render empty navbar data');
                  /* eslint-enable */
                });
              }
            } 
          })
        }
    )
    .catch(err => {
      console.error("Error when making BFF call... writing empty navbar.json", err)
      fs.writeFile(path.join(
        'bff-data',
        'navbar.json',
      ), JSON.stringify({}), (err) => {
        if (err) {
          /* eslint-disable no-console */
          console.error(err);
          /* eslint-enable */
          process.exit(1);
          throw err;
        }
        /* eslint-disable no-console */
        console.info('Success pre-render empty navbar data');
        /* eslint-enable */
      });
    })
  } else {
    console.log('No navbar data endpoint provided.')
    fs.writeFile(path.join(
      'bff-data',
      'navbar.json',
    ), JSON.stringify({}), (err) => {
      if (err) {
        /* eslint-disable no-console */
        console.error(err);
        /* eslint-enable */
        process.exit(1);
        throw err;
      }
      /* eslint-disable no-console */
      console.info('Success pre-render empty navbar data');
      /* eslint-enable */
    });
  }         
}

module.exports = fetchNavbar;
