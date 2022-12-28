<template>
    <div v-for="(article, index) in posts" :key="index" class="list">
        <BlogCard 
        :title="article.frontMatter.title"
        :author="article.frontMatter.author"
        :category="article.frontMatter.category"
        :description="article.frontMatter.description"
        :date="article.frontMatter.date">
    </BlogCard>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    posts: Array,
})
</script>

