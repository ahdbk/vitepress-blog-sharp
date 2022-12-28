const { getPosts  } = require('./theme/server')

async function config() {

    return {
      title: "vitepress-blog",
      base: "/",
      description: "vitepress,blog,blog-theme",
      ignoreDeadLinks: true,
      head: [],
      themeConfig: {
        posts: await getPosts(),
        website: "",
        nav: [
          { text: "Home", link: "/" },
          { text: "Archives", link: "/pages/archives" },
          { text: "Tags", link: "/pages/tags" },
          { text: "About", link: "/pages/about" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com" }],
      },
    };
}

module.exports = config()
