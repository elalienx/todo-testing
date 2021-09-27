import { useEffect } from "react";

// Comparisson between the React useEffect hook method vs. the Jest test method

// React useEffect method
useEffect(() => {}, []);
/**
 * useEffect arguments:
 * 1. Arrow function with code to run, the momment that the React component is created
 * 2. Array with hooks that will trigger re-render to update the component when the hooks change
 */

// Jest test method
test("", () => {});
/**
 * test arguments:
 * 1. String with the title of the test, basically what or why are we testing this.
 * 2. Arrow function with code to run, in order to Arrange, Act and Assert a test. (the test itself)
 */

// Jest expect method
expect().something()
/**
 * expect argument:
 * A variable to be compare to something.
 * 
 * expect .dot notation
 * The action to compare against the variable.
 * In other words, this is the question we ask/
 */
