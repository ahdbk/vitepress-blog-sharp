---
page: true
date: 2021-06-30
title: Home
layout: home
sidebar: true

hero:
  name: VitePress Blog Theme
  text: a sharp blog theme
  tagline: Powred by VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
<script setup>
import BlogsGrid from "./.vitepress/theme/components/BlogsGrid.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts
</script>
<div class="container blogs-container">
<BlogsGrid :posts="posts" />
</div>

<style>

</style>