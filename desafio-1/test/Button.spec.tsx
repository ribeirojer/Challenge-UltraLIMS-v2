import React from "react"
import Button from "../src/components/Button";
import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
// @vitest-environment happy-dom

describe("Button component", () => {
  it("should render the correct text", () => {
      const { container } = render(
      <Button>Click me</Button>
    );
    expect(container.firstChild?.textContent).toBe("Click me");
  });

it('should have the correct CSS class', () => {  
  const { container } = render(<Button className="custom-class">Click me</Button>);
  const { children } = container;
  const className = children.item(0)?.attributes.getNamedItem("class")?.value;
  expect(className).toContain('custom-class');
});

it('should have the correct button type', () => {
  const { container } = render(<Button type="submit">Submit</Button>);
  expect(container.firstChild).toHaveProperty('type', 'submit');
});
  
});
