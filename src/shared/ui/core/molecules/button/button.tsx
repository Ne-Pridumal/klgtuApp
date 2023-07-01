import styled, { useTheme } from "styled-components";
import { Typography } from "../../atoms";
import { TypographyVariants } from "@shared/ui/theme";
import { ReactNode } from "react";

export type TButton = {
  text: string,
  onClick?: () => void,
  type?: 'large' | 'medium' | 'small',
  variant?: 'filled' | 'outlined' | 'text',
  isDisable?: boolean,
  icon?: ReactNode,
}


export const Button = ({
  text,
  isDisable = false,
  variant = 'filled',
  type = 'medium',
  icon,
  onClick
}: TButton) => {
  const { palette } = useTheme()
  const textColor: Record<typeof variant, string> = {
    text: palette.accent.primary_500,
    filled: palette.content.cnt_const_white,
    outlined: palette.accent.primary_500,
  }
  const textType: Record<typeof type, TypographyVariants> = {
    large: 'subheadline',
    medium: 'footnote',
    small: 'caption2',
  }
  return (
    <ButtonWrapper
      onClick={onClick}
      isDisable={isDisable}
      variant={variant}
      disabled={isDisable}
    >
      {icon}
      <Text
        type='medium'
        variant={textType[type]}
        color={isDisable ? palette.content.cnt_050 : textColor[variant]}
      >
        {text}
      </Text>
    </ButtonWrapper>
  );
};


type TButtonWrapper = Required<Pick<TButton, 'isDisable' | 'variant'>>

const ButtonWrapper = styled.button<TButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: ${({ variant }) => variant !== 'text' ? `10px 16px` : `0px`};
  border-radius: 6px;
  background: ${({ theme: { palette }, isDisable, variant }): string => {
    let color = isDisable ? palette.background.bg_150 : palette.accent.primary_500
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    return color
  }};
  border: ${({ theme: { palette }, variant, isDisable }) => variant === 'outlined' ?
    isDisable ? `1px solid ${palette.background.bg_150}` : `1px solid ${palette.accent.primary_500}`
    :
    'none'
  };
  cursor: pointer;
  &:active {
    box-shadow: ${({ theme: { palette }, isDisable, variant }) => !isDisable && variant !== 'text' && `0px 0px 0px 2px ${palette.accent.primary_500_op12}`};
  }
  &:hover {
    background: ${({ theme: { palette }, isDisable, variant }): string => {
    let color = isDisable ? palette.content.cnt_050 : palette.accent.primary_550
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    return color
  }};
  }
`


// TODO: add color variation
const Text = styled(Typography)`
  ${ButtonWrapper}:active & {
  }
`
