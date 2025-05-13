import { chunk, intersection, uniqueItems } from "./numArrayUtils"
describe('number Array Uitls test',()=>{
  describe("중복 제거 함수 테스트",()=>{
    test("중복 제거",()=>{
      expect(uniqueItems([1,2,2,2,3,4,4,5,6])).toEqual([1,2,3,4,5,6])
      expect(uniqueItems([1,2,3,4,3,4,5,5,6])).toEqual([1,2,3,4,5,6])
    })
    test("중복 없는 배열일 때",()=>{
      expect(uniqueItems([1,2,3,4,6])).toEqual([1,2,3,4,6])
      expect(uniqueItems([1,23,4,6])).toEqual([1,23,4,6])
    })
    test("빈 배열일 떄",()=>{
      expect(uniqueItems([])).toEqual([]);
    })
    test("배열이 아닐 떄",()=>{
      //@ts-expect-error
      expect(uniqueItems(1)).toEqual([]);
    })
  })
  describe("chunk 함수 테스트",()=>{
    test("지정된 크기의 청크로 나눔",()=>{
      expect(chunk([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5]])
    });
    test("청크 크기가 배열 길이보다 크면 하나의 청크만 반환해야함",()=>{
      expect(chunk([1,2,3],5)).toHaveLength(1)
    })
    test("크기 1일 때",()=>{
      expect(chunk([1,2,3],1)).toEqual([[1],[2],[3]])
    })
    test("크기 0이하일 때",()=>{
      expect(chunk([1,2,3],-1)).toEqual([[1,2,3]])
    })
    test("빈 배열 때",()=>{
      expect(chunk([],1)).toEqual([])
    })
    test("배열이 아닐 때",()=>{
      //@ts-expect-error
      expect(chunk(0,1)).toEqual([])
    })
  })
  describe("intersection 함수 테스트",()=>{
    test('두 배열의 공통 요소를 반환',()=>{
      expect(intersection([1, 2, 3, 4, 5],[3, 4, 5, 6, 7])).toEqual([3, 4, 5])
    })
    test('공통 요소가 없을 때 빈 배열 반환',()=>{
      expect(intersection([1, 2],[3, 4, 5, 6, 7])).toEqual([])
    })
    test('빈 배열은 빈 배열 반환',()=>{
      expect(intersection([],[])).toEqual([])
    })
    test('배열이 아닌 값은 빈 배열 반환',()=>{
      //@ts-expect-error
      expect(intersection(1,2)).toEqual([])
    })
  })
})
