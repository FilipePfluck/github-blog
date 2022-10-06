import { styled } from '../../../stitches.config'

export const ProfileImage = styled('img', {
  width: 148,
  height: 148,
  borderRadius: 8,
  marginRight: 32,

  '@bp1': {
    width: 64,
    height: 64,
    marginRight: 16,
  },
})

export const ProfileData = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$title',
    fontSize: 24,
    marginBottom: 16,
  },

  p: {
    color: '$text',
    fontSize: 16,
  },
})

export const IconsGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',

  p: {
    marginLeft: 8,
    marginRight: 24,
  },

  svg: {
    color: '$span',
  },

  '@bp1': {
    position: 'absolute',
    left: 32,
    bottom: 12,
  },
})
