import { ReactNode } from "react";
import { IconCalendar, IconCheck, IconChevron, IconCopy, IconExpand, IconEye, IconGlobe, IconHidden, IconHome, IconHomeAlt, IconInfoCircle, IconLink, IconMoon, IconPlus, IconSearch, IconSlantedArrow, IconStarAlt, IconStraightArrow, IconSun, IconType, IconXClose } from ".";

export const IconsList: Record<string, ReactNode> = {
  plus: <IconPlus />,
  sun: <IconSun />,
  moon: <IconMoon />,
  search: <IconSearch />,
  xClose: <IconXClose />,
  home: <IconHome />,
  altHome: <IconHomeAlt />,
  type: <IconType />,
  eye: <IconEye />,
  check: <IconCheck />,
  chevronUp: <IconChevron direction="up" />,
  chevronDown: <IconChevron direction="down" />,
  chevronLeft: <IconChevron direction="left" />,
  chevronRight: <IconChevron direction="right" />,
  altStar: <IconStarAlt />,
  globe: <IconGlobe />,
  infoCircle: <IconInfoCircle />,
  link: <IconLink />,
  slantedArrowUp: <IconSlantedArrow direction="up" />,
  slantedArrowDown: <IconSlantedArrow direction="down" />,
  slantedArrowLeft: <IconSlantedArrow direction="left" />,
  slantedArrowRight: <IconSlantedArrow direction="right" />,
  expand: <IconExpand />,
  hidden: <IconHidden />,
  straightArrowUp: <IconStraightArrow direction="up" />,
  straightArrowDown: <IconStraightArrow direction="down" />,
  straightArrowLeft: <IconStraightArrow direction="left" />,
  straightArrowRight: <IconStraightArrow direction="right" />,
  calendar: <IconCalendar />,
  copy: <IconCopy />,
}
