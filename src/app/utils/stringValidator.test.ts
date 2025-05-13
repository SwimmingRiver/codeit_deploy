import {validateUsername} from './stringValidator'
test("string validator 함수 유용한 사용자 이름이 true인지 테스트",()=>{
  expect(validateUsername("hooi")).toBe(true)
})
test("특수문자를 포함했을 때 false",()=>{
  expect(validateUsername("@")).toBe(false)
})
test('길이 제한을 벗어났을 떄',()=>{
  expect(validateUsername("1".repeat(30))).toBe(false)
})
test('잘못된 타입',()=>{
  expect(validateUsername(1)).toBe(false);
  expect(validateUsername(null)).toBe(false)
  expect(validateUsername(undefined)).toBe(false)
})