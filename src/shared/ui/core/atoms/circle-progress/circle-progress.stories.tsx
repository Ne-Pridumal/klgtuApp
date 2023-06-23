import { Meta, StoryObj } from '@storybook/react'
import { CircleProgress } from '.'
import { useEffect, useState } from 'react'

const meta: Meta<typeof CircleProgress> = {
  title: '',
  component: CircleProgress,
}

export default meta

type TCircleProgressStory = StoryObj<typeof CircleProgress>

const InfinityCircleProgress = () => {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1)
      }
      else {
        setProgress(0)
      }
    }, 10);
    return () => clearInterval(interval)
  }, [progress])
  return (
    <CircleProgress
      progress={progress}
      spinnerSpeed={2}
    />
  )
}

export const Default: TCircleProgressStory = {
  render: () => <InfinityCircleProgress />,
  args: {},
}
