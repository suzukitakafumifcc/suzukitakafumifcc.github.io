import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("Home", () => {
  render(<Home />);
  expect(screen.getByText("Get started by editing"));
  expect(screen.getByText("app/page.tsx"));
  expect(screen.getByAltText("Vercel Logo"));
});
