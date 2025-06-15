import { Outlet } from "react-router";
import AuthObserver from "../features/auth/authObserver";

const App = () => {
  return (
    <div className=" font-Roboto">
      <AuthObserver/>
      <Outlet />
    </div>
  );
};

export default App;
