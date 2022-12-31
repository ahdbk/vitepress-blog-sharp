# SharpBlog

SharpBlog is [VitePress](https://vitepress.vuejs.org/)' theme, built on top of [VitePress](https://github.com/vuejs/vitepress).

this the is build on vitePress alpha stage. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.

[Demo here]()

## Screenshot
   <img title="blog" src="screenshots/01.png" width="40%"/>
   <img title="blog" src="screenshots/02.png" width="40%"/>

## Documentation

# Install
```sh
$ npm install 
```
or
```sh
$ yarn install
```
# Build
```sh
$ npm run build 
```
or
```sh
$ yarn build
```
# Start Blog
```sh
$ npm run dev 
```
or
```sh
$ yarn dev
```
# Project structure
```
.
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

# Deploy

Please refert to VitePress official documentation for [deployment and configuration](https://vitepress.vuejs.org/guide/deploying)

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/ahdbk/vitepress-blog-sharp/blob/main/contributing.md) before making a pull request.


## License
[MIT](https://github.com/vitepress-blog-sharp/blob/main/LICENSE)
