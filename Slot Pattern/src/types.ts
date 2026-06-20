export interface Toast {
  id: number;
  icon?: string;
  message?: string;
  action?: () => void;
  template?: "success" | "error" | "info";
}