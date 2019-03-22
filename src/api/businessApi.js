import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/businesses/";

export const getBusinesses = () =>
  fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
