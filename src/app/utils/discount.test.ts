import { calculatePrice } from "./discount";

describe("할인 계산기", () => {
  test("기본 가격에 할인이 적용되지 않아야 함 (5만원 미만)", () => {
    const price = 30000;
    const customer = { membership: "regular" };
    const finalPrice = calculatePrice(price, customer);
    expect(finalPrice).toBe(30000);
  });
  describe("금액별 할인 테스트", () => {
    test("5만원이상 구매시d 5% 할인 적용", () => {
      const price = 50000;
      const customer = { membership: "regular" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(47500);
    });
    test("10만원이상 구매시 10% 할인 적용", () => {
      const price = 100000;
      const customer = { membership: "regular" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(90000);
    });
    test("20만원 이상 구매 시 20% 할인이 적용되어야 함", () => {
      const price = 200000;
      const customer = { membership: "regular" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(160000);
    });
  });
  describe("회원 등급별 할인 테스트", () => {
    test("실버 회원은 추가 2% 할인이 적용되어야 함", () => {
      const price = 100000;
      const customer = { membership: "silver" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(88200);
    });

    test("골드 회원은 추가 5% 할인이 적용되어야 함", () => {
      const price = 100000;
      const customer = { membership: "gold" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(85500);
    });

    test("VIP 회원은 추가 10% 할인이 적용되어야 함", () => {
      const price = 100000;
      const customer = { membership: "vip" };
      const finalPrice = calculatePrice(price, customer);
      expect(finalPrice).toBe(81000);
    });
  });
});
