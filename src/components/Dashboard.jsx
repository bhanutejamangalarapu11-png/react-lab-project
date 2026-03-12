import Users from "./Users";
import ApiData from "./ApiData";

function Dashboard() {
  return (
    <div className="container">

      <h2>Admin Dashboard</h2>

      <Users />

      <ApiData />

    </div>
  );
}

export default Dashboard;