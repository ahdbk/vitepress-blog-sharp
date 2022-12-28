<template>
 <BlogsGrid :posts="posts"></BlogsGrid>
</template>

<script lang="ts" setup>
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts;
</script>


<style>
</style>
