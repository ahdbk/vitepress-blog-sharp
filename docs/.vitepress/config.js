const { getPosts  } = require('../../server/server')

async function config() {

    return {
      base: "/",
      ignoreDeadLinks: true,
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
