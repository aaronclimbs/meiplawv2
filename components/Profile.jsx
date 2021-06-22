import Sidebar from "./Sidebar";

const Profile = ({ children }) => {
  return (
    <div className="flex">
      <article>{children}</article>
      <Sidebar />
    </div>
  );
};

export default Profile;
