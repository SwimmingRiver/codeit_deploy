import { act, renderHook } from "@testing-library/react";
import useInputs from "./useInputs";
import { ChangeEvent } from "react";
const initialValue = { name: "username", value: "hihi" };
describe("초기 값 설정 테스트", () => {
  test("initial value test", () => {
    const { result } = renderHook(() => useInputs(initialValue));
    expect(result.current.values).toEqual(initialValue);
  });
  test("단일 필드 업데이트 테스트", () => {
    const { result } = renderHook(() => useInputs(initialValue));
    const mockEvent = {
      target: { name: "username", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.values).not.toEqual(initialValue);
  });
  test("multi field update test", () => {
    const newValues = {
      ...initialValue,
      id: "charles",
    };
    const mockEvent = {
      target: { name: "username", value: "김철수" },
    } as ChangeEvent<HTMLInputElement>;
    const { result } = renderHook(() => useInputs(newValues));
    act(() => {
      result.current.handleChange(mockEvent);
    });
    expect(result.current.values).not.toEqual(initialValue);
  });
});
