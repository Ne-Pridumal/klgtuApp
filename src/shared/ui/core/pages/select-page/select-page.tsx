import styled from "styled-components";
import { Typography } from "../../atoms";
import { SelectPageTemplate } from "../../templates";
import { Button, TextInput } from "../../molecules";
import { SearchList } from "../../organisms";
import { ComponentProps } from "react";

export type TSelectPage = TSearchComponent & {
  searchListProps: Omit<ComponentProps<typeof SearchList>, 'width' | 'height'> & {
    show: boolean,
  }
}

export const SelectPage = ({ buttonProps, inputProps, searchListProps }: TSelectPage) => {
  return (
    <SelectPageTemplate
      showVariants={true}
      titleComponent={
        <Typography variant="title1" type="bold">
          Выбор расписания
        </Typography>
      }
      subtitleComponent={
        <Typography variant="callout" type="light">
          Можно выбрать расписание учебной группы, преподавателя или аудитории
        </Typography>
      }
      searchComponent={
        <SearchComponent
          inputProps={inputProps}
          buttonProps={buttonProps}
        />
      }
      variantsListComponent={
        searchListProps.show ? <SearchList
          isBackward={searchListProps.isBackward}
          onBackward={searchListProps.onBackward}
          items={searchListProps.items}
          isLoading={searchListProps.isLoading}
          width={480}
          height={255}
        />
          :
          <></>
      }
    />
  );
};

type TSearchComponent = {
  buttonProps: TButtonProps,
  inputProps: TInputProps,
}
type TButtonProps = Required<Pick<ComponentProps<typeof Button>, 'onClick' | 'isDisable'>>
type TInputProps = Required<Pick<ComponentProps<typeof TextInput>, 'placeholder' | 'value' | 'onChange' | 'disabled'>>

const SearchComponent = ({ buttonProps, inputProps }: TSearchComponent) => {
  return (
    <Wrapper>
      <TextInput
        icon="search"
        width={480}
        {...inputProps}
      />
      <Button
        text="Показать"
        {...buttonProps}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`
