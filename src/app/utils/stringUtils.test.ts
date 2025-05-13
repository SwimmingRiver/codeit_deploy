import { capitalize, truncate } from "./stringUtils";
describe("stringUtils 테스트", () => {
  let word : string;
  let max: number;
  beforeEach(() => {
    word='hello';
    max=3;
  });

  afterEach(() => {
    console.log("afterEach");
  });

  describe("capitalize 함수 테스트", () => {
    test("정상 동작 확인",()=>{
      expect(capitalize("hello")).toBe("Hello");
    });
    test("잘못된 입력 밧일 때",()=>{
      expect(capitalize('')).toBeFalsy()
    })
    test("한글자 일때",()=>{
      expect(capitalize("a")).toBe("A")
    })
    
  });

  describe("truncate 함수 테스트", () => {
    test("최대 길이 보다 짧을 때",()=>{
      expect(truncate("hello", 10)).toBe("hello");  
    })
    test("정상 동작",()=>{
      expect(truncate("hello", 3)).toBe("hel...");
    })
    test("사용자 정의 말줄임",()=>{
      expect(truncate("hello", 3,"1")).toBe("hel1");
    })
    test("빈 값일 때",()=>{
      expect(truncate("", 3)).toBeFalsy();
    })
    
  });
});
