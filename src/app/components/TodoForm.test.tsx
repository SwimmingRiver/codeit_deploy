import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("todo form test", () => {
  render(<TodoForm />);
  const input = screen.getByLabelText("할 일:");
  expect(input).toHaveValue("");

  fireEvent.change(input, { target: { value: "hihi" } });
  expect(input).toHaveValue("hihi");
});
