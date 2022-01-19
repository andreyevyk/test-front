import { css } from 'styled-components'
import HelveticaNeueRegular from 'assets/fonts/HelveticaNeue-Regular.otf'

export const customFonts = css`
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: normal;
    font-style: normal;
    font-display: block;
    src: ${HelveticaNeueRegular};
  }
`
