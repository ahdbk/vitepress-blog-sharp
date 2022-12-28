<template>
    <div v-for="(article, index) in posts" :key="index" class="list">
        <div class="list-header">
            <div class="list-li">
                <a> {{ article.frontMatter.title }}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    posts: Array,
})
</script>