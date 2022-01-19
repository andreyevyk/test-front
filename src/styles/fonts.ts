import { css } from 'styled-components'
import HelveticaNeueRegular from 'assets/fonts/HelveticaNeue-Regular.otf'
import HelveticaNeueBold from 'assets/fonts/HelveticaNeue-Bold.otf'
import HelveticaNeueMedium from 'assets/fonts/HelveticaNeue-Medium.otf'

export const customFonts = css`
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: normal;
    src: ${HelveticaNeueRegular};
  }
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 500;
    src: ${HelveticaNeueMedium};
  }
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 700;
    src: ${HelveticaNeueBold};
  }
`
