import { createContext } from "react"

export type TLayoutContextValue = {
  footerVisibility: boolean,
  setFooterVisibility: (e: boolean) => void,
}

export const LayoutContext = createContext<TLayoutContextValue>({
  setFooterVisibility: () => { },
  footerVisibility: true,
})
