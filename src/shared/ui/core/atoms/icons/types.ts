import { IconsList } from "."

export type TBaseIconProps = {
  size?: number,
  color?: string,
}

export type TDirectedIconProps = TBaseIconProps & {
  direction: 'up' | 'left' | 'right' | 'down'
}

export type TIconsList = keyof typeof IconsList
