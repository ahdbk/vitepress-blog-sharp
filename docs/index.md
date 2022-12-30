---
page: true
date: 2021-06-30
title: home
layout: home
sidebar: false
---
<script setup>
import BlogsGrid from "./.vitepress/theme/components/BlogsGrid.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts
</script>
<div class="blogs-container container">
<BlogsGrid :posts="posts" />
</div>

<style>
  * {
    font-family :'Inter var', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
.blogs-container {
  margin: 3rem 22rem;
  max-width: calc(var(--vp-layout-max-width) - 64px)

}

@media (max-width: 800px) {
  .blogs-container {
    flex-direction: column;
    margin: 3rem ;

  }
}
</style>