import { describe, expect, it } from "vitest";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders the page shell with the stylesheet, header, footer, and children", async () => {
    const html = await (
      <Layout>
        <p>page content</p>
      </Layout>
    ).toString();

    expect(html).toContain("<title>AgentClinic</title>");
    expect(html).toContain('<link rel="stylesheet" href="/static/style.css"/>');
    expect(html).toContain('<a href="/">AgentClinic</a>');
    expect(html).toContain("<p>page content</p>");
    expect(html).toMatch(/<footer>.*<\/footer>/s);
  });
});
