import { styled } from '../../../stitches.config'

export const PostBodyContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  textOverflow: 'ellipsis',
  flex: 1,
  marginTop: 48,

  pre: {
    overflowX: 'auto',
    backgroundColor: '$profile',
    borderRadius: 8,
    padding: 12,
    margin: '8px 0',
  },

  h2: {
    fontSize: 18,
  },
})
