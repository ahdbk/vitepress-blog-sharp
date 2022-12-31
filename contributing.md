# VitePress Contributing Guide

Hi! We're really excited that you are interested in contributing to our VitePress theme. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/vitepress-blog-sharp/blob/main/CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

## Development Setup

You will need [npm](https://nodejs.org/) or [yarn](https://yarnpkg.com/cli/install)

After cloning the repo, run:

## install the dependencies of the project

```sh
$ npm install 
```
or
```sh
$ yarn install
```

### Setup VitePress Dev Environment

The easiest way to start testing out VitePress is to tweak the VitePress docs. You may run `pnpm run docs` to boot up VitePress documentation site locally, with live reloading of the source code.

```sh
$ npm run dev
```
or 
```sh
$ yarn dev
```
After executing the above command, visit http://localhost:5173 and try modifying the source code. You'll get live update.


