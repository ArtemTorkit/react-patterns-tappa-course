import { createContext } from "react";
import type { Toast } from "../types";

type AddToastFn = (toast: Omit<Toast, 'id'>) => void;

export const ToastContext = createContext<AddToastFn | null>(null);
