import { useState, useCallback, type ReactNode } from "react";
import { ToastContext } from "../context/ToastContext";
import type { Toast } from "../types";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) =>
      prev.filter((toast) => Number(toast.id) !== Number(id)),
    );
  }, []);

  const addToast = useCallback(
    ({
      icon = "",
      message = "",
      action = () => {},
      template = "info",
    }: Omit<Toast, "id">) => {
      const id = Date.now();

      setToasts((prev) => [...prev, { id, message, icon, action, template }]);

      setTimeout(() => {
        removeToast(id);
      }, 3000);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}

      <div className="toast-container">
        {toasts.map((toast) => (
          <div className="toast-card" key={toast.id}>
            <div className="toast-icon">
              {toast.icon ? (
                <img
                  src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                  alt="no icon"
                  className="toast-icon"
                />
              ) : (
                <img
                  src={
                    toast.icon ||
                    "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
                  }
                  alt="icon"
                  className="toast-icon"
                />
              )}
            </div>
            <div className="toast-message">{toast.message}</div>
            <div className="toast-close" onClick={() => removeToast(toast.id)}>
              X
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
