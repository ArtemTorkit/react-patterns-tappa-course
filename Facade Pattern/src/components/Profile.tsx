import { useProfileFacade } from "../hooks/facade/useProfileFacade";

const Profile = () => {
  const { userData, profileCompletionPercentage, accountStatus } =
    useProfileFacade();

  return (
    <div>
      <h1>Profile</h1>
      <div className="">{userData.name}</div>
      <div className="">{userData.age}</div>
      <div className="">{userData.status}</div>
      <div className="">Account activity status: {accountStatus}</div>
      <div className="">Profile completion percentage: {profileCompletionPercentage}%</div>
    </div>
  );
};

export default Profile;
