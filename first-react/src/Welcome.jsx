// Welcome.jsx
import React from 'react';

function Welcome({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to PUGC!</p>
    </div>
  );
}

export default Welcome;

/* Named exports

export function Welcome() {
  return <h1>Welcome to PUGC!</h1>;
}

export const PI = 3.14159;

export function calculateArea(radius) {
  return PI * radius * radius;
}

export function calculateCircumference(radius) {
  return 2 * PI * radius;
}

*/
