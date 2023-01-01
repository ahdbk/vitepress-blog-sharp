# ✒️ SharpBlog | A vitepress theme🌟
[![vitepress CI](https://github.com/ahdbk/vitepress-blog-sharp/actions/workflows/CI.yml/badge.svg)](https://github.com/ahdbk/vitepress-blog-sharp/actions/workflows/CI.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8b2c9df8-24bd-4eca-add1-1ec0c251a22d/deploy-status)](https://app.netlify.com/sites/vitepress-blog-sharp/deploys)

Hey all 👋 !!

SharpBlog is [VitePress](https://vitepress.vuejs.org/)' theme, built on top of [VitePress](https://github.com/vuejs/vitepress).

this the is build on vitePress alpha stage. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.

[Demo here](https://vitepress-blog-sharp.netlify.app/)

## 📷 Screenshot
   <img title="blog" src="https://github.com/ahdbk/vitepress-blog-sharp/blob/main/screenshots/01.png" width="40%"/>
   <img title="blog" src="https://github.com/ahdbk/vitepress-blog-sharp/blob/main/screenshots/02.png" width="40%"/>

## 📔 Documentation
## Development Setup

You will need [npm](https://nodejs.org/) or [yarn](https://yarnpkg.com/cli/install)

### Install

```sh
$ yarn install
```
### Build

```sh
$ yarn build
```
### Start Blog

```sh
$ yarn dev
```
git s### Project structure
```
blog
├─ .vitepress
│  ├─ theme
│  └─ config.js
├─ pages
│  └─ about.md
├─ posts
│  ├─ first-post.md
│  ├─ second-post.md
│  └─  ...
├─ server
│  └─ server.js
│  └─ index.md
└─ package.json
```

- All posts goes in the **posts** folder.
- Posts will be fetched and parsed automaticlly in the **server.js** file
- The theme follow the basic [VitePress](https://vitepress.vuejs.org/) project structure with a [.vitepress](https://github.com/ahdbk/vitepress-blog-sharp/tree/main/.vitepress) folder that contain the theme and blog [config.js](https://github.com/ahdbk/vitepress-blog-sharp/blob/main/.vitepress/config.js) file

for mere information please check the [official documentation](https://vitepress.vuejs.org/)

### Deploy

Please refert to VitePress official documentation for [deployment and configuration](https://vitepress.vuejs.org/guide/deploying)

## 🙌 Contribution

Please make sure to read the [Contributing Guide](https://github.com/ahdbk/vitepress-blog-sharp/blob/main/contributing.md) before making a pull request.


## License
[MIT](https://github.com/vitepress-blog-sharp/blob/main/LICENSE)
