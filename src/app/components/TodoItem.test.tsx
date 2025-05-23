import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

test("할 일 목록 상태 테스트", () => {
  render(<TodoItem task="일어나기" completed={true} />);

  const taskText = screen.getByText("일어나기");
  expect(taskText).toHaveTextContent("일어나기");

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();

  expect(checkbox).toBeDisabled();

  const editButton = screen.getByRole("button", { name: "수정" });
  expect(editButton).toBeDisabled();

  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveClass("completed");
});
