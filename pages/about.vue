<script setup lang="ts">
  const pageValue: any = inject('pageValue')

  const staticForm = reactive({
    id: 'staticForm',
    children: [
      {
        id: 'name',
        value: ['takuma'],
        placeholder: '名前',
        label: '名前',
        form: {
          required: true
        },
        error: []
      },
      {
        id: 'email',
        value: [],
        placeholder: 'メールアドレス',
        label: 'メールアドレス',
        form: {
          required: true
        },
        error: []
      },
      {
        id: 'remarks',
        value: [],
        placeholder: '備考',
        label: '備考',
        form: {
          required: false
        },
        error: []
      },
    ]
  })

  const changeStatic = (updateForm: any, blockId: string[]) => {
    // staticFormに追加する処理
    const copyObj = JSON.parse(JSON.stringify(staticForm))
    const targetObj = copyObj.children.find((obj: any) => obj.id === blockId[1])
    targetObj.value = updateForm.value
    // pageValueに追加する処理
    if (updateForm.form.required) {
      pageValue.setPageValue(blockId, updateForm.value[0])
    }
  }

  const submitData = (): void => {
    console.log('submitData')
    console.log(pageValue.getPageValues())
  }
</script>

<template>
  <div>
    <div v-for="value in staticForm.children" :key="value.id">
      <TemplatesTextBlock
        :form-obj="value"
        :block-id="[staticForm.id, value.id]"
        @change-static="changeStatic"
      />
    </div>
    <br>
    <button
      v-if="pageValue.judgeNextBtnStatus.value"
      @click='submitData'
    >
      次へ
    </button>
    <button v-else>未入力あり</button>
  </div>
</template>