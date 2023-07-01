import styled from "styled-components";
import { Typography } from "../../atoms";
import { IconInfoCircle, IconXClose } from "../../atoms/icons";

export type TNotificationItem = {
  isPicked?: boolean,
  text: string,
  onClose: () => void
}

export const NotificationItem = ({ text, isPicked }: TNotificationItem) => {
  return (
    <Wrapper>
      {isPicked &&
        <Redline />
      }
      <IconInfoCircle
      />
      <Typography>
        {text}
      </Typography>
      <XCloseWrapper>
        <IconXClose
        />
      </XCloseWrapper>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  position: relative;
  padding: 24px;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  box-shadow: ${({ theme: { palette } }) => `0px 5px 16px 0px rgba(0,0,0, .1)`};
`
const XCloseWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
`
const Redline = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  height: 0px;
  border: 2px solid ${({ theme: { palette } }) => palette.system.error_500};
  border-radius: 0px 0px 2px 2px;
`
