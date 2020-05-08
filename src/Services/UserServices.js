import Api from "./ApiClient";

const UserServices = {
  getUserById: async (id) => {
    return await Api.get("users/" + id);
  },
};

export default UserServices;
