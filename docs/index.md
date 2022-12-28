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
<BlogsGrid :posts="posts" />