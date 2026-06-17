import { useState } from 'react'
import { useEvent } from '../../hooks/useEvent';
import NotificationCard from '../NotificationCard';
import { getNotificationsFromStorage } from '../../utils/getNotificationsFromStorage';
import type { Notification } from '../../types';

const NotificationList = () => {
  const [notifications, setNotifications] = useState<Notification[]>(() => getNotificationsFromStorage());
  
  useEvent("message:notify", (notification: Notification) => {
    setNotifications(prev => [...prev, notification])
  })

  useEvent("message:dismiss", (id: string) => {
    setNotifications(prev => prev.filter(el => el.id !== id))
  })

  return (
    <div>
        <h2>
            NotificationList
        </h2>
        <ul>
            {notifications.map(notification=> (
                <NotificationCard notification={notification}/>
            ))}
        </ul>
    </div>
  )
}

export default NotificationList