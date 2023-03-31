<script setup lang='ts'>
  const pageValue: any = inject('pageValue')

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
    blockId: {
      type: Array,
      required: false
    }
  })

  const emits = defineEmits(['change-static']);

  const getPanelStatus = computed((): string => {
    const value = pageValue.getPageValue(props.blockId)
    if (props.formObj.form.required) {
      return value ? 'ok' : 'require'
    } else {
      return value ? 'ok' : 'optional'
    }
  })

  const changeStatic = (updateForm: any, blockId: string[]): void => {
    emits('change-static', updateForm, blockId)
  }
  if (props.formObj.form.required) {
    pageValue.setPageValue(props.blockId, props.formObj.value[0])
  }
</script>

<template>
  <div>
    <PartsFormPanel
      :panel-status="getPanelStatus"
    />
    <PartsTextForm
      :form-obj="props.formObj"
      :block-id="[...props.blockId]"
      @change-static="changeStatic"
    />
    <PartsFormError
      :error-text="props.formObj.error[0]"
    />
  </div>
</template>