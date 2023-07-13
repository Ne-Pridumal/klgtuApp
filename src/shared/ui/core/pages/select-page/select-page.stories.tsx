import { Meta, StoryObj } from '@storybook/react'
import { SelectPage } from '.'

const meta: Meta<typeof SelectPage> = {
  title: '',
  component: SelectPage,
}

export default meta

type TSelectPageStory = StoryObj<typeof SelectPage>

export const Default: TSelectPageStory = {
  render: args => <SelectPage {...args} />,
  args: {
    inputProps: {
      width: 480,
      onChange() {

      },
      value: '',
      placeholder: 'Группа, преподаватель, аудитория'
    },
    buttonProps: {
      onClick() {

      },
      isDisable: true
    }
  },
}
