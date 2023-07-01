import { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  title: '',
  component: Header,
}

export default meta

type THeaderStory = StoryObj<typeof Header>

export const Default: THeaderStory = {
  render: args => <Header {...args} />,
  args: {
    type: 'logo',
    onDownload: () => { },
    onSwitchTheme: () => { },
    onChoiceTimetable: () => { },
  },
}
