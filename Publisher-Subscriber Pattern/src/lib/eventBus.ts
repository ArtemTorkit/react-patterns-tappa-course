import { crossTabChannel } from "./broadcast";

const listeners = new Map();

export const eventBus = {
    subscribe(eventName: string, handler) {
        if (!listeners.has(eventName)) {
            listeners.set(eventName, new Set());
        }

        listeners.get(eventName).add(handler)

        return () => {
            listeners.get(eventName)?.delete(handler);
        }
    },

    publish(eventName: string, payload, configuration = { broadcast: true } ) {
        listeners.get(eventName)?.forEach((handler) => {
            handler(payload)
        })

        if (configuration.broadcast) {
            crossTabChannel.postMessage({eventName, payload})
        }
    }
}