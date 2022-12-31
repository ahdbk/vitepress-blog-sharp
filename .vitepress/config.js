const { getPosts  } = require('../server/server')

async function config() {

    return {
      title: 'My Blog',
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
        siteTitle: 'Sharp Blog',
        posts: await getPosts(),
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/pages/about" },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023 - Ahd Ben Kheder'
        }
      },
    };
}

module.exports = config()
