# Analysis

## What to learn

1. Difference Logic (Jest) vs. Unit testing. (Enzyme, Testing Library) ✅
1. Difference between testing UI code (Enzyme) vs. results on the screen. (Testing Library) ✅
1. Analyze the testing files installed by default on `npx create-react-app`. ✅
1. Theory of the 3As in Testing: Arrange, Act, Assert. ✅
1. Analyze the default test in the Create React App project. ✅
1. Write a test as TDD. ✅
1. Mock (simulate) a click event using Testing Library `fireEvent`. ✅
1. Mock global events by using `jest.fn()`. ✅
1. Mock modules. (your separated function files)

---

## Comparisson between the React useEffect hook method vs. the Jest test method

### React useEffect method

`useEffect(() => {}, []);`

UseEffect arguments:

1. Arrow function with code to run, the momment that the React component is created.
1. 2. Array with hooks that will trigger re-render to update the component when the hooks change.

### Jest test method

`test("", () => {});`

Test arguments:

1. String with the title of the test, basically what or why are we testing this.
1. Arrow function with code to run, in order to Arrange, Act and Assert a test. (the test itself)

---

## Jest expect method

`expect().something()`

- Expect argument: A variable to be compare to something.
- Expect .dot notation: The action to compare against the variable. In other words, this is the question we ask/

---

---

## Jest mock method

`jest.fn( ()=>{} )`

- Argument is an arrow function that needs to return a value

## Mocking global functions

Not 100% reliable. (i will test it further later)
First of all enable this piece of code inside `package.json`

```
  "jest": {
    "resetMocks": false
  },
```

## Nullish coalescing operator

[Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

```
if (JSON.parse(rawData) === null) {
  data = backup;
} else if (JSON.parse(rawData) === undefined) {
  data = backup;
} else {
  data = JSON.parse(rawData);
}
```
