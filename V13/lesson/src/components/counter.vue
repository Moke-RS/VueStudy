
// Hot module replacement
// any change in this file will be reflected in the page (when --hot is running)
// but its data will not change (if the data itself was not changed)

<template>
  <div>
      <h3>Post #{{ postNumber }}</h3>
      <textarea name="" id="" cols="30" rows="10" v-model="postMessage"></textarea>
      <p>
          <button @click="getNextPost">Get next post</button>
      </p>
  </div>
</template>

<script>
import Axios from 'axios'

var root = 'https://jsonplaceholder.typicode.com';

export default {
  data() {
      return {
          postNumber: 0,
          postMessage: ''
      }
  },
  methods: {
      getNextPost() {
          this.postNumber += 1

          Axios
            .get(root + "/posts/" + this.postNumber)
            .then((res) => {
                let { body } = res.data
                this.postMessage = body
            })
            .catch((error) => {
                console.log(error);
            })
      }
  },
  mounted() {
      this.getNextPost()
  }
}
</script>

