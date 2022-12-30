<template>
    <div class="row">
    <div v-for="(article, index) in posts" :key="index" 
    class="col-md-4">
        <BlogCard 
        :title="article.metaData.title"
        :author="article.metaData.author"
        :category="article.metaData.category"
        :cover="article.metaData.cover"
        :description="article.metaData.description"
        :date="article.metaData.date"
        :path="article.path">
    </BlogCard>
    </div>
</div>
</template>

<script lang="ts" setup>
import {Post} from '../models/post'
const props = defineProps({
    posts: Array<Post>,    
})
</script>

