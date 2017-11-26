<template>
  <div id="app">
    <message>Hello there!</message>
    <message>Hello again!</message>
  </div>
</template>

<script>
import Message from './components/message.vue'
export default {
  name: 'app',
  components: { Message },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
