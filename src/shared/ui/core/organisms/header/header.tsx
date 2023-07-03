import { ReactNode } from "react";
import styled from "styled-components";
import { IconKLGTUApp } from "../../atoms/icons";
import { Button } from "../../molecules/button";
import { IconButton } from "../../molecules/icon-button";

export type THeader = {
  type: "logo" | "timetable",
  onDownload: () => void,
  onSwitchTheme: () => void,
  onChoiceTimetable?: () => void,
  logoAction?: () => void,
  actionComponent?: ReactNode
}

export const Header = ({ logoAction, actionComponent, onChoiceTimetable, onSwitchTheme, onDownload, type }: THeader) => {
  return (
    <Wrapper>
      {type === 'logo' ?
        <LogoWrapper onClick={logoAction}>
          <IconKLGTUApp
            height={32}
            width={141}
          />
        </LogoWrapper>
        :
        <Button
          text="Выбор расписания"
          variant="text"
          onClick={onChoiceTimetable}
          size="large"
          icon={'chevronLeft'}
        />
      }
      {actionComponent &&
        <ContentWrapper>
          {actionComponent}
        </ContentWrapper>
      }
      <ActivitiesWrapper>
        <IconButton
          onClick={onSwitchTheme}
          variant="transparent"
          icon={'sun'}
          form="ellipse"
        />
        <Button
          text="Скачать приложение"
          size="medium"
          variant="outlined"
          onClick={onDownload}
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
const ContentWrapper = styled.div`

`
const ActivitiesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
