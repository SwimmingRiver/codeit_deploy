import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm2";

// test("로그인 버튼을 클릭하면 메시지가 출력되는 지 확인", () => {
//   render(<LoginForm />);
//   const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

//   const loginButton = screen.getByRole("button", { name: "로그인" });
//   fireEvent.click(loginButton);

//   expect(consoleSpy).toHaveBeenCalledWith("로그인 버튼 클릭");

//   consoleSpy.mockRestore();
// });

test("이메일 입력시 input 요소의 값이 변경되는 지 확인", () => {
  render(<LoginForm />);
  const emailInput = screen.getByRole("textbox", { name: "이메일:" });
  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  expect(emailInput).toHaveValue("test@test.com");
});
