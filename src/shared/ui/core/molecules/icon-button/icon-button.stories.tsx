import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from '.'
import { IconPlus } from '../../atoms/icons'

const meta: Meta<typeof IconButton> = {
  title: '',
  component: IconButton,
}

export default meta

type TIconButtonStory = StoryObj<typeof IconButton>

export const Default: TIconButtonStory = {
  render: args => <IconButton {...args} />,
  args: {
    icon: <IconPlus />,
  },

}
