<template>
  <div class="mx-auto md:w-2/3 w-full">
    <div>
      <h1 class="pt-10 pb-2 text-center capitalize text-4xl">Add Blogs</h1>
      <hr class="w-1/5 mx-auto "/>
    </div>
    <div class="my-5">
      <label class="block">
        <span class="">Title</span>
        <input v-model="title" placeholder="Enter Blog Title" type="text" class="block shadow rounded-md border border-gray-200 outline-none px-3 py-2 mt-2 w-full" />
      </label>
    </div>
    <div class="my-5">
      <label class="block">
        <span class="">Title Body</span>
        <textarea v-model="body" placeholder="Enter Blog Title" type="text" class="block shadow rounded-md border border-gray-200 outline-none h-52 px-3 py-2 mt-2 w-full" />
      </label>
    </div>
    <div class="flex">
      <div class="mb-3 w-96">
        <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload Banner Image for Blog</label>
        <input type="file" @change="onFileBannerSelected" accept=".png, .jpg, ,jpeg"
               class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
        <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload Thumbnail Image for Blog</label>
        <input type="file" @change="onFileThumbnailSelected" accept=".png, .jpg, ,jpeg"
               class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
      </div>
    </div>
    <div class="inline">
      <button @click="uploadBlog" class="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer">Publish Blog</button>
    </div>
  </div>
</template>


<script>
import {mapActions} from "vuex";

export default {
  name: "CreateBlog",
  data() {
    return {
      error: null,
      errorMessage: null,
      title: "",
      body: "",
      banner: "",
      thumbnail: "",
      preview: null,
      image: null,
    }
  },
  components: {},
  methods: {
    ...mapActions(['addBlogPost']),
    uploadBlog(event) {
      event.preventDefault();
      const formdata = new FormData();
      formdata.append('post[thumbnail]', this.thumbnail, this.thumbnail.name)
      formdata.append('post[banner]', this.banner, this.banner.name)
      formdata.append('post[title]', this.title)
      formdata.append('post[body]', this.body)
      this.addBlogPost(formdata)
      this.thumbnail = null
      this.banner = null
      this.title = null
      this.body = null
    },
    onFileBannerSelected(event) {
      this.banner = event.target.files[0]
    },
    onFileThumbnailSelected(event) {
      this.thumbnail = event.target.files[0]
    }
  }
}
</script>
<style>

</style>



<!--<style lang="scss">-->
<!--.create-post {-->
<!--  position: relative;-->
<!--  height: 100%;-->

<!--  button {-->
<!--    margin-top: 0;-->
<!--  }-->

<!--  .router-button {-->
<!--    text-decoration: none;-->
<!--    color: #fff;-->
<!--  }-->

<!--  label,-->
<!--  button,-->
<!--  .router-button {-->
<!--    transition: 0.5s ease-in-out all;-->
<!--    align-self: center;-->
<!--    font-size: 14px;-->
<!--    cursor: pointer;-->
<!--    border-radius: 20px;-->
<!--    padding: 12px 24px;-->
<!--    color: #fff;-->
<!--    background-color: #303030;-->
<!--    text-decoration: none;-->

<!--    &:hover {-->
<!--      background-color: rgba(48, 48, 48, 0.7);-->
<!--    }-->
<!--  }-->

<!--  .container {-->
<!--    position: relative;-->
<!--    height: 100%;-->
<!--    padding: 10px 25px 60px;-->
<!--  }-->

<!--  // error styling-->
<!--  .invisible {-->
<!--    opacity: 0 !important;-->
<!--  }-->

<!--  .err-message {-->
<!--    width: 100%;-->
<!--    padding: 12px;-->
<!--    border-radius: 8px;-->
<!--    color: #fff;-->
<!--    margin-bottom: 10px;-->
<!--    background-color: #303030;-->
<!--    opacity: 1;-->
<!--    transition: 0.5s ease all;-->

<!--    p {-->
<!--      font-size: 14px;-->
<!--    }-->

<!--    span {-->
<!--      font-weight: 600;-->
<!--    }-->
<!--  }-->

<!--  .blog-info {-->
<!--    display: flex;-->
<!--    margin-bottom: 32px;-->

<!--    input:nth-child(1) {-->
<!--      min-width: 300px;-->
<!--    }-->

<!--    input {-->
<!--      transition: 0.5s ease-in-out all;-->
<!--      padding: 10px 4px;-->
<!--      border: none;-->
<!--      border-bottom: 1px solid #303030;-->

<!--      &:focus {-->
<!--        outline: none;-->
<!--        box-shadow: 0 1px 0 0 #303030;-->
<!--      }-->
<!--    }-->

<!--    .upload-file {-->
<!--      flex: 1;-->
<!--      margin-left: 16px;-->
<!--      position: relative;-->
<!--      display: flex;-->

<!--      input {-->
<!--        display: none;-->
<!--      }-->

<!--      .preview {-->
<!--        margin-left: 16px;-->
<!--        text-transform: initial;-->
<!--      }-->

<!--      span {-->
<!--        font-size: 12px;-->
<!--        margin-left: 16px;-->
<!--        align-self: center;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  .editor {-->
<!--    height: 60vh;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->

<!--    .quillWrapper {-->
<!--      position: relative;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      height: 100%;-->
<!--    }-->

<!--    .ql-container {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      height: 100%;-->
<!--      overflow: scroll;-->
<!--    }-->

<!--    .ql-editor {-->
<!--      padding: 20px 16px 30px;-->
<!--    }-->
<!--  }-->

<!--  .blog-actions {-->
<!--    margin-top: 32px;-->

<!--    button {-->
<!--      margin-right: 16px;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->


<!--Quil-->
<!--<div class="editor">-->
<!--        <quill-editor-->
<!--            v-model:content="dataProperty"-->
<!--            ref="myQuillEditor"-->
<!--            :options="editorSettings"-->
<!--            toolbar="full"-->
<!--            useCustomImageHandler-->
<!--            @blur="onEditorBlur($event)"-->
<!--            @focus="onEditorFocus($event)"-->
<!--            @change="onEditorChange($event)"-->
<!--            @ready="onEditorReady($event)"-->
<!--        />-->
<!--        <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />-->
<!--</div>-->


<!--// import { QuillEditor } from '@vueup/vue-quill'-->
<!--// import '@vueup/vue-quill/dist/vue-quill.snow.css';-->
<!--// import Quill from "quill";-->
<!--// window.Quill =  Quill;-->
<!--// const ImageResize = require("quill-image-resize-module").default;-->
<!--// Quill.register("modules/imageResize",ImageResize);-->


<!--script.data.return-->

<!--dataProperty: '',-->
<!--editorSettings:{-->
<!--debug: 'info',-->
<!--placeholder: 'Type your post...',-->
<!--readOnly: false,-->
<!--theme: 'snow',-->
<!--height: 100,-->
<!--modules: {-->
<!--imageResize: {-->
<!--},-->
<!--'toolbar': [-->
<!--[{ 'size': [] }],-->
<!--[{ 'header': [1, 2, 3, 4, 5, 6, false] }],-->
<!--['bold', 'italic', 'underline', 'strike'],-->
<!--[{ 'color': [] }, { 'background': [] }],-->
<!--[{ 'script': 'super' }, { 'script': 'sub' }],-->
<!--[{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],-->
<!--[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],-->
<!--[{ 'direction': 'rtl' }, { 'align': [] }],-->
<!--['link', 'image', 'video', 'formula'],-->
<!--['clean']-->
<!--],-->
<!--}-->
<!--},-->
<!--delta: undefined-->