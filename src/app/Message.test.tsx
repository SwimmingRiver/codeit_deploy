import { render, screen } from "@testing-library/react";
import Message from "./Message";

test("message test", () => {
  const isError = false;
  render(<Message isError={isError} />);
  const notError = screen.queryByText("오류가 발생했습니다.");
  expect(notError).not.toBeInTheDocument();
});

test("error message test", () => {
  const isError = true;
  render(<Message isError={isError} />);
  const errorMessage = screen.getByText("오류가 발생했습니다");
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveClass("error");
});
