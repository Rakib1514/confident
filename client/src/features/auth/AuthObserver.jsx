import React, { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useSelector } from "react-redux";

const AuthObserver = () => {
  const { user } = useSelector((state) => state.auth);

  const axiosSecure = useAxiosSecure();
  console.log("from auth obsercver", user);

  useEffect(() => {
    const getUser = async () => {
      const res = await axiosSecure.get("/api/user");

      console.log(res);
    };

    getUser();
  }, [axiosSecure]);

  return <div></div>;
};

export default AuthObserver;
