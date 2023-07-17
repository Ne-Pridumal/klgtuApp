import { TNotification } from "@entities/notification";
import { ReactNode, useMemo, useRef, useState } from "react";
import { NotificationsContext, TNotificationsContextValue } from "..";
import { NotificationsList } from "./notifications-list";

type TNotificationsProvider = {
  children: ReactNode
}

export const NotificationsProvider = ({ children }: TNotificationsProvider) => {
  const [notifications, setNotifications] = useState<TNotification[]>([])
  const notificationsListRef = useRef(notifications)
  // actual notificationsList
  notificationsListRef.current = notifications
  const addNotification = (n: TNotification) => {
    const isNotificationExist = notificationsListRef.current.find(i => i.id === n.id)
    const defaultTimer = 10
    if (isNotificationExist) {
      const newState = notificationsListRef.current.filter(i => i.id !== n.id)
      setNotifications(newState)
      return
    }
    const newState = [...notificationsListRef.current]
    newState.unshift({ ...n, autoCloseTime: n.autoCloseTime ?? defaultTimer })
    setNotifications(newState)
  }
  const removeNotification = (id: TNotification['id']) => {
    const newState = notificationsListRef.current.filter(i => i.id !== id)
    setNotifications(newState)
  }
  const context = useMemo<TNotificationsContextValue>(() => ({
    removeNotification,
    addNotification,
    notificationsList: notifications,
  }), [notifications])
  return (
    <NotificationsContext.Provider value={context}>
      <NotificationsList />
      {children}
    </NotificationsContext.Provider>
  );
};
