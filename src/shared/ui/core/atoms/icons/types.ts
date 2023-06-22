export type TBaseIconProps = {
  size?: number,
  color?: string,
}

export type TDirectedIconProps = TBaseIconProps & {
  direction: 'up' | 'left' | 'right' | 'down'
}
