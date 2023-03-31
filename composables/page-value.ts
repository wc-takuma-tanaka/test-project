export const pageValue: any = () => {
  const state = reactive({
    pageValues: new Map()
  })

  const setPageValue = (blockId: any, value: string): void => {
    state.pageValues.set(getUniqueIdFromBlockId(blockId), value)
  }

  const getPageValue = (blockId: any): string => {
    const uniqueId = getUniqueIdFromBlockId(blockId)

    return state.pageValues.get(uniqueId)
  }

  const getPageValues = (): any => {
    return state.pageValues
  }

  const judgeEmptyValue = (): boolean => {
    let judgeFlag = false
    state.pageValues.forEach((value) => {
      if (!value) {
        judgeFlag = true
      }
    })
    return judgeFlag
  }

  const judgeNextBtnStatus = computed(() => {
    return judgeEmptyValue() ? false : true
  })

  const getUniqueIdFromBlockId = (blockId: any) => {
    let createId = ''
    blockId.forEach((id: string) => {
      createId = createId + '_' + id;
    })

    return createId
  }

  return {
    state,
    setPageValue,
    getPageValue,
    getPageValues,
    judgeEmptyValue,
    judgeNextBtnStatus,
    getUniqueIdFromBlockId
  }
}