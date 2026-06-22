import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useSelectedUserData = () => {
  const hookFromContext = useContext(UserContext);

  if (!hookFromContext) {
    throw new Error(
      "useSelectedUserData must be used within a UserContextProvider",
    );
  }

  return hookFromContext();
};
