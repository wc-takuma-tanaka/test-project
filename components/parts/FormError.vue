<script setup lang="ts">
  const props = defineProps({
    errorText: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <div v-if="errorText">
    {{ props.errorText }}
  </div>
</template>
