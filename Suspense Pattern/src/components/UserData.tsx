import { use } from "react";
import { getUserResources } from "../resources/userResources";
import type { UserDataType } from "../types";

const UserData = () => {
  const { userPromise } = getUserResources();
  const userData: UserDataType = use(userPromise);

  return (
    <div>
      <h1>User Data:</h1>
      <div className="">id: {userData.id}</div>
      <div className="">Name: {userData.name}</div>
    </div>
  );
};

export default UserData;
