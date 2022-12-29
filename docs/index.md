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
const posts = theme.value.posts.slice(0,3)
</script>
<div class="blogs-container">
<BlogsGrid :posts="posts" />
</div>

<style>
.blogs-container {
    display: flex;
    justify-content: flex-start ;
    margin: 0 auto;
    max-width: calc(var(--vp-layout-max-width) - 64px);
    pointer-events: none;
  }


@media (max-width: 800px) {
  .blogs-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>