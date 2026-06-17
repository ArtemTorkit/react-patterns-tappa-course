import { crossTabChannel } from "./broadcast";
import { eventBus } from "./eventBus";

crossTabChannel.onmessage = ({data}) => {
    const {eventName, payload} = data;

    eventBus.publish(eventName, payload, { broadcast: false })
}