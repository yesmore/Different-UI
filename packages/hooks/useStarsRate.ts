import { ref } from 'vue'

interface starApi extends CallableFunction {
  value: number
}

export function useStarsRate(num: number, callback: any) {
  const starNum = ref(num)

  const setStarNum: CallableFunction = (num: number) => {
    starNum.value = num
    callback()
  }

  return [starNum, setStarNum]
}
