import styled from "styled-components";
import { RadioButton } from "../../atoms/radio-button";
import { ComponentProps } from "react";
import { Typography } from "../../atoms";

export type TRadioItem = {
  buttonProps: ComponentProps<typeof RadioButton>
  title: string,
  message: string,
  alarm?: string,
  isAlarm?: boolean,
}

export const RadioItem = ({ title, message, isAlarm, alarm, buttonProps }: TRadioItem) => {
  return (
    <RadioItemWrapper>
      <RadioButtonWrapper>
        <RadioButton {...buttonProps} />
      </RadioButtonWrapper>
      <ContentWrapper>
        <Title>
          <Typography variant="subheadline" type="medium">
            {title}
          </Typography>
        </Title>
        <Message>
          <Typography variant="footnote" type="light">
            {message}
          </Typography>
        </Message>
        {isAlarm &&
          <Alarm>
            <Typography variant="caption1" type="medium" color="#ff3b30">
              {alarm}
            </Typography>
          </Alarm>
        }
      </ContentWrapper>
    </RadioItemWrapper>
  );
};


const RadioItemWrapper = styled.div`
  display: flex;
  gap: 8px;
`
const RadioButtonWrapper = styled.div`

`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.p`
  
`
const Message = styled.p`

`
const Alarm = styled.p`

`






