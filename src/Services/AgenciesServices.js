import Api from "./ApiClient";
import { id } from "date-fns/locale";

const AgenciesServices = {
  getAgencies: async () => {
    return await Api.get("api/agencies");
  },
  addAgency: async (agency, link) => {
    return await Api.post("api/agencies", { name: agency, link: link });
  },
};
export default AgenciesServices;
