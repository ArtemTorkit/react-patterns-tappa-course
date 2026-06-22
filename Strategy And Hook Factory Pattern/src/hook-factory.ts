import { useUserData } from "./hooks/useUserData";
import { usegqlUserData } from "./hooks/usegqlUserData";
import { usejsonUserData } from "./hooks/usejsonUserData";

const userDataHookMap = {
    gql: usegqlUserData,
    json: usejsonUserData,
}

export function createUserDataHook(type: string) {
    return userDataHookMap[type];
}