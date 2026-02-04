

import axios from "axios";

//  Change BASE_URL when deploying

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});



export const fetchCountries = async () => {
  const res = await API.get("/countries");
  return res.data;
};

export const fetchTimeline = async () => {
  const res = await API.get("/timeline");
  return res.data;
};

export const fetchCompanyInfo = async () => {
  const res = await API.get("/company");
  return res.data;
};

//contact form

export const submitContact = async (formData) => {
  const res = await API.post("/contact", formData);
  return res.data;
};

export default API;
