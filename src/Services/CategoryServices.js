import Api from "./ApiClient";

const CategoryServices = {
  getCategories: async () => {
    return await Api.get("api/categories");
  },
  getUsersByCategory: async (id, filters, section) => {
    return await Api.get(
      "api/categories/" +
        id +
        "/users?filters=" +
        filters +
        "&section=" +
        section
    );
  },
};

export default CategoryServices;
