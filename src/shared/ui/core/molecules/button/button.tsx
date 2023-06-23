import styled, { useTheme } from "styled-components";
import { Typography } from "../../atoms";
import { TypographyVariants } from "@shared/ui/theme";
import { ReactNode } from "react";

export type TButton = {
  text: string,
  onClick?: () => void,
  type?: 'large' | 'medium' | 'small',
  variant?: 'filled' | 'outlined' | 'text',
  state?: 'disabled' | 'enabled',
  icon?: ReactNode,
}


export const Button = ({
  text,
  state = 'enabled',
  variant = 'filled',
  type = 'medium',
  icon,
  onClick
}: TButton) => {
  const { palette } = useTheme()
  const textColor = variant === 'filled' ? palette.content.cnt_const_white :
    state === 'disabled' ? palette.content.cnt_050 : palette.accent.primary_500
  return (
    <ButtonWrapper
      onClick={onClick}
      state={state}
      variant={variant}
    >
      {icon}
      <Typography
        type='medium'
        variant={textType[type]}
        color={textColor}
      >
        {text}
      </Typography>
    </ButtonWrapper>
  );
};

const textType: {
  large: TypographyVariants,
  medium: TypographyVariants,
  small: TypographyVariants
} = {
  large: 'subheadline',
  medium: 'footnote',
  small: 'caption2',
}

type TButtonWrapper = Required<Pick<TButton, 'state' | 'variant'>>

//TODO: change box-shadow color 
const ButtonWrapper = styled.button<TButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  background: ${({ theme: { palette }, state, variant }): string => {
    let color = state === 'disabled' ? palette.content.cnt_050 : palette.accent.primary_500
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    return color
  }};
  border: ${({ theme: { palette }, variant, state }) => variant === 'outlined' ?
    state === 'disabled' ? `1px solid ${palette.content.cnt_050}` : `1px solid ${palette.accent.primary_500}`
    :
    'none'
  };
  cursor: pointer;
  &:active {
    box-shadow: ${({ theme: { palette }, state }) => state === 'enabled' && `0px 0px 0px 2px ${palette.accent.primary_500_op12}`};
  }
  &:hover {
    background: ${({ theme: { palette }, state, variant }): string => {
    let color = state === 'disabled' ? palette.content.cnt_050 : palette.accent.primary_550
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    return color
  }};
  }
`
