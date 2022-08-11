import Home from ".";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
      render(<Home />)
  
      const heading = screen.getByRole('heading', {
        name: "Our House",
      })
  
      expect(heading).toBeInTheDocument()
    })

    it('renders log in button', () => {
        render(<Home />)

        const button = screen.getByRole('button', {
            name: "Login / Sign-up",
        })

        expect(button).toBeInTheDocument()
    })

    it('renders logo', () => {
        render(<Home />)

        const logo = screen.getByRole('img', {
            name: "",
        })

        expect(logo).toBeInTheDocument()
    })

  })