import styled from "styled-components";
import { IconPlus } from "../../atoms/icons";
import { Typography } from "../../atoms";
import { TypographyVariants } from "@shared/ui/theme";

export type TButton = {
  text: string,
  onClick?: () => void,
  type?: 'large' | 'medium' | 'small',
  variant?: 'filled' | 'outlined' | 'text',
  state?: 'disabled' | 'enabled',
  darkMode?: boolean,
  icon?: 'plus',
}


export const Button = ({
  text,
  state = 'enabled',
  variant = 'filled',
  darkMode = false,
  type = 'medium',
  icon,
  onClick
}: TButton) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      state={state}
      variant={variant}
      darkMode={darkMode}
    >
      {icon && icons[icon]}
      <Typography
        type='medium'
        variant={textType[type]}
      >
        {text}
      </Typography>
    </ButtonWrapper>
  );
};

const icons = {
  plus: <IconPlus size={20} />
}

const textType: {
  large: TypographyVariants,
  medium: TypographyVariants,
  small: TypographyVariants
} = {
  large: 'subheadline',
  medium: 'footnote',
  small: 'caption2',
}

type TButtonWrapper = Required<Pick<TButton, 'state' | 'darkMode' | 'variant'>>

//TODO: add theme support
const ButtonWrapper = styled.button.attrs(() => ({

})) <TButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 6px;
  background: ${({ state, darkMode, variant }): string => {
    let color = '#0193de'
    if (variant === 'outlined' || variant === 'text') {
      color = 'transparent'
    }
    if (darkMode) {
      color = '#000000'
    }
    return color
  }};
`

