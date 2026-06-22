import { createContext } from "react";

export const UserContext = createContext<(() => void) | null>(null);