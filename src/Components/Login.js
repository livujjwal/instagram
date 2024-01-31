import { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import {
  LOGIN_URL,
  MICROSOFT_ICON_URL,
  PLAY_ICON_URL,
  services,
} from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../utils/validationSlice";
import { addUser, setToken } from "../utils/userSlice";
import axios from "axios";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogin() {
    loginUser(email?.current?.value, password?.current?.value);
  }
  async function loginUser(email, password) {
    try {
      const res = await axios.post(LOGIN_URL, { email, password });
      dispatch(addUser(res?.data?.data));
      dispatch(setToken(res?.data?.data?.token));
      localStorage.setItem("token", JSON.stringify(res?.data?.data?.token));
      localStorage.setItem("user", JSON.stringify(res?.data?.data));
      dispatch(setSuccess(res?.data?.message));
      dispatch(setError(null));
      navigate("/dashboard");
    } catch (error) {
      dispatch(setError(JSON.parse(error?.request?.response)?.message));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-4 mx-auto">
      <div className="flex flex-col items-center justify-center border-slate-300 border max-w-[350px] px-10 py-4 rounded-sm">
        <h1 className="font-logo text-5xl py-2 mb-5">Instgram</h1>
        <form className="my-2" onSubmit={(e) => e.preventDefault()}>
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={email}
            type="text"
            placeholder="Mobile Number or Email"
          />
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={password}
            type="password"
            placeholder="Password"
          />

          <button
            onClick={handleLogin}
            className="bg-[#4CB5F9] w-full rounded-lg p-[0.4rem] text-white text-sm font-medium my-2"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center justify-between py-1">
          <div className="border-b border-slate-400 w-28"></div>
          <p className="text-sm font-medium text-slate-500 text-center py-2 px-2">
            {" "}
            OR
          </p>
          <div className="border-b border-slate-400 w-28"></div>
        </div>
        <button className=" w-full rounded-lg p-[0.4rem] text-blue-900 text-sm font-medium flex items-center justify-center my-[.8rem]">
          <FaFacebook className="inline-block mx-1" />
          Login in with Facebook
        </button>
        <p className="text-blue-900 py-1 mt-2 text-center text-xs font-light">
          {" "}
          Forget password?
        </p>{" "}
      </div>
      <div className=" border-slate-300 border  max-w-[350px] py-4 mx-auto my-4 rounded-sm w-full text-center">
        <button className="font-light ">
          <Link to="/signup">
            Don't have an account?{" "}
            <span className="text-blue-900">Sign up</span>
          </Link>
        </button>
      </div>
      <h6>Get the app.</h6>
      <div className="flex items-center justify-between my-2 gap-2">
        <img className="w-32 " src={PLAY_ICON_URL} alt="icon-play" />
        <img
          className="w-32 h-12 py-1 rounded-lg"
          src={MICROSOFT_ICON_URL}
          alt="icon-microsoft"
        />
      </div>
      <div className="text-neutral-500 text-[.74rem] font-light gap-4 text-center pt-14 md:flex-grow">
        <p>
          {services.map((service) => (
            <span key={service} className="px-2">
              {" "}
              {service}
            </span>
          ))}
        </p>
        <p className="pt-4">
          English <span className="mt-[-20px] p-2">v</span> English © 2024
          Instagram from Meta
        </p>
      </div>
    </div>
  );
};
export default Login;
