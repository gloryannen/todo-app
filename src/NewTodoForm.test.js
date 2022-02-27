import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke test
it("renders without crashing", function () {
  render(<NewTodoForm />);
});

// Snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});