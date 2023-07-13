import LayoutContext from '@app/navigation-provider/ui/layout-context';
import { useGetTimetable } from '@features/timetable';
import { TSearchItem } from '@shared/ui/core/organisms';
import { SelectPage as SelectPageConstructor } from '@shared/ui/core/pages'
import { useContext, useEffect, useState } from 'react';
export type TSelectPage = {

}

export const SelectPage = ({ }: TSelectPage) => {
  const { setFooterVisibility } = useContext(LayoutContext)
  const { mutate: getTimetable, data, isLoading, isError } = useGetTimetable()
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [sublist, setSublist] = useState<TSearchItem[]>([])
  const [isBackward, setIsBackward] = useState(false)
  const [pickedId, setPickedId] = useState(-12)
  const searchList: TSearchItem[] = data?.map(item => ({
    id: item.content.id,
    value: item.name,
    isIcon: item.content.subGroups ? item.content.subGroups?.length > 0 : false,
    onClick() {
      if (item.content.subGroups ? item.content.subGroups?.length > 0 : false) {
        setIsBackward(true)
        setSublist(item.content!.subGroups!.map(item => ({
          id: item.id,
          isIcon: false,
          isPicked: item.id === pickedId,
          onClick() {
            setInputValue(item.name)
            setSublist([])
            setPickedId(item.id)
            setIsBackward(false)
            setShowSearch(false)
          },
          value: item.name,
        })))
      } else {
        setInputValue(item.name)
        setSublist([])
        setPickedId(item.content.id)
        setShowSearch(false)
      }
    },
    isPicked: item.content.id === pickedId
  })) ?? []
  const onBackward = () => {
    setSublist([])
    setIsBackward(false)
  }
  useEffect(() => {
    setFooterVisibility?.(false)
  }, [])
  useEffect(() => {
    const typeDelay = setTimeout(() => {
      if (inputValue !== '') {
        getTimetable(inputValue)
      }
    }, 500)
    return () => clearTimeout(typeDelay)
  }, [inputValue])
  return (
    <SelectPageConstructor
      inputProps={{
        disabled: false,
        value: inputValue,
        onChange: (e) => {
          setInputValue(e)
          if (e !== '') {
            setShowSearch(true)
          } else {
            setShowSearch(false)
          }
        },
        placeholder: 'Группа, преподаватель, аудитория',
      }}
      searchListProps={{
        show: showSearch,
        onBackward: onBackward,
        isBackward: isBackward,
        items: sublist.length > 0 ? sublist : searchList.filter(i => i.value.includes(inputValue)),
        isLoading,
      }}
      buttonProps={{
        onClick() {

        },
        isDisable: pickedId > 0,
      }}
    />
  );
};
