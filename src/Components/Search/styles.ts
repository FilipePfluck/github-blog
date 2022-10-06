import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 48,
})

export const TopContent = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  p: {
    color: '$subtitle',
    fontSize: 18,
    fontWeight: 'bold',
  },

  span: {
    color: '$span',
    fontSize: 14,
  },
})

export const Input = styled('input', {
  height: 50,
  width: '100%',
  marginTop: 16,
  borderRadius: 6,
  border: '2px solid $border',
  background: '$input',
  color: '$text',
  '&::placeholder': {
    color: '$label',
  },
  padding: 16,
  outline: 0,
})
