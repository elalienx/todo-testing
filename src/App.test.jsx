// render = allows to put a React compoment inside jest,
// screen allows to view what is happening in the "virtual" browser
// fireEvent allows to do RTS click events
import { render, screen, fireEvent } from "@testing-library/react"; // focus on testing React components
import App from "./App"; // the components that we import in order to run a test

// UI Test

// this line of code below belongs to Jest ⬇️
test("Renders the link for learning React on the screen", () => {
  // Arrange
  render(<App />); // ⬅️ belongs to TL

  // Act
  const linkElement = screen.getByText(/learn react/i); // ⬅️ belongs to TL

  // Assert
  expect(linkElement).toBeInTheDocument(); // ⬅️ belong to Jest
});

// Writting the first TDD
test("Renders the Show message button on the screen", () => {
  // Arrange
  render(<App />);

  // Act
  const buttonElement = screen.getByText(/show message/i);

  // Assert
  expect(buttonElement).toBeInTheDocument();
});

test("Shows the message Hello world when the button is press", () => {
  // Arrange
  render(<App />);

  // Act
  // First, we create and click it
  const buttonElement = screen.getByText(/show message/i);
  fireEvent.click(buttonElement); // fireEvent, click onto whom?

  // Second, after the button was click, check if the new text appeared on the screen
  const greetingElement = screen.getByText(/hello world/i);

  // Assert
  expect(greetingElement).toBeInTheDocument();
});

/**
 *
 * 3 As of Testing
 *
 * Arrange:
 * Is to set up the stage to this particular test. In our frontend case meants to mount a component.
 *
 * Act:
 * Do something in order to expect some behaviour.
 *
 * Assert:
 * To confirm or denny that whatever we did in the "Act" part was the expected behaviour
 *
 */
