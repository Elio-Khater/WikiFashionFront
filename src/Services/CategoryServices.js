import Api from "./ApiClient";

const CategoryServices = {
  getCategories: async () => {
    return await Api.get("categories");
  },
  getUsersByCategory: async (id) => {
    return await Api.get("categories/" + id + "/users");
  },
};

export default CategoryServices;
