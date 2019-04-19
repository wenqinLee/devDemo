<template>
  <div id="app">
    <HelloWorld msg="my first Vue project" item="wenqinlee"/>
    <click></click>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import click from './components/click.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    click
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
