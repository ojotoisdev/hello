import { useAuth } from "./AuthContext";

const Profile = () => {
  const { user } = useAuth();
  return <div><h2>Profile</h2><p>Username: {user?.username}</p><p>Role: {user?.role}</p></div>;
};

export default Profile;