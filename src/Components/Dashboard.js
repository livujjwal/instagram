import axios from "axios";
import { useEffect, useContext, useState } from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [joke, setJoke] = useState("");
  const [name, setName] = useState("");
const navigate = useNavigate();
  const { token,setToken } = useContext(userContext);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
        navigate("/login")
    }
    getJoke();
  }, [token]);

  async function getJoke() {
    try {
      const response = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setJoke(response.data.data.message);
      setName(response.data.data.user.name);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    try {
        const response = await axios.delete(
            "https://instagram-express-app.vercel.app/api/auth/logout",
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
          setJoke("")
          setName('')
          setToken('')
          localStorage.removeItem("token")
    } catch (error) {
        console.log(error)
    }

  }

  return (
    <div>
      <h1>Welcome {name}</h1>
      <p>{joke}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Dashboard;
