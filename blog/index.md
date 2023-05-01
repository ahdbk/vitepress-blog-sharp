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
      link: https://vitepress.vuejs.org/guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/ahdbk/vitepress-blog-sharp
---
<script setup>
import BlogsGrid from "./.vitepress/theme/components/BlogsGrid.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts;
const carouselImages = theme.value.carouselImages;

</script>

<div class="container blogs-container">
<BlogCarousel :imagesUrls="carouselImages"/>
<BlogsGrid :posts="posts" />
</div>

<style>

</style>