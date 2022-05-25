import axios from "./axios";

export const GetCompanies = async () => {
  const { data } = await axios.get("providers/");
  return data;
};
