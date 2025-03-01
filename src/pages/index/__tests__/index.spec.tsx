import { render, screen } from "@testing-library/react";

import Index from "..";

describe("<Index />", () => {
  it("should render index pages", () => {
    render(<Index />);

    screen.debug();
  });
});
