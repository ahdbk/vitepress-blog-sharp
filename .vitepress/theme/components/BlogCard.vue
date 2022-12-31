<template>
  <div class="card" @click="goTo(path)">
    <div class="card-header">
      <img :src="cover" alt="" />
    </div>
    <div class="card-tags">
      <span class="tag" :style="{ background: categoryColor}">{{ category }}</span>
      <span class="tag readintTime">{{ readingTime }}</span>

    </div>
    <div class="card-body">
      <h3 class="title">{{ title }}</h3>
      <div class="card-details">
        <ul>
          <li>
            by
          </li>
          <li class="author">
            {{ author }}
          </li>
          <li>
            --
          </li>
          <li class="date">
            <time>
              {{ date }}
            </time>
          </li>
        </ul>
      </div>
      <div class="description">{{ description }}</div>
      <div class="continue" @click="goTo(path)">
        Continue Reading -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, withBase } from 'vitepress'

var router = useRouter()

const props = defineProps({
  title: String,
  date: String,
  author: String,
  category: String,
  categoryColor: String,
  cover: String,
  description: String,
  readingTime: String,
  path: String
})


const goTo = (path: string) => {
  router.go(withBase(path))
};

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  box-sizing: border-box;
}

.card {
  margin: 10px;
  background-color: var(--vp-c-bg);
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  min-width: 350x;
}

.title {
  margin-top: 1rem;
  font-size: 1.625rem;
  margin: 15px 0;
  font-family: var(--title-font);
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  line-height: 1.3;
  font-weight: 900;
  letter-spacing: -0.5px;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.card-details {
  font-size: small;
  margin-bottom: 10px;
}

.card-details ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.card-details li {
  display: inline-block;
  padding-top: 3px;
  margin-right: 5px;
}

.author,
.date {
  font-weight: bold;
}

.description {
  font-size: medium;
  margin: 0 0 1rem;
  width: 100%;
  margin-top: 5px;
  color: gray;
}

.continue {
  border-top: 1px solid lightgray;
  width: 100%;
  margin-top: 5px;
  padding-top: 25px;
  font-weight: bold;
  font-size: small;
}

.card-tags {
  margin: -16px 25px;
}

.tag {
  background-color: lightsteelblue;
  border-radius: 50px;
  font-size: 12px;
  margin: 5px;
  color: #fff;
  padding: 8px 15px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>