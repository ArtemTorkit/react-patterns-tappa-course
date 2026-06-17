import { eventBus } from '../../lib/eventBus'
import type { Notification } from '../../types';

const MESSAGES: Omit<Notification, 'id'>[] = [
    { message: "HELLO! FIRST NOTIFICATION!", status: "success", },
    { message: "HELLO! SECCOND NOTIFICATION!", status: "error", },
    { message: "HELLO! THIRD NOTIFICATION!", status: "warning", },
]

const generateRandomMessage = (): Notification => {
  const randomIndex = Math.floor(Math.random() * MESSAGES.length);
  return {
    ...MESSAGES[randomIndex],
    id: crypto.randomUUID()
  };
};

const saveMessageToLocalStorage = (newMessage: Notification) => {
  try {
    const storedNotifications = localStorage.getItem('notification')
    let newNotifications;

    if (storedNotifications) {
        const parsedNotifications = JSON.parse(storedNotifications)
        newNotifications = [...parsedNotifications, newMessage]
    } else {
        newNotifications = [newMessage]
    }
    
    localStorage.setItem('notification', JSON.stringify(newNotifications))
  } catch(error) {
    console.error(error)
  }
}

const NotificationButton = () => {

  const handleClick = () => {
      const newMessage = generateRandomMessage();

      saveMessageToLocalStorage(newMessage)
      eventBus.publish("message:notify", newMessage)
  }

  return (
    <div>
        <h2>
            NotificationButton
        </h2>
        <button onClick={handleClick}>-- Notify --</button>
    </div>
  )
}

export default NotificationButton