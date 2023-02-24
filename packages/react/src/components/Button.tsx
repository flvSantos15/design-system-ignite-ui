/* eslint-disable prettier/prettier */
import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    background: '$gray200',
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(disabled):hover': {
          background: '$ignite300'
        },

        '&:disabled': {
          background: '$gray200',
          cursor: 'not-allowed'
        }
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(disabled):hover': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          background: '$gray200',
          borderColor: '$gray200'
        }
      },

      tertiary: {
        color: '$gray100',

        '&:not(disabled):hover': {
          background: '$white'
        },

        '&:disabled': {
          background: '$gray600'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },

      md: {
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
