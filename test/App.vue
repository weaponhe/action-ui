<template>
    <div id="app">
        <button @click="addMessage">add</button>
        <message></message>
    </div>
</template>

<script>
  let count = 0
  export default {
    name: 'app',
    methods: {
      addMessage(){
        this.$Message.add({type: 'success', text: count++})
      }
    }
  }
</script>
