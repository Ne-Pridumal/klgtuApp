import { TDirectedIconProps } from "../types";

export const IconStraightArrow = ({ size, color, direction = 'up' }: TDirectedIconProps) => {
  return (
    <svg
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={
        direction === 'up' ?
          "rotate(0)"
          :
          direction === "down" ?
            "rotate(180)"
            :
            direction === "left" ?
              "rotate(270)"
              :
              "rotate(90)"
      }>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071C19.3166 13.0976 18.6834 13.0976 18.2929 12.7071L13 7.41421V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V7.41421L5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289Z" fill={color ?? "black"} />
    </svg>
  )
}
