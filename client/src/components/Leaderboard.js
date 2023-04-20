/*
  1. Access database and get user records
  2. Run records through a loop and print them out
*/

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <h3>Save result to leaderboard</h3>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" maxLength="10" required />
      <table>
        <tr>
          <td>Placement</td>
          <td>User</td>
          <td>Time</td>
        </tr>
      </table>
    </div>
  );
};

export default Leaderboard;
