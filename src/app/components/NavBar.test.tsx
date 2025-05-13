import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("nav bar test", () => {
  render(<NavBar />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();

  const input = screen.getByRole("searchbox", { name: "검색" });
  expect(input).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "로그인" });
  expect(button).toBeInTheDocument();
});
