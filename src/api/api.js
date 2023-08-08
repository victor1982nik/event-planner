import axios from "axios";

axios.defaults.baseURL = "https://64d0e6e7ff953154bb79ae68.mockapi.io/";

export const fetchEvents = async () => {
  try {
    const result = await axios.get("/Events");
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchEventById = async (id) => {
  try {
    const result = await axios.get(`/Events/${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const createEvent = async (event) => {
  try {
    const result = await axios.post("/Events", event);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteEvent = async (id) => {
  try {
    const result = await axios.delete(`/Events/${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateEvent = async ({ id, newEvent }, thunkAPI) => {
  try {
    const result = await axios.put(`/Events/${id}`, newEvent);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
