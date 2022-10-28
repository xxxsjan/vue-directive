<template>
  <div class="container">
    <input type="text" v-model="message" />
    <button
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      Copy
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message = ref('Copy These Text');

const onCopy = function (e: any) {
  alert('You just copied: ' + e.text);
};
const onError = function (e: any) {
  alert('Failed to copy texts');
};
</script>
