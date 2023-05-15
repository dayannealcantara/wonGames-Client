import styled, { css } from 'styled-components'
import midia from 'styled-media-query'

import { LogoPropos } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${midia.lessThan('medium')`
      width: 5.8rem;
      height: 1.7rem;

      svg{
        height: 4.5rem;
        pointer-events: none;
      }

      .text{
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoPropos>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
