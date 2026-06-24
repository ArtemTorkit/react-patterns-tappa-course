import { fetchUser } from "../api/fetchUser";

let userPromise: Promise<{id: number; name: string}>;

export function createUserResources() {
    userPromise = fetchUser();
}

export function getUserResources() {
    return {
      userPromise
    };
}
