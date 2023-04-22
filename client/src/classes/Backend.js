import axios from "axios";
import { BACKEND_ADDRESS } from "../const";

class Backend {

  static async postUserTime(username, time) {
    try {
      const user = {
        "username": username,
        "time": time
      };

      const response = await axios.post(`${BACKEND_ADDRESS}/save-user-time`, user);

      console.info(response);

      return "success";
    } catch (error) {
      console.error(error);
    }
  }

  static async selectUserTimes() {
    try {
      const response = await axios.get(`${BACKEND_ADDRESS}/get-user-times`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Backend;
