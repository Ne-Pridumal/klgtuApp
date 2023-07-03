import styled, { useTheme } from "styled-components";
import { ListItem } from "../../molecules/list-item";
import { InfinityCircleProgress, Typography } from "../../atoms";

export type TSearchList = {
  items: string[],
  isLoading: boolean,
  onClick: () => void,
  width?: number,
  height?: number,
}

export const SearchList = ({ onClick, items, width = 480, height = 256, isLoading }: TSearchList) => {
  const { palette } = useTheme()

  if (isLoading)
    return (
      <Wrapper width={width} height={height}>
        <ContentWrapper>
          <AlarmWrapper>
            <InfinityCircleProgress />
          </AlarmWrapper>
        </ContentWrapper>
      </Wrapper>
    )


  if (items.length === 0)
    return (
      <Wrapper width={width} height={height}>
        <ContentWrapper>
          <AlarmWrapper>
            <Typography
              type="bold"
              variant="title2"
            >
              Ничего не найдено
            </Typography>
            <Typography
              type="light"
              variant="subheadline"
            >
              Проверьте, нет ли ошибок в написанном запросе.
            </Typography>
          </AlarmWrapper>
        </ContentWrapper>
      </Wrapper>
    )

  return (
    <Wrapper width={width} height={height}>
      <TitleWrapper>
        <Typography
          type="light"
          variant="caption1"
          color={palette.content.cnt_050}
        >
          Результаты поиска
        </Typography>
      </TitleWrapper>
      <ContentWrapper>
        {items.length > 0 && items.map((item) => (
          <ListItem
            type="default"
            onClick={onClick}
            text={item}
          />
        ))}
        {items.length === 0 && (
          <AlarmWrapper>
            <Typography
              type="bold"
              variant="title2"
            >
              Ничего не найдено
            </Typography>
            <Typography
              type="light"
              variant="subheadline"
            >
              Проверьте, нет ли ошибок в написанном запросе.
            </Typography>
          </AlarmWrapper>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

type TWrapper = Required<Pick<TSearchList, 'height' | 'width'>>

const Wrapper = styled.div<TWrapper>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme: { palette } }) => palette.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
  border-radius: 16px;
  padding: 0px 0px 16px 0px;
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 16px 16px 8px 16px;
  & ${Typography} {
    text-transform: uppercase;
  }
`
const ContentWrapper = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  scrollbar-color: ${({ theme: { palette } }) => `${palette.content.cnt_150} ${palette.background.bg_000}`};
  scrollbar-width: 10px;
`
const AlarmWrapper = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
