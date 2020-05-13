import Api from "./ApiClient";

const CategoryServices = {
  getCategories: async () => {
    return await Api.get("api/categories");
  },
  getUsersByCategory: async (id) => {
    return await Api.get("api/categories/" + id + "/users");
  },
};

export default CategoryServices;
