import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const TopContent = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '$blue',
  fontSize: 12,
  marginBottom: 16,
})

export const Title = styled('h1', {
  color: '$title',
  fontSize: 24,
  marginBottom: 16,
})

export const IconsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',

  div: {
    display: 'flex',
    alignItems: 'center',
    '@bp1': {
      marginTop: 8,
    },
  },

  p: {
    marginLeft: 8,
    marginRight: 24,
  },

  svg: {
    color: '$span',
  },

  '@bp1': {
    flexDirection: 'column',
  },
})
