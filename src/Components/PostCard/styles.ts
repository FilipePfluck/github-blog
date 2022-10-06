import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 32,
  borderRadius: 10,
  background: '$post',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 32,
  },

  p: {
    color: '$text',
    fontSize: 16,
  },

  strong: {
    color: '$title',
    fontSize: 20,
  },

  span: {
    color: '$span',
    fontSize: 14,
    whiteSpace: 'nowrap',
  },
})

export const PostBodyContainer = styled('div', {
  maxHeight: 112,
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textOverflow: 'ellipsis',

  pre: {
    overflowX: 'auto',
    maxWidth: 352,
    backgroundColor: '$profile',
    borderRadius: 8,
    padding: 12,
    margin: '8px 0',

    '@bp1': {
      maxWidth: 200,
    },
  },

  h2: {
    fontSize: 18,
  },
})
