<template>
  <h1>App</h1>
  <ClipBoard />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClipBoard from './components/ClipBoard.vue';
export default defineComponent({
  name: 'App',
  components: { ClipBoard }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
