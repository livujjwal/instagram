import { useDispatch } from "react-redux";
import { JOKE_URL } from "./constants";
import { useEffect } from "react";
import axios from "axios";
import { addJoke, addSpeaker } from "./jokeSlice";
import { setError } from "./validationSlice";

const useGetJoke = (token) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getJoke();
  }, []);
  async function getJoke() {
    try {
      const res = await axios.get(JOKE_URL, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      dispatch(addJoke(res.data.data.message));
      dispatch(addSpeaker(res.data.message));
    } catch (error) {
      dispatch(setError(error));
    }
  }
};

export default useGetJoke;
