import styled from "styled-components";
import { Typography } from "../../atoms";
import { SelectPageTemplate } from "../../templates";
import { Button, TextInput } from "../../molecules";
import { SearchList } from "../../organisms";

export type TSelectPage = TSearchComponent & {

}

export const SelectPage = ({ buttonProps, inputProps }: TSelectPage) => {
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
        <SearchList
          items={[
            'asdfasd',
            'asdfasdf',
            'asdfasdf',
            'asdfasdf',
            'asdfasdfas',
            'asdfasdf'
          ]}
          isLoading={false}
          onClick={() => { }}
          width={480}
          height={255}
        />
      }
    />
  );
};

type TSearchComponent = {
  buttonProps: TButtonProps,
  inputProps: TInputProps,
}
type TButtonProps = {
  onClick: () => void,
  isDisable: boolean,
}
type TInputProps = {
  onChange: () => void,
  value: string,
  placeholder: string,
  width?: number,
}
const SearchComponent = ({ buttonProps, inputProps }: TSearchComponent) => {
  return (
    <Wrapper>
      <TextInput
        icon="search"
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
