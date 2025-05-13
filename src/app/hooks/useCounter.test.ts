import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter hook test", () => {
  test("초기값이 올바르게 설정된다.", () => {
    const { result } = renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });
  test("increment 함수를 호출하면 count가 1 증가한다.", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
