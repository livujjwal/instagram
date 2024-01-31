import axios from "axios";
import { LOGOUT_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSuccess } from "../utils/validationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user.userInfo);
  const user = userInfo ? userInfo : JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const token = JSON.parse(localStorage.getItem("token"));

  async function logoutUser() {
    try {
      const response = await axios.get(LOGOUT_URL, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      dispatch(setSuccess(response));
    } catch (error) {
      dispatch(setError(error));
    }
  }
  return (
    <div className="h-20 flex items-center justify-center gap-10 sticky top-0 left-60 ">
      <div></div>
      {!user ? (
        ""
      ) : (
        <div className="flex items-center justify-between gap-4">
          <p>{user.name}</p>
          <button className="" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
