import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

const meta: Meta<typeof Footer> = {
  title: '',
  component: Footer,
}

export default meta

type TFooterStory = StoryObj<typeof Footer>

export const Default: TFooterStory = {
  render: args => <Footer {...args} />,
  args: {},
}
