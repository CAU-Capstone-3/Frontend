import { Outlet } from "react-router-dom";
import Bar from "./components/Bar";
function App() {
  return (
    <>
      <Bar />
      <Outlet />
    </>
  );
}

export default App;
