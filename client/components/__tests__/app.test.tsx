//@vitest-environment jsdom
import { describe, it } from 'vitest'
import { renderApp } from '../../test/setup'


describe('welcome screen', () => {
  it('shows a header', () => {
    renderApp('/')
    // const heading = screen.getByRole('heading', { name: /pickles/i })
    // expect(heading).toBeVisible()
  })
})
