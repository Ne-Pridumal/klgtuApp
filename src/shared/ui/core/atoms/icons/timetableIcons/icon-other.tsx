import { TTimetableIconProps } from "../types"

export const IconOther = ({ size = 48 }: TTimetableIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} rx="24" fill="#828282" />
      <path d="M18.4803 27.2812H20.1313V19.2102H18.4803C16.2208 19.2102 15 20.4258 15 22.6542V23.8387C15 26.0603 16.2208 27.2812 18.4803 27.2812ZM21.3009 27.2895C23.6343 27.5591 26.0433 28.277 28.3658 29.448C28.3613 29.3514 28.3599 29.2466 28.3599 29.15V17.3498C28.3599 17.2427 28.3613 17.1506 28.3643 17.0449C26.0598 18.2092 23.4371 18.9731 21.3009 19.2102V27.2895ZM31.2542 31.4287C32.28 31.4287 33 30.6854 33 29.6465V16.789C33 15.7434 32.28 15 31.2542 15C30.2402 15 29.5135 15.7434 29.5135 16.789V29.6465C29.5135 30.6854 30.2402 31.4287 31.2542 31.4287ZM21.7856 33C22.8336 33 23.615 32.2054 23.3274 30.8991L22.8667 28.7554C22.1384 28.61 21.1184 28.5173 19.0359 28.4682C18.8941 28.4682 18.6672 28.4545 18.4322 28.453L19.8521 31.5215C20.283 32.4525 20.7968 33 21.7856 33Z" fill="white" />
    </svg>
  )
}