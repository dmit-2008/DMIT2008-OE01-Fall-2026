import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

test('todo list title renders correctly', ()=> {
  render(<TodoList />)
  const titleElement = screen.getByText("Our Todo List")
  expect(titleElement).toBeInTheDocument()
})
