import {fireEvent, render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'

test('todo list title renders correctly', () => {
    render (<TodoList />)
    const titleElement = screen.getByText("Our Todo List")
    expect(titleElement).toBeInTheDocument()
})

test('render button and input element', () => {
    render (<TodoList />)
    // select the input element
    const inputElement = screen.getByLabelText("New Todo")
    // check if there's a button
    const button = screen.getByText("Add Todo")
    //positive testing
    expect(inputElement).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    // negative testing
    // expect(inputElement).not.toBeInTheDocument()
    // expect(button).not.toBeInTheDocument()
})


test('todo is added successfully', () => {
    render (<TodoList />)
    const inputElement = screen.getByLabelText("New Todo")
    const buttonElement = screen.getByText("Add Todo")
    const listElement = screen.getByTestId("todo-item-list")
    const EXPECT_STRING = "Learn Testing in Javacript"

    // add the string in our input element
    fireEvent.change(inputElement, {
        target: {value: EXPECT_STRING}
    })

    expect(inputElement.value).toBe(EXPECT_STRING)

    //update the state of the application
    act(()=>{
        buttonElement.click()
    })

    expect(inputElement.value).toBe('')
    expect(listElement).toHaveTextContent(EXPECT_STRING)
})