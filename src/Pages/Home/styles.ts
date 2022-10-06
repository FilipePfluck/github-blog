import { styled } from '../../../stitches.config'

export const PostList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 32,
  marginTop: 48,

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})
