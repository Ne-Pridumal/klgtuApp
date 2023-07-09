import { TBaseIconProps } from "./types";

export const IconCopy = ({ size, color }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.2423 2H18.1577C18.6295 1.99998 19.0424 1.99996 19.3837 2.02785C19.7457 2.05742 20.1142 2.12329 20.4712 2.30518C20.998 2.57363 21.4264 3.00198 21.6948 3.52883C21.8767 3.88582 21.9426 4.25434 21.9722 4.61633C22 4.95761 22 5.37052 22 5.84237V12.7576C22 13.2295 22 13.6424 21.9722 13.9837C21.9426 14.3457 21.8767 14.7142 21.6948 15.0712C21.4264 15.598 20.998 16.0264 20.4712 16.2948C20.1142 16.4767 19.7457 16.5426 19.3837 16.5722C19.0424 16.6 18.6295 16.6 18.1577 16.6L16.6 16.6L16.6 18.1577C16.6 18.6295 16.6 19.0424 16.5722 19.3837C16.5426 19.7457 16.4767 20.1142 16.2948 20.4712C16.0264 20.998 15.598 21.4264 15.0712 21.6948C14.7142 21.8767 14.3457 21.9426 13.9837 21.9722C13.6424 22 13.2295 22 12.7576 22H5.84237C5.37052 22 4.95761 22 4.61633 21.9722C4.25434 21.9426 3.88582 21.8767 3.52883 21.6948C3.00198 21.4264 2.57363 20.998 2.30518 20.4712C2.12329 20.1142 2.05742 19.7457 2.02785 19.3837C1.99996 19.0424 1.99998 18.6295 2 18.1577V11.2423C1.99998 10.7705 1.99996 10.3576 2.02785 10.0163C2.05742 9.65434 2.12329 9.28582 2.30518 8.92883C2.57363 8.40197 3.00197 7.97363 3.52883 7.70518C3.88582 7.52329 4.25434 7.45742 4.61633 7.42785C4.9576 7.39996 5.3705 7.39998 5.84233 7.4L7.4 7.4L7.4 5.84233C7.39998 5.3705 7.39996 4.9576 7.42785 4.61633C7.45742 4.25434 7.52329 3.88582 7.70518 3.52883C7.97363 3.00197 8.40197 2.57363 8.92883 2.30518C9.28582 2.12329 9.65434 2.05742 10.0163 2.02785C10.3576 1.99996 10.7705 1.99998 11.2423 2ZM5.88 9.4C5.35945 9.4 5.02918 9.40078 4.7792 9.4212C4.54088 9.44068 4.46486 9.4729 4.43681 9.4872C4.28628 9.5639 4.1639 9.68628 4.0872 9.83681C4.0729 9.86486 4.04068 9.94088 4.0212 10.1792C4.00078 10.4292 4 10.7595 4 11.28V18.12C4 18.6405 4.00078 18.9708 4.0212 19.2208C4.04068 19.4591 4.0729 19.5351 4.0872 19.5632C4.16389 19.7137 4.28628 19.8361 4.43681 19.9128C4.46486 19.9271 4.54088 19.9593 4.7792 19.9788C5.02918 19.9992 5.35945 20 5.88 20H12.72C13.2406 20 13.5708 19.9992 13.8208 19.9788C14.0591 19.9593 14.1351 19.9271 14.1632 19.9128C14.3137 19.8361 14.4361 19.7137 14.5128 19.5632C14.5271 19.5351 14.5593 19.4591 14.5788 19.2208C14.5992 18.9708 14.6 18.6405 14.6 18.12V11.28C14.6 10.7595 14.5992 10.4292 14.5788 10.1792C14.5593 9.94088 14.5271 9.86486 14.5128 9.83681C14.4361 9.68628 14.3137 9.5639 14.1632 9.4872C14.1351 9.4729 14.0591 9.44068 13.8208 9.4212C13.5708 9.40078 13.2406 9.4 12.72 9.4H5.88ZM16.6 14.6L16.6 11.2423C16.6 10.7705 16.6 10.3576 16.5722 10.0163C16.5426 9.65434 16.4767 9.28582 16.2948 8.92883C16.0264 8.40197 15.598 7.97363 15.0712 7.70518C14.7142 7.52329 14.3457 7.45742 13.9837 7.42785C13.6424 7.39996 13.2295 7.39998 12.7577 7.4L9.4 7.4V5.88C9.4 5.35945 9.40078 5.02918 9.4212 4.7792C9.44068 4.54088 9.4729 4.46486 9.4872 4.43681C9.5639 4.28628 9.68628 4.1639 9.83681 4.0872C9.86486 4.0729 9.94088 4.04068 10.1792 4.0212C10.4292 4.00078 10.7595 4 11.28 4H18.12C18.6405 4 18.9708 4.00078 19.2208 4.0212C19.4591 4.04068 19.5351 4.0729 19.5632 4.0872C19.7137 4.1639 19.8361 4.28628 19.9128 4.43681C19.9271 4.46486 19.9593 4.54088 19.9788 4.7792C19.9992 5.02918 20 5.35945 20 5.88V12.72C20 13.2406 19.9992 13.5708 19.9788 13.8208C19.9593 14.0591 19.9271 14.1351 19.9128 14.1632C19.8361 14.3137 19.7137 14.4361 19.5632 14.5128C19.5351 14.5271 19.4591 14.5593 19.2208 14.5788C18.9708 14.5992 18.6405 14.6 18.12 14.6H16.6Z" fill={color ?? "black"} />
    </svg>
  )
}
