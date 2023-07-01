import { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from '.'

const meta: Meta<typeof NotificationItem> = {
  title: '',
  component: NotificationItem,
}

export default meta

type TNotificationItemStory = StoryObj<typeof NotificationItem>

export const Default: TNotificationItemStory = {
  render: args => <NotificationItem {...args} />,
  args: {
    text: "Какая-то очень длинная, предлинная ошибка которая не поместиться в одну строчку и будет занимать очень много места)))",
    onClose: () => { },
    isPicked: true
  },
}
