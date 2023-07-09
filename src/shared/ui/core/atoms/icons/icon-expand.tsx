import { TBaseIconProps } from "./types";

export const IconExpand = ({ size, color }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 4C14.4477 4 14 3.55228 14 3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55228 21.5523 10 21 10C20.4477 10 20 9.55228 20 9V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H15ZM10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L5.41421 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21L2 15C2 14.4477 2.44772 14 3 14C3.55229 14 4 14.4477 4 15L4 18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929Z" fill={color ?? "black"} />
    </svg>
  )
}
