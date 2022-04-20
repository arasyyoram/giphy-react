import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { SearchComponent } from "./index";

// test("expect something", () => {
//   expect(1 + 1).toBe(2);
// });

test("render component", () => {
  render(<SearchComponent />);
  const searchComponentDisplay = screen.getByRole("textbox", {
    name: /email address/i
  });
  expect(searchComponentDisplay).toBeInTheDocument();
});
