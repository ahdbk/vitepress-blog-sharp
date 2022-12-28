<template>
    <Layout/>
    <HomePage :posts="posts"/>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(0,3)
const { Layout } = DefaultTheme
</script>