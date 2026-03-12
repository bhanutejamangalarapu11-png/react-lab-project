import Users from "./Users";
import ApiData from "./ApiData";
import Logout from "./Logout";

function Dashboard() {
  return (
    <div className="container">

      <h2>Admin Dashboard</h2>

      <Users />

      <ApiData />

      <Logout/>
    </div>
  );
}

export default Dashboard;