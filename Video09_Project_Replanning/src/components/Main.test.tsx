import { describe, expect, it } from "vitest";
import { Main } from "./Main";

describe("Main", () => {
  it("wraps its children in a <main> element", async () => {
    const html = await (
      <Main>
        <p>content</p>
      </Main>
    ).toString();

    expect(html).toBe("<main><p>content</p></main>");
  });
});
