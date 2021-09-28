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
  const linkElement = screen.getByText(/learn react/i); // ⬅️ belongs to TL

  // Act
  // no act is neccesary, App renders the link automatically withouth user input

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
  const buttonElement = screen.getByText(/show message/i);

  // Act (Actions and consequences/side effects)
  fireEvent.click(buttonElement);
  const greetingElement = screen.getByText(/hello world/i);

  // Assert
  expect(greetingElement).toBeInTheDocument();
});

// Mocking global methods (localStorage, alert)
test("The local sotrage key do have information (returns >1 items)", () => {
  // Arrange
  const fakeLocalStorageData = [
    {
      id: 1,
      name: "Sofa",
      checked: false,
    },
    {
      id: 2,
      name: "TV stand",
      checked: false,
    },
  ];

  // localStorage.getItem()
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData); // "[ {id:1, name: 'sofa', checked:false} ]"
  });

  render(<App />);

  // Act
  const itemElement1 = screen.getByText(/sofa/i);
  const itemElement2 = screen.getByText(/tv stand/i);

  // Assert
  expect(itemElement1).toBeInTheDocument();
  expect(itemElement2).toBeInTheDocument();
});

test("The local storage key does not have information (returns 0 items)", () => {
  // Arrange
  const fakeLocalStorageData = [];

  // localStorage.getItem()
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(fakeLocalStorageData); // []
  });

  render(<App />);

  // Act
  const errorMessage = screen.getByText(/sorry no items found/i);

  // Assert
  expect(errorMessage).toBeInTheDocument();
});

test("The local storage key is null", () => {
  // Arrange
  const fakeLocalStorageData = null;

  // localStorage.getItem()
  Storage.prototype.getItem = jest.fn(() => fakeLocalStorageData); // null;

  render(<App />);

  // Act
  const errorMessage = screen.getByText(/sorry no items found/i);

  // Assert
  expect(errorMessage).toBeInTheDocument();
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
