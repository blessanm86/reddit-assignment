import { px2rem } from "../styles";

describe("px2rem", () => {
  it("Should give rem value with base font size as 16", () => {
    expect(px2rem(20)).toBe("1.25rem");
    expect(px2rem([20])).toBe("1.25rem");
    expect(px2rem([20, 20])).toBe("1.25rem 1.25rem");
  });

  it("Should give rem value based on passed in base font size", () => {
    expect(px2rem(20, 12)).toBe("1.67rem");
    expect(px2rem([20], 12)).toBe("1.67rem");
    expect(px2rem([20, 20], 12)).toBe("1.67rem 1.67rem");
  });
});
