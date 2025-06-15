import React, { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, setUser } from "./authSlice";

const AuthObserver = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const axiosSecure = useAxiosSecure();
  console.log("from auth observer", user);

  useEffect(() => {
    const getUser = async () => {
      dispatch(setIsLoading(true));
      try {
        const res = await axiosSecure.get("/api/user");

        if (res.data.success) {
          dispatch(setUser(res.data.user));
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    getUser();
  }, [axiosSecure]);

  return <div></div>;
};

export default AuthObserver;
