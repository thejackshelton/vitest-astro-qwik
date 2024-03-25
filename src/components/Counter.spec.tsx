import { createDOM } from "@builder.io/qwik/testing"; // import the createDOM method
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter component", function () {
  it("should render", async () => {
    // create the component's DOM and get back the container and a render method
    const { screen, render } = await createDOM();

    // call the render method with the JSX node of our Counter component as a parameter
    await render(<Counter />);

    // get the div that displays the count from our container
    const countElement = screen.querySelector(".count");

    // assert the displayed count is "0" which is the default value
    expect(countElement?.textContent).toBe("70");
  });
});
