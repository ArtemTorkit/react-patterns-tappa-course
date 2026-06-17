import type { Notification } from "../types"

export const getNotificationsFromStorage = () : Notification[] => {
    const raw = localStorage.getItem('notification')

    if (!raw) return []

    try {
      const stored = JSON.parse(raw)
      return Array.isArray(stored) ? stored : []
    } catch (error) {
      console.error(error)
      return []
    }
}