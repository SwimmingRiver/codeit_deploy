import { processArray } from "./arrayUtils"

test("정상 동작하는지",()=>{
  expect(processArray([1,2])).toEqual({
    sum:3,
    average:1.5,
    max:2,
    min:1
  })
})
test("빈 배열일 때 null 반환",()=>{
  expect(processArray([])).toBe(null)
})
test('배열이 아닐 때 null 반환',()=>{
  //@ts-expect-error
  expect(processArray(1)).toBe(null);
})
test('모든 속성이 있는지 ',()=>{
  const arr = processArray([1,2]);
  expect(arr).toHaveProperty("sum")
  expect(arr).toHaveProperty("average")
  expect(arr).toHaveProperty("max")
  expect(arr).toHaveProperty("min")

})