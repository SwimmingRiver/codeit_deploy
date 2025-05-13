import { formatDate } from "./dateUtils";

describe("date utils test", () => {
  let date: Date = new Date("2023-01-01");
  beforeEach(() => {
    date = new Date();
  });
  describe("formatDate 함수 테스트", () => {
    test("날짜를 YYYY-MM-DD 형식으로 포맷팅해야 함", () => {
      expect(formatDate(date)).toBe("2025-05-07");
    });
    test("날짜를 YYYY/MM/DD 형식으로 포맷팅해야 함", () => {
      expect(formatDate(date, "/")).toBe("2025/05/07");
    });
    test("10월 미만의 월과 10일 미만의 날짜는 앞에 0을 붙여야 함", () => {
      const date = new Date("2023-09-01");
      expect(formatDate(date)).toBe("2023-09-01");
    });
    test("10월 이상의 월과 10일 이상의 날짜도 올바르게 포맷팅해야 함", () => {
      const date = new Date("2023-10-10");
      expect(formatDate(date)).toBe("2023-10-10");
    });
    test("유효하지 않은 날짜는 빈 문자열을 반환해야 함", () => {
      const date = new Date("2023-13-32");
      expect(formatDate(date)).toBe("");
    });
  });
});
