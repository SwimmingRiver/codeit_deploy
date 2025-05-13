import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

test("onSearch 함수가 잘 동작하는 지 확인", async () => {
  const search = userEvent.setup();
  const handleSearch = jest.fn();
  render(<SearchForm onSearch={handleSearch} />);
  const input = screen.getByLabelText("검색:");
  const submitButton = screen.getByRole("button", { name: "검색" });

  await search.type(input, "hihi");
  await search.click(submitButton);
  expect(input).toHaveValue("hihi");
});
