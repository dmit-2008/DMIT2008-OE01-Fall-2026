import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import ByLine from '../components/ByLine'

test('byline should include the author name', () => {
    render (<ByLine author="Jhimlie"/>)
    const someElement = screen.getByText("by Jhimlie")
    expect(someElement).toBeInTheDocument();
})

test('byline should include OTHER author names', () => {
    render (<ByLine author="Dan"/>)
    const someElement = screen.getByText("by Dan")
    expect(someElement).toBeInTheDocument();    
})