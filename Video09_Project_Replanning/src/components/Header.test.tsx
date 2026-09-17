import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a home link labeled AgentClinic", async () => {
    const html = await (<Header />).toString();

    expect(html).toContain('<a href="/">AgentClinic</a>');
  });
});
