import Axios from "axios";

export const apiGetActivity = filter =>
  Axios
    .get("https://www.boredapi.com/api/activity", filter)
    .then(response => response.data);
