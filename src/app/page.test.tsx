import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./page";

describe("todo app test", () => {
  beforeEach(() => {
    render(<TodoList />);
  });
  test("초기 상테에서는 할 일이 없어야 한다.", () => {
    const text = screen.getByText("할 일이 없습니다");
    expect(text).toBeInTheDocument();
    const text2 = screen.getByText("총 0개의 할 일이 있습니다");
    expect(text2).toBeInTheDocument();
  });

  test("할 일을 추가했을 때 목록에 올바르게 추가되는지 확인", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, { target: { value: "하기" } });

    fireEvent.click(screen.getByText("추가"));
    expect(screen.getByText("하기")).toBeInTheDocument();
    expect(screen.getByText("총 1개의 할 일이 있습니다")).toBeInTheDocument();
    expect(screen.getByText("완료: 0개")).toBeInTheDocument();
  });

  test("할 일을 완료했을 때 완료 상태가 반영되는지 확인합니다.", () => {
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, { target: { value: "하기" } });

    fireEvent.click(screen.getByText("추가"));
    expect(screen.getByText("하기")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(screen.getByText("하기")).toHaveClass("line-through");
    expect(screen.getByText("완료: 1개")).toBeInTheDocument();
  });
});
