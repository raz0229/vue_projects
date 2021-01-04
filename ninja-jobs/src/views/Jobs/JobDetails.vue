<template>
<div v-if="job">
    <h1>{{ job.title }}</h1>
  <br>
  <p>Job ID is: {{ id }}</p>
  <br>
  <p>{{ job.details }}</p>
</div>
<div v-else>
  Loading Job Details...
</div>
</template>

<script>
export default {
    props: ['id'],

 data() {
     return {
         job: null
     }
 },

  mounted() {
        fetch('http://localhost:3000/jobs/' + this.id).then(res => res.json()).then(data => this.job = data)
        .catch(err => console.log(err));
  }
}
</script>

<style>

</style>