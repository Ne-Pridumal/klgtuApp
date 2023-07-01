import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";
import { IconChevron, IconKLGTUApp, IconSun } from "../../atoms/icons";
import { Button } from "../../molecules/button";
import { IconButton } from "../../molecules/icon-button";

export type THeader = {
  type: "logo" | "timetable",
  onDownload: () => void,
  onSwitchTheme: () => void,
  onChoiceTimetable?: () => void,
  actionComponent?: ReactNode
}

export const Header = ({ actionComponent, onChoiceTimetable, onSwitchTheme, onDownload, type }: THeader) => {
  const { palette } = useTheme()
  return (
    <Wrapper>
      {type === 'logo' ?
        <LogoWrapper>
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
          type="large"
          icon={<IconChevron
            size={16}
            color={palette.accent.primary_500}
            direction="left"
          />}
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
          icon={<IconSun />}
        />
        <Button
          text="Скачать приложение"
          type="medium"
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
`
const ContentWrapper = styled.div`

`
const ActivitiesWrapper = styled.div`
  display: flex;
  algin-items: center;
  gap: 16px;
`
