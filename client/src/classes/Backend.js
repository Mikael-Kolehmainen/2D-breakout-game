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
    } catch (error) {
      console.error(error);
    }
  }
}

export default Backend;
