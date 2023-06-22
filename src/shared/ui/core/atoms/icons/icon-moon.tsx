import { TBaseIconProps } from "./types";

export const IconMoon = ({ size, color }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08248 2.24869C9.33231 2.49852 9.40131 2.87695 9.25572 3.19887C8.76091 4.29301 8.48503 5.50811 8.48503 6.78993C8.48503 11.6086 12.3914 15.515 17.2101 15.515C18.4919 15.515 19.707 15.2391 20.8011 14.7443C21.123 14.5987 21.5015 14.6677 21.7513 14.9175C22.0011 15.1673 22.0701 15.5458 21.9245 15.8677C20.2899 19.4822 16.6514 22 12.423 22C6.66656 22 2 17.3334 2 11.577C2 7.34858 4.51777 3.71008 8.1323 2.07545C8.45422 1.92987 8.83265 1.99887 9.08248 2.24869ZM6.98626 4.75229C4.98148 6.35152 3.69802 8.8149 3.69802 11.577C3.69802 16.3957 7.60434 20.302 12.423 20.302C15.1851 20.302 17.6485 19.0185 19.2477 17.0137C18.5884 17.1445 17.907 17.213 17.2101 17.213C11.4536 17.213 6.78702 12.5464 6.78702 6.78993C6.78702 6.09301 6.85553 5.41161 6.98626 4.75229Z" fill={color ?? "black"} />
    </svg>
  )
}