import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});

// Snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Test box making
it('Creates a task', function () {
  const { queryByText, getByPlaceholderText, getByText } = render(<TodoList />);

  // Check that there isn't a task in the page
  expect(queryByText('X')).not.toBeInTheDocument();

  // Adds box to BoxList
  const todoInput = getByPlaceholderText('Add a task');
  fireEvent.change(todoInput, { target: { value: 'Test' } });
  const button = getByText('+');
  fireEvent.click(button);
})

// Test box removal
it('Removes a task', function () {
  const { getByPlaceholderText, getByText } = render(<TodoList />);

  //  Adds box to BoxList
  const todoInput = getByPlaceholderText('Add a task');
  fireEvent.change(todoInput, { target: { value: 'Test' } });
  const button = getByText('+');
  fireEvent.click(button);

  // Checks box is removed
  const removeTask = getByText('X');
  fireEvent.click(removeTask)
  expect(removeTask).not.toBeInTheDocument();
})