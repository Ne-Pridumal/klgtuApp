import { TNotificationItem } from "@shared/ui/core/molecules";

export type TNotification = Pick<TNotificationItem, 'text' | 'autoCloseTime'> & {
  id: string,
}
