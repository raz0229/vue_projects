<template>
<div>
      <p>Reaction Time: {{ myScore }} ms</p>
      <p class="result">{{ rank }}</p>
</div>
</template>

<script>
export default {
    props: ['myScore'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.myScore < 250) {
            this.rank = "WOAH! You Great!";
        }
        else if (this.myScore < 400) {
            this.rank = "Sharp Reflexes!"
        }
        else if (this.myScore < 700) {
            this.rank = "Could be better!"
        }
        else {
            this.rank = "SNAIL PACE!!!"
        }
    }
}
</script>

<style>
.result {
    text-align: center;
    color: orange;
    font-size: 1.4em;
    font-weight: bold;
}
</style>