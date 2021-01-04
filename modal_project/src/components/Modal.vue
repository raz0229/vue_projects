<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{dark: theme === 'dark' , xmas: theme === 'xmas'}">
            <slot>DEFAULT CONTENT: Only shows up when no content is set</slot>
            <slot name="myCustomSlot"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['someProp', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('myCustomEvent');
        }
    }
}
</script>

<style>
.modal h1 {
    color: black;
    border: none;
    padding: 0;
}
.modal {
    width: 400px;
    padding: 20px;
    background: #ddd; 
    margin: 100px auto;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed; 
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.modal.dark h1 {
    color: white;
}
.modal.dark {
    color: white;
    background: black;
}
.modal.xmas h1 {
    color: white;
}
.modal.xmas {
    color: white;
    background: crimson;
}
</style>