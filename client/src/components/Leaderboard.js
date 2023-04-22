import { useEffect, useState } from "react";
import Backend from "../classes/Backend";

const Leaderboard = (props) => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [userTimesElements, setUserTimesElements] = useState([]);

  useEffect(() => {
    const createUserTimesElements = async () => {
      const users = await Backend.selectUserTimes();
      const sortedUsersByTime = users.sort((a, b) => a["user_time"] - b["user_time"]);
      const elements = [];
      let index = 1;

      if (sortedUsersByTime.length === 0) {
        elements.push(
          <tr className="wide" key="no-records">
            <td colSpan="3">There's no recorded results.</td>
          </tr>
        );
      }

      sortedUsersByTime.forEach(user => {
        if (index <= 10) {
          elements.push(
            <tr key={user.id}>
              <td>{index}</td>
              <td>{user.username}</td>
              <td>{user.user_time}</td>
            </tr>
          );
        }
        index++;
      });

      setUserTimesElements(elements);
    };
    createUserTimesElements();
  }, []);

  const saveUsername = (event) => {
    const username = event.target.value;

    if (username !== "") {
      props.setUsername(username);
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  };

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <h3>Save your result to leaderboard</h3>
      <label htmlFor="username">Name: </label>
      <input type="text" name="username" maxLength="10" required onChange={(e) => saveUsername(e)} />
      <input type="submit" value="SUBMIT" className="btn" onClick={props.saveUserTime} disabled={disableSubmit} />
      <table>
        <tbody>
          <tr>
            <td>Placement</td>
            <td>User</td>
            <td>Time (s)</td>
          </tr>
          {userTimesElements}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
