<template>
  <div class=" py-2 px-4">
    <div class="max-w-lg bg-white rounded-xl overflow-hidden shadow-lg">
      <div>
        <img  alt="Banner" :src="post.banner_cloud_image" class="g-image h-40 w-full object-cover rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"/>
         <div class="p-2">
          <h2 class="font-bold text-lg">{{ post.title }}</h2>
          <h6>Posted on: {{ new Date(post.created_at).toLocaleString("en-us", {dateStyle: "long"}) }}</h6>
          <p class="text-sm text-gray-600 line-clamp-2">{{ post.body }}</p>
        </div>
        <div class="grid grid-flow-col gap-5 pb-2 px-6">
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2"> #code </span>
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-base mb-2"> #code </span>
        </div>
        <router-link :to="{ name: 'ViewBlog', params: { blogid: this.post.id } }">
          <div class="text-white bg-blue-700 p-2 px-2 ml-2 mr-2 mb-2 rounded-md hover:bg-blue-900">
            View The Post
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "BlogCard",
  props: ["post"],
}
</script>

<style>
/*.blog-card {*/
/*  position: relative;*/
/*  cursor: pointer;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  border-radius: 8px;*/
/*  background-color: #fff;*/
/*  min-height: 420px;*/
/*  transition: 0.5s ease all;}*/

/*.blog-card :hover {*/
/*   transform: rotateZ(-1deg) scale(1.01);*/
/*   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);*/
/* }*/
/*.icons {*/
/*  display: flex;*/
/*  position: absolute;*/
/*  top: 10px;*/
/*  right: 10px;*/
/*  z-index: 99;}*/

/*.icon {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  width: 35px;*/
/*  height: 35px;*/
/*  border-radius: 50%;*/
/*  background-color: #fff;*/
/*  transition: 0.5s ease all;}*/

/*.icon:hover {*/
/*   background-color: #303030;*/
/*.edit,*/
/*.delete {*/
/*path {*/
/*  fill: #fff;*/
/*}*/
/*}*/
/*}*/
/*&:nth-child(1) {*/
/*   margin-right: 8px;*/
/* }*/
/*.edit,*/
/*.delete {*/
/*  pointer-events: none;*/
/*  height: 15px;*/
/*  width: auto;*/
/*}*/
/*}*/
/*}*/
/*img {*/
/*  display: block;*/
/*  border-radius: 8px 8px 0 0;*/
/*  z-index: 1;*/
/*  width: 100%;*/
/*  min-height: 200px;*/
/*  object-fit: cover;*/
/*}*/
/*.info {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  height: 100%;*/
/*  z-index: 3;*/
/*  padding: 32px 16px;*/
/*  color: #000;*/
/*h4 {*/
/*  padding-bottom: 8px;*/
/*  font-size: 20px;*/
/*  font-weight: 300;*/
/*}*/
/*h6 {*/
/*  font-weight: 400;*/
/*  font-size: 12px;*/
/*  padding-bottom: 16px;*/
/*}*/
/*.link {*/
/*  display: inline-flex;*/
/*  align-items: center;*/
/*  margin-top: auto;*/
/*  font-weight: 500;*/
/*  padding-top: 20px;*/
/*  font-size: 12px;*/
/*  padding-bottom: 4px;*/
/*  transition: 0.5s ease-in all;*/
/*&:hover {*/
/*   color: rgba(48, 48, 48, 0.8);*/
/* }*/
/*.arrow {*/
/*  width: 10px;*/
/*}*/
/*}*/
/*}*/
/*}*/
</style>