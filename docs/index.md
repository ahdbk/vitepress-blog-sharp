---
page: true
date: 2021-06-30
title: home
sidebar: false
---
<script setup>
import HomePage from "./.vitepress/theme/components/HomePage.vue";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(0,3)
</script>
<HomePage :posts="posts" />