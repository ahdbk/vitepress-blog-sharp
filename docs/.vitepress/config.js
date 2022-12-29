const { getPosts  } = require('./theme/server/server')

async function config() {

    return {
      base: "/",
      ignoreDeadLinks: true,
      themeConfig: {
        posts: await getPosts(),
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "About", link: "/pages/about" },
        ],
      },
    };
}

module.exports = config()
