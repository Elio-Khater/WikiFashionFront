import Api from "./ApiClient";

const CategoryServices = {
  getCategories: async () => {
    return await Api.get("api/categories");
  },
  getUsersByCategory: async (id, filters, section, adfilters) => {
    let eyes = "";
    let agency = 0;
    if (adfilters) {
      if (adfilters.eyes) eyes = adfilters.eyes;
      if (adfilters.agency) agency = adfilters.agency;
    }
    return await Api.get(
      "api/categories/" +
        id +
        "/users?filters=" +
        filters +
        "&section=" +
        section +
        "&eyes=" +
        eyes +
        "&agency=" +
        agency
    );
  },
};

export default CategoryServices;
