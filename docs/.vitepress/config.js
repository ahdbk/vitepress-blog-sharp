const { getPosts  } = require('../server/server')

async function config() {

    return {
      base: "/",
      ignoreDeadLinks: true,
      head: [
        [
          'link',
          { 
            rel: 'stylesheet',
            type: 'text/css',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css',
          crossorigin: '' }
        ]
      ],
      themeConfig: {
        posts: await getPosts(),
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/pages/about" },
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023 - Ahd Ben Kheder'
        }
      },
    };
}

module.exports = config()
