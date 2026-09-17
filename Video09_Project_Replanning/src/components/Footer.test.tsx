import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders a copyright notice with the current year", async () => {
    const html = await (<Footer />).toString();
    const year = new Date().getFullYear();

    expect(html).toContain(`© ${year} AgentClinic`);
  });
});
