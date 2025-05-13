// src/utils/discount.ts
export function calculateDiscount(price: number, discountRate: number) {
  if (typeof price !== "number" || typeof discountRate !== "number") return 0;
  if (price < 0 || discountRate < 0 || discountRate > 100) return 0;
  return price * (1 - discountRate / 100);
}
export type Membership = "regular" | "silver" | "gold" | "vip";

const applyMembershipDiscount = (price: number, membership: Membership) => {
  const discountRates = {
    regular: 1,
    silver: 0.98,
    gold: 0.95,
    vip: 0.9,
  };
  return price * (discountRates[membership] || 1);
};

export const calculatePrice = (
  price: number,
  customer: {
    membership: string;
  },
) => {
  if (price >= 200000) return price * 0.8;
  if (price >= 100000) return price * 0.9;
  if (price >= 50000) return price * 0.95;
  return price;
};
