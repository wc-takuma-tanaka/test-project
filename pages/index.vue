<script setup lang='ts'>
  // composableから定義を取得
  const { state, setPageValue, getPageValues, judgeEmptyValue } = pageValue()
  // pageValueの初期値をセット
  setPageValue('test1', '')
  setPageValue('test2', '')
  // フォームの値をリアクティブな値で定義
  const input = ref([
    { key: 'test1', value: ''},
    { key: 'test2', value: ''},
  ])
  // pageValueの値を見て次へボタンの表示制御
  const judgeNextBtnStatus = computed(() => {
    return judgeEmptyValue() ? false : true
  })
</script>

<template>
  <div>
    <h1>Index Page</h1>
    <label>テスト1</label>
    <!-- フォーカスを外した際にpageValueに値をセット -->
    <input v-model="input[0].value" @blur="setPageValue('test1', input[0].value)"><br>
    <label>テスト2</label>
    <input v-model="input[1].value" @blur="setPageValue('test2', input[1].value)"><br>
    <button v-if="judgeNextBtnStatus">次へ</button>
  </div>
</template>