import { TDirectedIconProps } from "./types";


export const IconChevron = ({ color, size, direction = 'up' }: TDirectedIconProps) => {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill={color ?? "black"} />
    </svg>
  )
}
