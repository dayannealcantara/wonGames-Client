import CartIcon from '.'
import { renderWithTheme } from 'utils/tests/helper'

import { screen } from '@testing-library/react'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CartIcon quantity={7} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
  })
})
