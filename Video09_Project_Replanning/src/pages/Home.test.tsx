import { describe, expect, it } from "vitest";
import { Home } from "./Home";

describe("Home", () => {
  it("renders the AgentClinic heading and a tagline", async () => {
    const html = await (<Home />).toString();

    expect(html).toContain("<h1>AgentClinic</h1>");
    expect(html).toMatch(/<p>.+<\/p>/);
  });
});
