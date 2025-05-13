// src/utils/sum.test.ts
import sum from "./sum";

it("1 + 2는 3이 되어야 함", () => {
  expect(sum(1, 2)).toBe(3);
});

test("1이 같은지", () => {
  expect(1).toBe(1);
});

test("hello가 같은지", () => {
  expect("hello").toBe("hello");
});
test("참조 값이 같은지", () => {
  expect({ a: 1 }).toEqual({ a: 1 });
});

test("testToBeTruthy", () => {
  expect(1).toBeTruthy();
});
