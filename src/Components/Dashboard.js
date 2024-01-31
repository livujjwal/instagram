import useGetJoke from "../utils/useGetJoke";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Post from "./Post";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  useGetJoke(token);

  return (
    <div>
      <Sidebar />
      <Header />
      <Post />
    </div>
  );
};
export default Dashboard;
