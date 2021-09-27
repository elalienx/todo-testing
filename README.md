# Analysis

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
