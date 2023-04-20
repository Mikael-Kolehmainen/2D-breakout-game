/*
  1. Access database and get user records
  2. Run records through a loop and print them out
*/

const Leaderboard = () => {
  const placeholderData = [
    {
      username: "Placeholder",
      time: "5s"
    },
    {
      username: "Placeholder",
      time: "10s"
    },
    {
      username: "Placeholder",
      time: "14s"
    },
    {
      username: "Placeholder",
      time: "18s"
    }
  ];

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <h3>Save result to leaderboard</h3>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" maxLength="10" required />
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
                <tr>
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
