/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h1`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}
