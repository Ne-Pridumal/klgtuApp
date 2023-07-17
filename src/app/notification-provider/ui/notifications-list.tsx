import { useContext } from "react";
import styled from "styled-components";
import { NotificationsContext } from "..";
import { NotificationItem } from "@shared/ui/core/molecules";

export const NotificationsList = ({ }) => {
  const { notificationsList, removeNotification } = useContext(NotificationsContext)
  return (
    <Wrapper>
      {notificationsList.map((n) => {
        return (
          <NotificationItem
            text={n.text}
            onClose={() => { removeNotification(n.id) }}
            autoCloseTime={n.autoCloseTime}
            isPicked={true}
            key={n.id}
          />
        )
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
`
