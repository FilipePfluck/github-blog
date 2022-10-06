import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      input: '#040F1A',
      background: '#071422',
      profile: '#0B1B2B',
      post: '#112131',
      border: '#1C2F41',
      label: '#3A536B',
      span: '#7B96B2',
      text: '#AFC2D4',
      subtitle: '#C4D4E3',
      title: '#E7EDF4',
      blue: '#3294F8',
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(max-width: 520px)',
    bp2: '(max-width: 900px)',
  },
})

export const GlobalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundColor: '$background',
    height: '100vh',
    width: '100vw',
    color: '$text',
    fontFamily: 'Nunito, sans-serif',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  button: {
    cursor: 'pointer',
    border: 0,
    background: 'transparent',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '::-webkit-scrollbar': {
    width: 8,
  },
  '::-webkit-scrollbar-track': {
    background: '$background',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$post',
    borderRadius: 6,
  },
})
