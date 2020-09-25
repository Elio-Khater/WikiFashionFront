import Api, { multipartInstance } from "./ApiClient";

const UserServices = {
  getUserById: async (id) => {
    return await Api.get("api/users/" + id);
  },

  editUser: async (id, user) => {
    return await Api.put("api/users/" + id, user);
  },

  GetAgenciesById: async (id) => {
    return await Api.get("api/users/" + id + "/agencies");
  },
  GetUsers: async () => {
    return await Api.get("api/users");
  },
  Login: async (id, log) => {
    return await Api.put("api/users/" + id + "/login", log);
  },
  DeleteUser: async (id) => {
    return await Api.delete("api/users/" + id);
  },
  DeleteImage: async (id, image) => {
    return await Api.delete("api/users/" + id + "/image?image=" + image);
  },
  addAgenciesToUser: async (id, agencies) => {
    return await Api.put(
      "api/users/" + id + "/agencies/add",
      JSON.stringify(agencies)
    );
  },
  editAgenciesToUser: async (id, agencies) => {
    return await Api.put(
      "api/users/" + id + "/agencies/edit",
      JSON.stringify(agencies)
    );
  },
  AddUser: async (model) => {
    return await Api.post("api/users/", model);
  },
  AddUserImages: async (id, images) => {
    let formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("files", images[i]);
    }

    return await multipartInstance.put("api/users/" + id + "/images", formData);
  },
};

export default UserServices;
