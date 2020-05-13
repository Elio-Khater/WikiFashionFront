import Api from "./ApiClient";

const UserServices = {
  getUserById: async (id) => {
    return await Api.get("api/users/" + id);
  },

  GetAgenciesById: async (id) => {
    return await Api.get("api/users/" + id + "/agencies");
  },
};

export default UserServices;
