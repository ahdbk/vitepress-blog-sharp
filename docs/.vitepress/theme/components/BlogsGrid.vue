<template>
    <div v-for="(article, index) in posts" :key="index" class="list">
        <BlogCard 
        :title="article.frontMatter.title"
        :author="article.frontMatter.author"
        :category="article.frontMatter.category"
        :thumbnail="article.frontMatter.thumbnail"
        :description="article.frontMatter.description"
        :date="article.frontMatter.date"
        :path="article.path">
    </BlogCard>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    posts: Array,
})
</script>

