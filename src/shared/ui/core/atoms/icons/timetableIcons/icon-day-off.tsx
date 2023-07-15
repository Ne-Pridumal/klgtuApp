import { TTimetableIconProps } from "../types";

export const IconDayOff = ({ size = 48 }: TTimetableIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} rx="24" fill="#F2994A" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 16C24.5523 16 25 16.4477 25 17V19C25 19.5523 24.5523 20 24 20C23.4477 20 23 19.5523 23 19V17C23 16.4477 23.4477 16 24 16ZM16.1928 19.1928C16.5833 18.8023 17.2165 18.8023 17.607 19.1928L19.0212 20.607C19.4117 20.9975 19.4117 21.6307 19.0212 22.0212C18.6307 22.4117 17.9975 22.4117 17.607 22.0212L16.1928 20.607C15.8023 20.2165 15.8023 19.5833 16.1928 19.1928ZM31.8069 19.1928C32.1974 19.5833 32.1974 20.2165 31.8069 20.607L30.3927 22.0212C30.0021 22.4117 29.369 22.4117 28.9784 22.0212C28.5879 21.6307 28.5879 20.9975 28.9784 20.607L30.3927 19.1928C30.7832 18.8023 31.4163 18.8023 31.8069 19.1928ZM13 27C13 26.4477 13.4477 26 14 26H16C16.5523 26 17 26.4477 17 27C17 27.5523 16.5523 28 16 28H14C13.4477 28 13 27.5523 13 27ZM31 27C31 26.4477 31.4477 26 32 26H34C34.5523 26 35 26.4477 35 27C35 27.5523 34.5523 28 34 28H32C31.4477 28 31 27.5523 31 27Z" fill="white" />
      <path d="M24 22.1667C21.2386 22.1667 19 24.4052 19 27.1667C19 27.6269 19.3731 28 19.8333 28H28.1667C28.6269 28 29 27.6269 29 27.1667C29 24.4052 26.7614 22.1667 24 22.1667Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 31C13 30.4477 13.4477 30 14 30H34C34.5523 30 35 30.4477 35 31C35 31.5523 34.5523 32 34 32H14C13.4477 32 13 31.5523 13 31Z" fill="white" />
    </svg>
  )
}
