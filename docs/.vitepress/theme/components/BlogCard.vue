<template>
    <div class="container">
  <div class="card" @click="goTo(path)">
    <div class="card-header">
      <img :src="thumbnail" alt="" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">{{ category }}</span>
      <h2 class="title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="user">
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=100" alt="" />
        <div class="user-info">
          <h5>{{ author }}</h5>
          <small>{{ date }}</small>
        </div>
      </div>
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
    thumbnail: String,
    description: String,
    path: String
})


const goTo = (path: string) => {
  router.go(withBase(path))
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
}

.card {
  margin: 10px;
  background-color: --vp-c-bg;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  transform: scale(1);
  transition: transform 0.2s cubic-bezier(.65,.05,.36,1), box-shadow 0.2s cubic-bezier(.65,.05,.36,1), filter 0.4s cubic-bezier(.65,.05,.36,1);
}

.title {
  margin-top: 1rem;
  font-weight: bold;
  font-size: large;
}
.card:hover {
  cursor: pointer;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
}
.card-header img {
  width: 100%;
  height: 200px;
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

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 1rem;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transform: scalex(-1);
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>