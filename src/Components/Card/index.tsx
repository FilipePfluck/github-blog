import { styled } from '../../../stitches.config'

export const Card = styled('section', {
  display: 'flex',
  width: '100%',
  borderRadius: 10,
  padding: 32,
  background: '$profile',
  position: 'relative',

  '@bp1': {
    paddingBottom: 64,
  },
})
