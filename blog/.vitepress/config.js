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
        defaultPostCover: 'https://picsum.photos/1024/869?random=2',
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/pages/about" },
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ahdbk/vitepress-blog-sharp' }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023 - Ahd Ben Kheder'
        },
        srcExclude: ['CONTRIBUTING.md','README.md','CODE_OF_CONDUCT.md','CHANGELOG.md']

      },
    };
}

module.exports = config()
