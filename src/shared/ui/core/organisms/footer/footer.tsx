import styled, { useTheme } from "styled-components";
import { IconKLGTUApp, IconSlantedArrow, IconStraightArrow } from "../../atoms/icons";
import { IconButton } from "../../molecules/icon-button";
import { Typography } from "../../atoms";

export type TFooter = {
  upAction: () => void,
  textAction: () => void,
  logoAction: () => void,
}

export const Footer = ({ upAction, textAction, logoAction }: TFooter) => {
  const { palette } = useTheme()
  return (
    <Wrapper>
      <LogoWrapper onClick={logoAction}>
        <IconKLGTUApp
          height={32}
          width={141}
        />
      </LogoWrapper>
      <ActivitiesWrapper>
        <TextWrapper
          onClick={textAction}
        >
          <Typography
            variant="subheadline"
            type="medium"
          >
            Телеграм-канал с новостями
          </Typography>
          <IconSlantedArrow
            color={palette.accent.primary_500}
            direction="up"
            size={20}
          />
        </TextWrapper>
        <IconButton
          icon={<IconStraightArrow
            color={palette.content.cnt_const_white}
            direction="up"
          />}
          onClick={upAction}
          variant="filled"
        />
      </ActivitiesWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0, .1);
`
const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`
const ActivitiesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
