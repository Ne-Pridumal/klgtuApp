import styled, { useTheme } from "styled-components";
import { IconSearch } from "../../atoms/icons";
import { ChangeEvent, useRef, useState } from "react";

export type TTextInput = {
  value?: string,
  placeholder?: string,
  showIcon?: boolean,
  onChange: (e: string) => void,
  disabled?: boolean
}

export const TextInput = ({
  value = '',
  placeholder,
  showIcon = false,
  onChange,
  disabled = false,
}: TTextInput) => {
  const { palette } = useTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const [focus, setFocus] = useState(false)
  const event = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    if (disabled)
      return
    onChange(e.target.value)
  }
  const onFocus = () => {
    if (disabled) {
      return
    }
    setFocus(true)
  }
  const onBlur = () => {
    if (disabled) {
      return
    }
    setFocus(false)
  }
  const wrapperClick = () => {
    if (disabled) {
      return
    }
    inputRef.current?.focus()
  }
  return (
    <Wrapper
      onClick={wrapperClick}
      isActive={focus}
      isDisable={disabled}
    >
      {showIcon &&
        <IconSearch
          size={16}
          color={disabled ?
            palette.background.bg_250
            :
            value.length > 0 ? palette.content.cnt_000 : palette.content.cnt_100}
        />
      }
      <CustomInput
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={event}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
      />
    </Wrapper>
  );
};


type TWrapper = {
  isActive: boolean,
  isDisable: boolean
}

const Wrapper = styled.div<TWrapper>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 11px 16px;
  border: 1.5px solid ${({ theme: { palette }, isActive, isDisable }) => {
    let color = isActive ?
      palette.accent.primary_500
      :
      palette.content.cnt_100
    if (isDisable) {
      color = palette.background.bg_250
    }
    return color
  }};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px ${({ theme: { palette }, isActive }) => isActive ? palette.accent.primary_500_op12 : 'none'}
`

const CustomInput = styled.input`
  width: 100%;
  height: auto;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  caret-color: ${({ theme: { palette } }) => palette.accent.primary_500};
  ${({ theme: { typography } }) => typography.footnote};
  font-size: ${({ theme: { typography } }) => typography.footnote.size};
  &::placeholder {
    color: ${({ theme: { palette } }) => palette.content.cnt_100};
  }
`
