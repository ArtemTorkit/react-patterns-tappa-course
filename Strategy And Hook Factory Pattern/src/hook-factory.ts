import { useUserData } from "./hooks/useUserData";
import { usegqlUserData } from "./hooks/usegqlUserData";
import { usejsonUserData } from "./hooks/usejsonUserData";

const userDataHookMap = {
  gql: usegqlUserData,
  fetch: useUserData,
  json: usejsonUserData,
};

export function createUserDataHook(type: "gql" | "fetch" | "json") {
  return userDataHookMap[type];
}
