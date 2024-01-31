import { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import {
  MICROSOFT_ICON_URL,
  PLAY_ICON_URL,
  SIGNUP_URL,
  services,
} from "../utils/constants";
import { checkSignupValidation } from "../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, setToken } from "../utils/userSlice";
import { setError, setSuccess } from "../utils/validationSlice";
const Signup = () => {
  const email = useRef(null);
  const name = useRef(null);
  const username = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSignup() {
    dispatch(addUser(null));
    dispatch(setSuccess(null));
    dispatch(setError(null));
    if (checkSignupValidation(email, name, password, username)) {
      dispatch(
        setError(checkSignupValidation(email, name, password, username))
      );
      return;
    }
    signUpUser(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
  }
  async function signUpUser(name, email, password) {
    try {
      const res = await axios.post(SIGNUP_URL, { name, email, password });
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
      <div className="flex flex-col items-center justify-center border-slate-300 border max-w-[350px] p-10 rounded-sm">
        <h1 className="font-logo text-5xl py-1">Instgram</h1>
        <h2 className="text-base font-medium text-slate-600 text-center py-1">
          Sign up to see photos and videos from your friends.
        </h2>
        <button className="hover:bg-[#3c86ed] bg-[#0095F6] w-full rounded-lg p-[0.4rem] text-white text-sm font-medium flex items-center justify-center">
          <FaFacebook className="inline-block mx-1" />
          Login in with Facebook
        </button>
        <div className="flex items-center justify-between py-1">
          <div className="border-b border-slate-400 w-28"></div>
          <p className="text-sm font-medium text-slate-500 text-center py-2 px-2">
            {" "}
            OR
          </p>
          <div className="border-b border-slate-400 w-28"></div>
        </div>
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={email}
            type="text"
            placeholder="Mobile Number or Email"
          />
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={name}
            type="text"
            placeholder="Full Name"
          />
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={username}
            type="text"
            placeholder="Username"
          />
          <input
            className="border border-neutral-300 my-1 focus:outline-none w-full p-[.4rem] rounded-sm placeholder:font-light placeholder:text-xs placeholder:text-neutral-600"
            ref={password}
            type="password"
            placeholder="Password"
          />
          <p className="text-xs font-light text-neutral-500 py-1 m-1 text-center">
            People who use our service may have uploaded your contact
            information to Instagram.
            <span className="text-blue-900"> Learn More</span>{" "}
          </p>
          <p className="text-xs font-light text-neutral-500 py-1 m-1 text-center">
            By signing up, you agree to our Terms ,
            <span className="text-blue-900"> Privacy Policy </span> and{" "}
            <span className="text-blue-900">Cookies Policy </span> .
          </p>
          <button
            onClick={handleSignup}
            className="bg-[#4CB5F9] w-full rounded-lg p-[0.4rem] text-white text-sm font-medium"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className=" border-slate-300 border  max-w-[350px] py-4 mx-auto my-4 rounded-sm w-full text-center">
        <button className="font-light py-1 m-1 ">
          <Link to="/">
            Have an account? <span className="text-blue-900">Log in</span>
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

export default Signup;
