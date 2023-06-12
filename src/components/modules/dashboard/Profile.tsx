import { Avatar } from "@mantine/core";

const Profile = () => {
  return (
    <div className="flex bg-gray-200 ">
      <Avatar
        radius="xl"
        color="dark"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
      />
      <p className="text-center">John Doe</p>
    </div>
  );
};

export default Profile;
