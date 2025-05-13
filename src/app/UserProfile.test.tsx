import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("user profile test", () => {
  render(<UserProfile name="홍길동" isVerified={true} />);
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("홍길동님의 프로필");

  const image = screen.getByAltText("프로필 이미지");
  expect(image).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "프로필 수정" });
  expect(button).not.toBeDisabled();

  const div = screen.getByTestId("profile-container");
  expect(div).toHaveClass("verified");
});
