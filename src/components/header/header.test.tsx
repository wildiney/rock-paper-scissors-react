import { beforeEach, describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './header'

describe("Header Test", () => {
  beforeEach(() => {
    render(<Header title='Teste' />)
  })

  test('Add App Name', () => {
    expect(screen.getByText(/Teste/i)).toBeDefined()
  })
})
