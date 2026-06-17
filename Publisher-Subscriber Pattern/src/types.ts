export interface Notification {
    id: string
    message: string
    status: "success" | "error" | "warning"
}