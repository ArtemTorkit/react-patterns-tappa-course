import { eventBus } from '../lib/eventBus'
import type { Notification } from '../types'

const NotificationCard = ({ notification }: {notification: Notification}) => {

  const handleDismiss = (id: string) => {
    eventBus.publish("message:dismiss", id)
    deleteMessageFromLocalStorage(id)
  }

  const deleteMessageFromLocalStorage = (id: string) => {
    const rawNotifications = localStorage.getItem('notification')

    if (rawNotifications) {
      try {
          const storedNotifications = JSON.parse(rawNotifications) as Notification[]

          localStorage.setItem('notification', JSON.stringify(storedNotifications.filter(el => String(el.id) !== String(id))))
      } catch(error) {
          console.error(error)
      }
    }
  }

  return (
    <li key={notification.id}>
        <div style={{ display: 'flex', gap: '15px' }}>
            <div>{notification.id}</div>
            <div>{notification.message}</div>
            <div>{notification.status}</div>
            <button onClick={()=>handleDismiss(notification.id)}>-- DISMISS --</button>
        </div>
    </li>
  )
}

export default NotificationCard