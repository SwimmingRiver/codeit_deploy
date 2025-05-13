import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./CheckBox";
test("채크박스 토글이 잘 되는지 확인", () => {
  render(<Checkbox />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
