import { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '.'

const meta: Meta<typeof TextInput> = {
  title: '',
  component: TextInput,
}

export default meta

type TTextInputStory = StoryObj<typeof TextInput>


export const Default: TTextInputStory = {
  render: args => <TextInput {...args} />,
  args: {
    showIcon: true,
  },
}
