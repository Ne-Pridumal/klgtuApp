import { TBaseIconProps } from "./types";

export const IconStarAlt = ({ size, color }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18C11.366 18 10.8606 17.4659 10.8902 16.8273L11.0397 13.6042L8.16005 15.4024C7.64334 15.7251 6.96467 15.558 6.65354 15.0315C6.32846 14.4814 6.53805 13.7686 7.10795 13.4861L10.1061 12L7.10795 10.5139C6.53805 10.2314 6.32846 9.51863 6.65354 8.96853C6.96467 8.44204 7.64334 8.27495 8.16005 8.59762L11.0397 10.3958L10.8902 7.17275C10.8606 6.53412 11.366 6 12 6C12.634 6 13.1394 6.53411 13.1098 7.17275L12.9603 10.3958L15.8399 8.59762C16.3567 8.27495 17.0353 8.44204 17.3465 8.96853C17.6715 9.51863 17.4619 10.2314 16.892 10.5139L13.8939 12L16.892 13.4861C17.4619 13.7686 17.6715 14.4814 17.3465 15.0315C17.0353 15.558 16.3567 15.7251 15.8399 15.4024L12.9603 13.6042L13.1098 16.8273C13.1394 17.4659 12.634 18 12 18Z" fill={color ?? "black"} />
    </svg>
  )
}
