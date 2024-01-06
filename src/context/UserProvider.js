import { useEffect, useState } from "react";
import userContext from "./userContext";

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      setToken(token)
    }
  })
  return (
    <div>
      <userContext.Provider value={{ token, setToken }}>
        {children}
      </userContext.Provider>
    </div>
  );
};

export default UserProvider;
