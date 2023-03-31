<script setup lang='ts'>
  interface FormObj {
    id: string
    value: string[]
    placeholder: string
    label: string
    form: {
      required: boolean
    }
    error: string[]
  }

  const props = defineProps({
    formObj: {
      type: Object as () => FormObj,
      required: true
    },
    blockId: []
  })

  const emits = defineEmits(['change-static']);

  const changeStatic = (): void => {
    emits('change-static', props.formObj, props.blockId)
  }

</script>

<template>
  <div>
    <input
      :type="'text'"
      :placeholder="props.formObj.placeholder"
      v-model="props.formObj.value[0]"
      @input="changeStatic"
    >
  </div>
</template>