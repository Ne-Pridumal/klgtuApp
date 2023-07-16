import { TTimetableIconProps } from "../types";

export const IconHoliday = ({ size = 48 }: TTimetableIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} rx="24" fill="#EB5757" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.733 19.0954C17.5514 18.7142 17.4545 18.2939 17.4545 17.8636C17.4545 17.1042 17.7563 16.3758 18.2933 15.8387C18.8303 15.3017 19.5587 15 20.3182 15C22.205 15 23.3395 16.3595 23.9499 17.4693C23.9669 17.5003 23.9836 17.5312 24 17.5621C24.0164 17.5312 24.0331 17.5003 24.0501 17.4693C24.6605 16.3595 25.795 15 27.6818 15C28.4413 15 29.1697 15.3017 29.7067 15.8387C30.2438 16.3758 30.5455 17.1042 30.5455 17.8636C30.5455 18.2939 30.4486 18.7142 30.267 19.0954C30.4252 19.0988 30.5713 19.105 30.705 19.1159C31.0285 19.1424 31.3502 19.2007 31.6598 19.3584C32.1216 19.5938 32.4971 19.9693 32.7325 20.4311C32.8902 20.7407 32.9486 21.0624 32.975 21.3859C33 21.6924 33 22.0644 33 22.4957V24.8182H24.8184V19.0909H27.6818C28.0073 19.0909 28.3195 18.9616 28.5496 18.7314C28.7798 18.5013 28.9091 18.1891 28.9091 17.8636C28.9091 17.5381 28.7798 17.226 28.5496 16.9958C28.3195 16.7657 28.0073 16.6364 27.6818 16.6364C26.705 16.6364 25.6623 17.3223 25.1477 18.2579C25.0377 18.4579 24.9688 18.6594 24.9028 18.8523C24.875 18.9336 24.848 19.0134 24.8184 19.0909L23.182 19.0909V24.8182H15.0001V26.4545H23.182V33H24.8184V26.4545H33V29.5952C33 30.0265 33 30.3986 32.975 30.705C32.9486 31.0285 32.8902 31.3502 32.7325 31.6598C32.4971 32.1216 32.1216 32.4971 31.6598 32.7325C31.3502 32.8902 31.0285 32.9486 30.705 32.975C30.3986 33 30.0265 33 29.5952 33H24L23.9988 33H18.4048C17.9735 33 17.6014 33 17.295 32.975C16.9715 32.9486 16.6498 32.8902 16.3402 32.7325C15.8784 32.4971 15.5029 32.1216 15.2675 31.6598C15.1098 31.3502 15.0514 31.0285 15.025 30.705C15 30.3986 15 30.0265 15 29.5952V22.4957C15 22.0644 15 21.6923 15.025 21.3859C15.0514 21.0624 15.1098 20.7407 15.2675 20.4311C15.5029 19.9693 15.8784 19.5938 16.3402 19.3584C16.6498 19.2007 16.9715 19.1423 17.295 19.1159C17.4287 19.105 17.5749 19.0988 17.733 19.0954ZM20.3182 16.6364C19.9927 16.6364 19.6805 16.7657 19.4504 16.9958C19.2202 17.226 19.0909 17.5381 19.0909 17.8636C19.0909 18.1891 19.2202 18.5013 19.4504 18.7314C19.6805 18.9616 19.9927 19.0909 20.3182 19.0909L23.182 19.0909C23.1517 19.0115 23.1237 18.9298 23.0955 18.8465C23.0309 18.6554 22.9633 18.4559 22.8545 18.2579C22.3398 17.3223 21.295 16.6364 20.3182 16.6364Z" fill="white" />
    </svg>
  )
}