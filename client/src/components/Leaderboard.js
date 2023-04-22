/*
  1. Access database and get user records
  2. Run records through a loop and print them out
*/
import { useState } from "react";

const Leaderboard = (props) => {
  const [disableSubmit, setDisableSubmit] = useState(true);

  const placeholderData = [
    {
      id: 1,
      username: "Placeholder",
      time: "5s"
    },
    {
      id: 2,
      username: "Placeholder",
      time: "10s"
    },
    {
      id: 3,
      username: "Placeholder",
      time: "14s"
    },
    {
      id: 4,
      username: "Placeholder",
      time: "18s"
    }
  ];

  const saveUsername = (event) => {
    event.preventDefault();
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
            <td>Time</td>
          </tr>
          {
            placeholderData.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index}</td>
                  <td>{user.username}</td>
                  <td>{user.time}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
