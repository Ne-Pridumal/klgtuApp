import { ReactNode } from "react";
import styled from "styled-components";

export type TIconButton = {
  onClick?: () => void,
  variant?: 'filled' | 'transparent',
  state?: 'disabled' | 'enabled',
  icon?: ReactNode,
}

export const IconButton = ({
  onClick,
  icon,
  state = 'enabled',
  variant = 'filled'
}: TIconButton) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      state={state}
      variant={variant}
    >
      {icon}
    </ButtonWrapper>
  );
};

type TButtonWrapper = Required<Pick<TIconButton, 'variant' | 'state'>>

const ButtonWrapper = styled.button<TButtonWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ theme: { palette }, variant, state }) => variant === 'transparent' ?
    'transparent'
    :
    state === 'disabled' ? palette.background.bg_150 : palette.accent.primary_500
  };
  &:hover {
    background: ${({ theme: { palette }, variant, state }) => variant === 'transparent' ?
    'transparent'
    :
    state === 'disabled' ? palette.background.bg_150 : palette.accent.primary_550
  };
  }
`

