<script setup lang="ts">
  interface Props {
    panelStatus: string;
  }

  const Props = withDefaults(defineProps<Props>(), {
    panelStatus: '',
  })

  const judge = reactive({
    require: '必須',
    ok: 'OK',
    optional: '任意'
  })
</script>


<template>
  <div>
    {{ judge[panelStatus] }}
  </div>
</template>