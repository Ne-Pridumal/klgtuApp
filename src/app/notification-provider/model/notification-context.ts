import { TNotification } from "@entities/notification"
import { createContext } from "react"

export type TNotificationsContextValue = {
  notificationsList: TNotification[],
  addNotification: (e: TNotification) => void,
  removeNotification: (id: TNotification['id']) => void,
}

export const NotificationsContext = createContext<TNotificationsContextValue>({
  notificationsList: [],
  addNotification: () => { },
  removeNotification: () => { },
})
