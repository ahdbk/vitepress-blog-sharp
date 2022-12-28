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
  flex-direction: row;
  align-items: center;
  padding: 3rem 7rem;
}

@media (max-width: 800px) {
  .blogs-container {
    flex-direction: column;
  }
}
</style>