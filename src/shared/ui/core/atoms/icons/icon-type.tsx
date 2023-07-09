import { TBaseIconProps } from "./types";

export const IconType = ({ color, size }: TBaseIconProps) => {
  return (
    <svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.87848 3H17.1215C17.5722 2.99999 17.9527 2.99998 18.266 3.02136C18.5935 3.0437 18.9091 3.0922 19.2172 3.21983C19.9249 3.51294 20.4871 4.07515 20.7802 4.78278C20.9078 5.0909 20.9563 5.40654 20.9786 5.73397C21 6.04724 21 6.42774 21 6.87838V6.90662C21 7.37639 20.6192 7.75722 20.1494 7.75722C19.6796 7.75722 19.2988 7.37639 19.2988 6.90662C19.2988 6.42034 19.2984 6.09823 19.2814 5.84977C19.265 5.60896 19.2359 5.50008 19.2085 5.43379C19.088 5.14301 18.857 4.91197 18.5662 4.79153C18.4999 4.76407 18.391 4.73503 18.1502 4.7186C17.9018 4.70165 17.5797 4.70119 17.0934 4.70119H12.8506V19.2988H15.056C15.5258 19.2988 15.9066 19.6796 15.9066 20.1494C15.9066 20.6192 15.5258 21 15.056 21H8.94397C8.4742 21 8.09338 20.6192 8.09338 20.1494C8.09338 19.6796 8.4742 19.2988 8.94397 19.2988H11.1494V4.70119H6.90662C6.42034 4.70119 6.09823 4.70165 5.84977 4.7186C5.60896 4.73503 5.50008 4.76407 5.43379 4.79153C5.143 4.91197 4.91197 5.143 4.79153 5.43379C4.76407 5.50008 4.73503 5.60896 4.7186 5.84977C4.70165 6.09823 4.70119 6.42034 4.70119 6.90662C4.70119 7.37639 4.32037 7.75722 3.85059 7.75722C3.38082 7.75722 3 7.37639 3 6.90662L3 6.87848C2.99999 6.4278 2.99998 6.04726 3.02136 5.73397C3.0437 5.40654 3.0922 5.0909 3.21983 4.78278C3.51294 4.07515 4.07515 3.51294 4.78278 3.21983C5.0909 3.0922 5.40654 3.0437 5.73397 3.02136C6.04726 2.99998 6.4278 2.99999 6.87848 3Z" fill={color ?? "black"} />
    </svg>
  )
}
