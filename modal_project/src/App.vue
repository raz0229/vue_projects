<template>
  <h1>{{ title }}</h1>
  <div v-if="showingModal">
  <Moda theme="dark" @myCustomEvent="showModal">
      <template v-slot:myCustomSlot><a href="/">Why is this here?</a></template>
    <h1>{{ someProp[0] }}</h1>
    <p>{{ text }} (Theme: {{ theme }})</p>
  </Moda>
  </div>
   
  <teleport to="#app2">
    <div v-if="showingModal2">
  <Moda theme="xmas" @myCustomEvent="showModal2">
      <h1>Sign Up For Newsletter</h1>
      <p>Template Created with Vue 3</p>
  </Moda>
  </div>
  </teleport>

  <br>
  <button @click.ctrl="showModal">Show Modal (Ctrl)</button>
  <button @click.shift="showModal2">Show Modal (Shift)</button>
</template>

<script>
import Moda from './components/Modal.vue'

export default {
  name: 'App', //not mandatory
  components: { Moda },
  data() {
    return {
      title: 'My First Vue App :)',
      someProp:["Please Disable Adblocker", 404],
      text:"This is some random text",
      showingModal: false,
      showingModal2: false,
    }
  },
  methods: {
    showModal() {
      this.showingModal = !this.showingModal
    },
     showModal2() {
      this.showingModal2 = !this.showingModal2
    }
  }
}

</script>

<style>
#app, #app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 4px solid #00cc66;
  display: inline-block; 
  padding-bottom: 10px;
}
</style>
