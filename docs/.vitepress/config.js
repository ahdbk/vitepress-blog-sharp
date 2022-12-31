const { getPosts  } = require('../../server/server')

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
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      ],
      themeConfig: {
        posts: await getPosts(),
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "Archives", link: "/pages/archives" },
          { text: "Tags", link: "/pages/tags" },
          { text: "About", link: "/pages/about" },
        ],
      },
    };
}

module.exports = config()
