import Api from "./ApiClient";

const CountryServices = {
  getCountries: async () => {
    return await Api.get("api/country");
  },
};
export default CountryServices;
