import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandImage } from "@/components/site/BrandImage";

describe("BrandImage", () => {
  it("shows a readable brand fallback when its image cannot load", () => {
    render(<BrandImage src="/missing-logo.png" alt="Earth’s Ants logo" fallback="Earth’s Ants" />);

    fireEvent.error(screen.getByRole("img", { name: "Earth’s Ants logo" }));

    expect(screen.getByRole("img", { name: "Earth’s Ants logo" })).toHaveTextContent(
      "Earth’s Ants",
    );
  });
});
