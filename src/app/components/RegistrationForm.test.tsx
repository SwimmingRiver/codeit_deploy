import RegistrationForm from "./RegitstrationForm";
import { render, screen } from "@testing-library/react";

test("회원가입 폼테스트 ", () => {
  render(<RegistrationForm />);
  const heading = screen.getByRole("heading", { name: "회원가입" });
  const passwordInput = screen.getByLabelText("비밀번호:");
  expect(heading).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
