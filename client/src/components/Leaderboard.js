/*
  1. Access database and get user records
  2. Run records through a loop and print them out
*/

const Leaderboard = () => {
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

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <h3>Save result to leaderboard</h3>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" maxLength="10" required />
      <input type="submit" value="Submit" />
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
